import heroImg from './assets/hero.png'
import profileImg from './assets/nanda.jpg.jpeg'
import karyaOne from './assets/karya1.mp4'
import karyaTwo from './assets/karya-2.mp4'
import karyaThree from './assets/karya-3.mp4'
import exempleVideo from './assets/xemple.mp4'
import AsciiBackground from './components/ui/ascii-background'
import { useEffect, useState } from 'react'
import DancingLetters from './components/ui/dancing-letters'
import './App.css'
import './skills.css'
import './overlay.css'
import './projects.css'
import './motion.css'
import './conversion.css'
import './polish.css'

const projects = [
  { number: '01', type: 'Digital storefront / Food & beverage', title: 'Online Food Storefront', description: 'A product-led food ordering experience with clear menu browsing and direct WhatsApp enquiries.', tags: ['E-commerce', 'Food', 'WhatsApp'], className: 'project-luma', video: karyaOne },
  { number: '02', type: 'Fashion / Brand website', title: '16Flames — Fashion Website', description: 'A bold fashion brand experience with editorial imagery and a distinct visual identity.', tags: ['Fashion', 'Brand', 'Website'], className: 'project-sora', video: karyaTwo },
  { number: '03', type: 'Restaurant / Digital experience', title: 'Restaurant Website', description: 'A warm digital experience for presenting a restaurant, its menu and its atmosphere.', tags: ['Website', 'UI/UX', 'Food'], className: 'project-hours', video: karyaThree },
  { number: '04', type: 'Motion / Interface study', title: 'Motion & Interaction Study', description: 'An exploration of visual rhythm, transitions and storytelling across digital screens.', tags: ['Motion', 'Interaction', 'Visual'], className: 'project-luma', video: exempleVideo },
]

