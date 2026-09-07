import { useEffect, useRef } from 'react'

type AsciiBackgroundProps = {
  source: string
  className?: string
}

type Sample = { x: number; y: number; r: number; g: number; b: number; luminance: number }

const clamp = (value: number, min = 0, max = 255) => Math.min(max, Math.max(min, value))

function adjustColor(sample: Sample) {
  const contrast = 1.15
  const brightness = 12
  const average = (sample.r + sample.g + sample.b) / 3
  const saturation = 1.04
  const adjust = (channel: number) => clamp((channel - 128) * contrast + 128 + brightness)
  const r = adjust(sample.r)
  const g = adjust(sample.g)
  const b = adjust(sample.b)
  return {
    r: clamp(average + (r - average) * saturation),
    g: clamp(average + (g - average) * saturation),
    b: clamp(average + (b - average) * saturation),
  }
}

function drawMosaic(ctx: CanvasRenderingContext2D, samples: Sample[], width: number, height: number, cellSize: number, time: number) {
  const columns = Math.ceil(width / cellSize)
  samples.forEach((sample, index) => {
    const column = index % columns
    const row = Math.floor(index / columns)
    const wave = Math.sin(time * 0.002 + column * 0.45 + row * 0.16) * 0.5 + 0.5
    const color = adjustColor(sample)
    const size = Math.max(2, cellSize * (0.38 + sample.luminance * 0.48 + wave * 0.08))
    const x = column * cellSize + (cellSize - size) / 2
    const y = row * cellSize + (cellSize - size) / 2
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.2 + sample.luminance * 0.7})`
    ctx.fillRect(x, y, size, size)
  })
}

function drawPostEffects(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.2, width / 2, height / 2, Math.max(width, height) * 0.72)
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)')
  vignette.addColorStop(1, 'rgba(17, 28, 45, 0.38)')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, width, height)

  ctx.globalCompositeOperation = 'screen'
  ctx.filter = 'blur(18px)'
  ctx.globalAlpha = 0.16
  ctx.drawImage(ctx.canvas, 0, 0)
  ctx.filter = 'none'
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = 'source-over'

  ctx.fillStyle = 'rgba(24, 34, 48, 0.045)'
  for (let y = 0; y < height; y += 4) ctx.fillRect(0, y, width, 1)
}

export default function AsciiBackground({ source, className = '' }: AsciiBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return undefined
    const image = new Image()
    image.src = source
    let frame = 0
    let animationFrame = 0
    let pointerX = 0.5
    let pointerY = 0.5

    const draw = (time: number) => {
      const width = window.innerWidth
      const height = window.innerHeight
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const cellSize = Math.max(12, Math.round(Math.min(width, height) / 48))
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      context.clearRect(0, 0, width, height)
      context.fillStyle = '#f5f1eb'
      context.fillRect(0, 0, width, height)

      const imageRatio = image.width / image.height
      const canvasRatio = width / height
      const drawWidth = canvasRatio > imageRatio ? width : height * imageRatio
      const drawHeight = canvasRatio > imageRatio ? width / imageRatio : height
      const offsetX = (width - drawWidth) / 2 + (pointerX - 0.5) * 18
      const offsetY = (height - drawHeight) / 2 + (pointerY - 0.5) * 18
      const sourceCanvas = document.createElement('canvas')
      sourceCanvas.width = width
      sourceCanvas.height = height
      const sourceContext = sourceCanvas.getContext('2d')
      if (!sourceContext) return
      sourceContext.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
      const pixels = sourceContext.getImageData(0, 0, width, height).data
      const columns = Math.ceil(width / cellSize)
      const rows = Math.ceil(height / cellSize)
      const samples: Sample[] = []

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          let red = 0
          let green = 0
          let blue = 0
          let count = 0
          for (let y = row * cellSize; y < Math.min((row + 1) * cellSize, height); y += 2) {
            for (let x = column * cellSize; x < Math.min((column + 1) * cellSize, width); x += 2) {
              const pixel = (y * width + x) * 4
              red += pixels[pixel]
              green += pixels[pixel + 1]
              blue += pixels[pixel + 2]
              count += 1
            }
          }
          const r = red / count
          const g = green / count
          const b = blue / count
          samples.push({ x: column, y: row, r, g, b, luminance: (r * 0.299 + g * 0.587 + b * 0.114) / 255 })
        }
      }

      context.globalAlpha = 0.72
      if (frame % 2 === 0) drawMosaic(context, samples, width, height, cellSize, time)
      else drawMosaic(context, samples, width, height, cellSize, time + 90)
      context.globalAlpha = 1
      drawPostEffects(context, width, height)
      frame += 1
      animationFrame = window.requestAnimationFrame(draw)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth
      pointerY = event.clientY / window.innerHeight
    }
    const handleResize = () => window.cancelAnimationFrame(animationFrame)
    image.onload = () => { animationFrame = window.requestAnimationFrame(draw) }
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [source])

  return <canvas ref={canvasRef} aria-hidden="true" className={`ascii-background ${className}`} />
}