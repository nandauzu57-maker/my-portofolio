"use client"

import { LazyMotion, domAnimation, m } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface DancingLettersProps {
  text?: string
  className?: string
  letterClassName?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const letterAnimations = [
  {
    active: { scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1], scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1] },
    transition: { duration: 0.8, ease: 'easeInOut' },
    transformOrigin: 'center center',
  },
  {
    active: { rotate: [0, 80, 60, 80, 60, 0], y: [0, 10, -5, 5, -2, 0], originX: 0, originY: 1 },
    transition: { duration: 1.2, ease: [0.175, 0.885, 0.32, 1.275] },
    transformOrigin: 'bottom left',
  },
  {
    active: { scaleY: [1, 0.6, 1.2, 1], y: [0, 20, -40, 0] },
    transition: { duration: 0.6, ease: 'easeOut' },
    transformOrigin: 'bottom center',
  },
  {
    active: { rotateX: [0, 240, 150, 200, 175, 180, 180, 0], scale: [1, 1.1, 1] },
    transition: { duration: 2, ease: 'easeOut', times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.85, 1] },
    transformOrigin: '50% 80%',
  },
  {
    active: { x: [0, -20, 15, -10, 5, 0] },
    transition: { duration: 0.8, ease: 'easeInOut' },
    transformOrigin: 'center center',
  },
  {
    active: { x: [0, -5, 5, -5, 5, -2, 2, 0], y: [0, -2, 2, -1, 1, 0], rotate: [0, -1, 1, -0.5, 0.5, 0] },
    transition: { duration: 0.5, ease: 'linear' },
    transformOrigin: 'center center',
  },
  {
    active: { scale: [1, 1.4, 1] },
    transition: { duration: 0.5, ease: 'easeInOut' },
    transformOrigin: 'center center',
  },
  {
    active: {
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      textShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 20px 20px rgba(0,0,0,0.2)', '0px 0px 0px rgba(0,0,0,0)'],
    },
    transition: { duration: 1.2, ease: 'easeInOut' },
    transformOrigin: 'center center',
  },
] as const

const DancingLetters = ({ text = 'ANIMATE', className = '', letterClassName = '', autoPlay = false, autoPlayInterval = 3000 }: DancingLettersProps) => {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const letters = text.split('')

  const handleClick = useCallback((index: number) => {
    setActiveIndices((previous) => {
      const next = new Set(previous)
      next.delete(index)
      window.setTimeout(() => setActiveIndices((current) => new Set(current).add(index)), 10)
      return next
    })
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!autoPlay || letters.length === 0) return undefined
    let index = 0
    const timer = window.setInterval(() => {
      handleClick(index % letters.length)
      index += 1
    }, autoPlayInterval)
    return () => window.clearInterval(timer)
  }, [autoPlay, autoPlayInterval, handleClick, letters.length])

  const handleAnimationComplete = useCallback((index: number) => {
    setActiveIndices((previous) => {
      if (!previous.has(index)) return previous
      const next = new Set(previous)
      next.delete(index)
      return next
    })
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn('flex items-center justify-center select-none', className)}
        style={{ perspective: '1000px' }}
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          const position = (event.clientX - bounds.left) / bounds.width
          const index = Math.floor(position * letters.length)
          if (index >= 0 && index < letters.length && !activeIndices.has(index)) handleClick(index)
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
        }}
      >
        {letters.map((letter, id) => {
          const anim = letterAnimations[id % letterAnimations.length]
          const isActive = activeIndices.has(id)

          return (
            <m.span
              key={`${letter}-${id}`}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0, scaleX: 1, scaleY: 1, textShadow: '0px 0px 0px rgba(0,0,0,0)', transition: { type: 'spring', stiffness: 300, damping: 20 } },
                // @ts-expect-error Motion's transition union does not accept readonly times tuples.
                active: { ...anim.active, opacity: 1, transition: anim.transition },
              }}
              animate={isActive ? 'active' : isLoaded ? 'visible' : undefined}
              onHoverStart={() => { if (!isActive) handleClick(id) }}
              onClick={() => handleClick(id)}
              onAnimationComplete={(definition) => { if (definition === 'active') handleAnimationComplete(id) }}
              className={cn('relative inline-block cursor-pointer', letterClassName, isActive ? 'z-10' : 'z-0')}
              style={{ transformOrigin: anim.transformOrigin, transformStyle: 'preserve-3d' }}
            >
              {letter === ' ' ? '\u00a0' : letter}
            </m.span>
          )
        })}
      </m.div>
    </LazyMotion>
  )
}

export default DancingLetters