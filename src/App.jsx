import heroImg from './assets/hero.png'
import profileImg from './assets/nanda.jpg.jpeg'
import karyaOne from './assets/karya-1.mp4'
import karyaTwo from './assets/karya-2.mp4'
import karyaThree from './assets/karya-3.mp4'
import { useEffect, useState } from 'react'
import './App.css'
import './overlay.css'
import './projects.css'
import './motion.css'

const projects = [
  { number: '01', type: 'Clothing brand / Website', title: 'CLOTHING BRAND WEBSITE', description: 'A bold clothing brand website built around movement, identity and everyday expression.', tags: ['Branding', 'Fashion', 'Website'], className: 'project-luma', video: karyaOne },
  { number: '02', type: '16flames / Website', title: '16FLAMES WEBSITE', description: 'A visual website experience for 16flames, shaped by style, rhythm and attitude.', tags: ['Website', 'Visual', 'Direction'], className: 'project-sora', video: karyaTwo },
  { number: '03', type: 'Restaurant website / Digital experience', title: 'RESTAURANT WEBSITE', description: 'A warm digital experience for presenting a restaurant, its menu and its atmosphere.', tags: ['Website', 'UI/UX', 'Food'], className: 'project-hours', video: karyaThree },
]

function ArrowIcon() { return <span className="arrow-icon" aria-hidden="true">↗</span> }

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 900)
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    const moveCursor = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', moveCursor)
    return () => {
      window.clearTimeout(loaderTimer)
      observer.disconnect()
      window.removeEventListener('pointermove', moveCursor)
    }
  }, [])

  return (
    <main>
      <div className={`page-loader ${isLoading ? 'is-loading' : ''}`} aria-hidden="true"><span>N</span><small>loading experience</small></div>
      <div className="custom-cursor" aria-hidden="true" />
      <nav className="nav container"><a className="brand" href="#top" aria-label="Nanda home"><span>N</span>nanda.</a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="nav-status" href="#contact"><i /> Available for work</a></nav>
      <section className="hero-section container" id="top"><div className="hero-copy"><p className="eyebrow"><span>01</span> Independent web developer</p><h1>Ideas made<br /><em>alive.</em></h1><p className="hero-intro">I’m Nanda — a web developer building fast, expressive and memorable digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowIcon /></a><a className="text-link" href="#about">More about me <span>↓</span></a></div></div><div className="hero-scene" aria-label="Abstract 3D design object"><div className="scene-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="photo-overlay"><img src={profileImg} alt="Portrait of Nanda" /><span>code<br /><strong>in progress</strong></span></div><div className="cube-wrap"><img src={heroImg} alt="Abstract 3D layered cube" /></div><div className="scene-label label-top">web<br /><strong>in motion</strong></div><div className="scene-label label-bottom">scroll to<br /><strong>explore ↓</strong></div><span className="scene-dot dot-one" /><span className="scene-dot dot-two" /></div><div className="hero-footer"><span>Based in Yogyakarta, ID</span><span>Scroll to explore <b>↓</b></span><span>© 2024—2025</span></div></section>
      <div className="marquee" aria-hidden="true"><div>WEB DEVELOPMENT <span>✦</span> INTERACTIVE EXPERIENCES <span>✦</span> WEB DEVELOPMENT <span>✦</span> INTERACTIVE EXPERIENCES <span>✦</span></div></div>
      <section className="statement container" data-reveal><p className="section-kicker">/ What I believe</p><h2>Good design is not just<br /><span>aesthetic. It is <em>felt.</em></span></h2><p className="statement-note">Creating with curiosity, intention and a little bit of magic.</p></section>
      <section className="work-section container" id="work" data-reveal><div className="section-heading"><div><p className="section-kicker">/ Selected work</p><h2>A few things<br /><em>I’ve made.</em></h2></div><p className="heading-side">Three moving studies exploring rhythm, atmosphere and visual storytelling.</p></div><div className="project-list">{projects.map((project) => <article className={`project ${project.className}`} key={project.number} data-reveal><div className="project-visual"><span className="project-number">{project.number}</span><video className="project-video" src={project.video} poster={heroImg} autoPlay muted loop playsInline controls preload="auto"><track kind="captions" /></video><span className="view-project">Play project <ArrowIcon /></span></div><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <section className="about container" id="about" data-reveal><div className="about-image"><div className="portrait-placeholder"><img src={profileImg} alt="Nanda" /></div><p>Building with<br /><em>intention</em> since 2026.</p></div><div className="about-copy"><p className="section-kicker">/ A little about me</p><h2>Making the complex<br /><em>feel simple.</em></h2><p>I’m a web developer who loves turning ideas into fast, thoughtful and interactive websites. I work across frontend development, motion and digital experiences.</p><p>When I’m not coding, you’ll find me collecting old magazines, taking long walks, or making playlists for projects that don’t exist yet.</p><a className="text-link" href="#contact">Let’s build something <ArrowIcon /></a></div></section>
      <section className="capabilities container" data-reveal><p className="section-kicker">/ What I do</p><div className="capability-grid"><div><span>01</span><h3>Frontend<br /><em>development</em></h3><p>Responsive websites with clean code and polished interactions.</p></div><div><span>02</span><h3>Interactive<br /><em>experiences</em></h3><p>Motion, 3D and interfaces that make websites feel alive.</p></div><div><span>03</span><h3>Creative<br /><em>technology</em></h3><p>Finding the right technology to turn an idea into a real product.</p></div></div></section>
      <section className="contact container" id="contact" data-reveal><p className="section-kicker">/ Have a project in mind?</p><h2>Let’s make<br /><em>something good.</em></h2><a className="contact-email" href="mailto:hello@nanda.studio">hello@nanda.studio <ArrowIcon /></a><div className="contact-details"><a href="https://wa.me/6285285335521" target="_blank" rel="noreferrer">WhatsApp <strong>+62 852-8533-5521</strong></a><a href="https://instagram.com/nzcoding_" target="_blank" rel="noreferrer">Instagram <strong>@nzcoding_</strong></a></div><div className="contact-bottom"><span>Available for select freelance projects</span><div><a href="https://instagram.com/nzcoding_" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/6285285335521" target="_blank" rel="noreferrer">WhatsApp</a></div></div></section><footer className="footer container"><span>Nnanda. — crafted with curiosity</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