const whatsappLink = 'https://wa.me/6285285335521?text=Hi%20Nanda%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.'

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
    const videoObserver = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? null
      : new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (!(video instanceof HTMLVideoElement)) return
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              if (error.name !== 'AbortError') console.error('Unable to play portfolio preview.', error)
            })
          } else {
            video.pause()
          }
        })
      }, { rootMargin: '120px 0px', threshold: 0.15 })
    document.querySelectorAll('.project-video').forEach((video) => videoObserver?.observe(video))
    const moveCursor = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', moveCursor)
    return () => {
      window.clearTimeout(loaderTimer)
      observer.disconnect()
      videoObserver?.disconnect()
      window.removeEventListener('pointermove', moveCursor)
    }
  }, [])

  return (
    <main>
      <AsciiBackground source={profileImg} />
      <div className={`page-loader ${isLoading ? 'is-loading' : ''}`} aria-hidden="true"><DancingLetters text="NANDA" autoPlay autoPlayInterval={900} className="loader-dancing-letters" letterClassName="loader-dancing-letter" /><small>loading experience</small></div>
      <div className="custom-cursor" aria-hidden="true" />
      <nav className="nav container" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="Nanda home"><span>N</span>anda.</a><div className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a></div><a className="nav-status" href={whatsappLink} target="_blank" rel="noreferrer"><i /> Start a project</a></nav>
      <section className="hero-section container" id="top"><div className="hero-copy"><p className="eyebrow"><span>01</span> Full-Stack Developer · Indonesia</p><h1>Ideas,<br /><em>made real.</em></h1><p className="hero-intro">Thoughtful websites for founders, small businesses, and ideas ready to grow. I bring considered design and full-stack development together to create clear, useful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Let’s discuss your website <ArrowIcon /></a><a className="text-link" href="#work">See selected work <span>↓</span></a></div></div><div className="hero-scene" aria-label="Abstract 3D design object"><div className="scene-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="photo-overlay"><img src={profileImg} alt="Portrait of Nanda" /><span>code<br /><strong>in progress</strong></span></div><div className="cube-wrap"><img src={heroImg} alt="Abstract 3D layered cube" /></div><div className="scene-label label-top">web<br /><strong>in motion</strong></div><div className="scene-label label-bottom">scroll to<br /><strong>explore ↓</strong></div><span className="scene-dot dot-one" /><span className="scene-dot dot-two" /></div><div className="hero-footer"><span>Based in Indonesia · Working worldwide</span><span>Scroll to explore <b>↓</b></span><span>© 2026</span></div></section>
      <div className="marquee" aria-hidden="true"><div>FULL-STACK DEVELOPMENT <span>✦</span> FRONTEND & BACKEND <span>✦</span> DIGITAL EXPERIENCES <span>✦</span> FULL-STACK DEVELOPMENT <span>✦</span></div></div>
      <section className="statement container" data-reveal><p className="section-kicker">/ Websites with a purpose</p><h2>Your next idea,<br /><span>built to <em>work.</em></span></h2><p className="statement-note">Clear message. Useful experience. Thoughtful development.</p></section>
      <section className="services-section container" id="services" data-reveal><div className="section-heading"><div><p className="section-kicker">/ How I can help</p><h2>A website for<br /><em>what’s next.</em></h2></div><p className="heading-side">Start with the goal. I’ll help shape the right web experience around your business and your customers.</p></div><div className="service-grid"><article className="service-item"><span>01 / GET DISCOVERED</span><h3>Business<br /><em>website</em></h3><p>Introduce your business clearly, showcase what you offer, and make it easy for customers to reach you.</p></article><article className="service-item"><span>02 / LAUNCH AN IDEA</span><h3>Landing<br /><em>page</em></h3><p>Focus attention on one offer, campaign, or launch with a clear message and a direct next step.</p></article><article className="service-item"><span>03 / BUILD A TOOL</span><h3>Custom web<br /><em>experience</em></h3><p>Bring a more interactive idea to life with a tailored interface and the functionality it needs.</p></article></div><a className="service-cta" href={whatsappLink} target="_blank" rel="noreferrer">Not sure what you need? Tell me about your idea <ArrowIcon /></a></section>
      <section className="work-section container" id="work" data-reveal><div className="section-heading"><div><p className="section-kicker">/ Selected work</p><h2>Ideas brought<br /><em>to the screen.</em></h2></div><p className="heading-side">A selection of web experiences and visual explorations, each shaped around a different brand and audience.</p></div><div className="project-list">{projects.map((project) => <article className={`project ${project.className}`} key={project.number} data-reveal><div className="project-visual"><span className="project-number">{project.number}</span><video className="project-video" src={project.video} poster={heroImg} muted loop playsInline controls preload="none" aria-label={`Play ${project.title}`} /><span className="view-project">Play project <ArrowIcon /></span></div><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><a className="work-cta" href={whatsappLink} target="_blank" rel="noreferrer">Have a project like this? Let’s talk <ArrowIcon /></a></section>
      <section className="process-section container" data-reveal><div className="section-heading"><div><p className="section-kicker">/ Simple, collaborative process</p><h2>From brief<br /><em>to browser.</em></h2></div><p className="heading-side">You’ll know what happens next, and you’ll have a chance to review the work along the way.</p></div><div className="process-grid"><article><span>01</span><h3>Tell me the idea</h3><p>Share what you do, who your customers are, and what you want your website to achieve.</p></article><article><span>02</span><h3>Plan the right fit</h3><p>We’ll align on pages, features, visual direction, and a project scope before development starts.</p></article><article><span>03</span><h3>Build & refine</h3><p>I’ll develop the website and share progress so we can refine the details together.</p></article><article><span>04</span><h3>Launch with confidence</h3><p>Review the finished experience together and get it ready to meet your visitors.</p></article></div></section>
      <section className="about container" id="about" data-reveal><div className="about-image"><div className="portrait-placeholder"><img src={profileImg} alt="Nanda" /></div><p>Building with<br /><em>intention</em> and care.</p></div><div className="about-copy"><p className="section-kicker">/ A little about me</p><h2>From first sketch<br /><em>to final build.</em></h2><p>I’m Nanda, a Full-Stack Developer who enjoys turning ideas into fast, thoughtful websites. I work across frontend interfaces, backend logic, and the details that make a product feel complete.</p><p>I care about readable code, responsive design, and building digital experiences that are useful as well as memorable.</p><a className="text-link" href="#contact">Let’s build something <ArrowIcon /></a></div></section>
      <section className="capabilities container" id="skills" data-reveal><div className="skills-heading"><div><p className="section-kicker">/ Skills & toolkit</p><h2>Built from<br /><em>front to back.</em></h2></div><p className="skills-intro">A practical toolkit for taking a web product from interface to implementation.</p></div><div className="capability-grid"><article className="skill-card"><span className="skill-number">01 / BUILD</span><h3>Full-Stack<br /><em>development</em></h3><p>Connecting responsive frontends with backend logic to build complete web experiences.</p><div className="skill-tags"><span>JavaScript</span><span>React</span><span>Node.js</span><span>Express</span></div></article><article className="skill-card"><span className="skill-number">02 / DESIGN</span><h3>Frontend<br /><em>development</em></h3><p>Accessible, responsive interfaces with considered layouts and smooth interactions.</p><div className="skill-tags"><span>HTML</span><span>CSS</span><span>Tailwind CSS</span><span>UI / UX</span></div></article><article className="skill-card"><span className="skill-number">03 / CONNECT</span><h3>Backend &<br /><em>data</em></h3><p>Structuring application data and connecting the pieces through clear APIs.</p><div className="skill-tags"><span>REST API</span><span>MySQL</span><span>Git</span><span>GitHub</span></div></article></div></section>
      <section className="contact container" id="contact" data-reveal><p className="section-kicker">/ Have a project in mind?</p><h2>Let’s build a website<br /><em>that moves you forward.</em></h2><p className="contact-copy">Tell me what you’re working on. We can talk through your goals, what you need, and a good next step — no pressure to have everything figured out.</p><a className="contact-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">Start a conversation on WhatsApp <ArrowIcon /></a><a className="contact-email" href="mailto:hello@nanda.studio">Or email me at hello@nanda.studio <ArrowIcon /></a><div className="contact-details"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp <strong>+62 852-8533-5521</strong></a><a href="https://instagram.com/nzcoding_" target="_blank" rel="noreferrer">Instagram <strong>@nzcoding_</strong></a></div><div className="contact-bottom"><span>Available for select freelance projects</span><div><a href="https://instagram.com/nzcoding_" target="_blank" rel="noreferrer">Instagram</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></div></div></section><footer className="footer container"><span>Nnanda. — crafted with curiosity</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
