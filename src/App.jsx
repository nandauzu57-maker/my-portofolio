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

function DeveloperIllustration() {
  return (
    <svg className="developer-illustration-art" viewBox="0 0 420 360" role="img" aria-label="Animated illustration of a developer working at a laptop">
      <defs>
        <linearGradient id="developer-shirt" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f58268" />
          <stop offset="1" stopColor="#d95648" />
        </linearGradient>
        <linearGradient id="developer-screen" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#35304f" />
          <stop offset="1" stopColor="#24211f" />
        </linearGradient>
        <linearGradient id="developer-laptop" x1="0" x2="1">
          <stop offset="0" stopColor="#d4c8bb" />
          <stop offset=".5" stopColor="#f4eee7" />
          <stop offset="1" stopColor="#c4b8ad" />
        </linearGradient>
      </defs>
      <ellipse cx="207" cy="322" rx="119" ry="16" fill="#8f8176" opacity=".16" />
      <g fill="none" stroke="#a99c90" strokeLinecap="round" strokeWidth="7" opacity=".7">
        <path d="M148 196v52c0 10 8 18 18 18h78c10 0 18-8 18-18v-52" />
        <path d="M207 266v32m-38 0h76" />
      </g>
      <path d="M158 220c-6 37-3 58 4 83l-20 17c-5 5-1 12 6 12h55c7 0 11-5 8-11l-12-27 13-55z" fill="#45415f" />
      <path d="M207 239c-1 33 6 48 23 64l-4 16c-2 7 2 13 9 13h47c8 0 11-8 5-14l-28-26-5-63z" fill="#514a70" />
      <g className="developer-body">
        <path d="M179 111h54l11 30-12 31 16 43c-26 21-71 21-98 0l18-44-12-31z" fill="url(#developer-shirt)" />
        <path d="M192 104h30v28c-7 10-22 10-30 0z" fill="#d99a7d" />
        <path d="M173 143c-12 2-21 12-25 27l-17 51c-2 7 3 13 10 13 5 0 8-3 10-8l26-48" fill="#dc9b7e" />
        <path d="M239 143c12 2 21 12 25 27l17 51c2 7-3 13-10 13-5 0-8-3-10-8l-26-48" fill="#dc9b7e" />
        <g className="developer-head">
          <path d="M174 68c0-23 15-39 36-39 22 0 37 16 37 39v20c0 22-15 38-37 38-21 0-36-16-36-38z" fill="#e8ad8d" />
          <path d="M171 76c-8-30 8-57 38-57 29 0 47 22 38 56l-7-9-7-22c-13 13-33 20-56 19l-2 20z" fill="#302b31" />
          <path d="M178 52c10-18 28-25 48-18 8 3 14 8 18 15-17-5-36-4-54 4-5 2-9 4-13 7z" fill="#42343a" />
          <path d="M187 81h5m25 0h5" fill="none" stroke="#55413b" strokeLinecap="round" strokeWidth="3" />
          <path d="M204 98c4 3 9 3 13 0" fill="none" stroke="#a65e55" strokeLinecap="round" strokeWidth="2.5" />
        </g>
        <path d="M165 151c-10 5-17 18-21 33m105-33c10 5 17 18 21 33" fill="none" stroke="#f79a78" strokeLinecap="round" strokeWidth="5" opacity=".8" />
      </g>
      <g className="developer-laptop-screen">
        <path d="m135 166 139 0 20 95H116z" fill="#ded4cb" stroke="#faf6f1" strokeWidth="5" strokeLinejoin="round" />
        <path d="m143 174 124 0 16 78H127z" fill="url(#developer-screen)" />
        <circle cx="205" cy="169" r="1.8" fill="#786f8d" />
        <path d="M147 184h31m-31 9h52m-52 9h39m-39 9h61m-61 9h32m-32 9h48" fill="none" stroke="#bd9be6" strokeLinecap="round" strokeWidth="3" opacity=".9" />
        <path d="M185 184h36m-10 9h36m-27 9h32m-19 9h28m-45 9h39" fill="none" stroke="#f58a70" strokeLinecap="round" strokeWidth="2.5" opacity=".8" />
        <path d="m116 261 178 0 22 17c2 2 0 5-4 5H99c-4 0-6-3-3-5z" fill="url(#developer-laptop)" stroke="#c9beb4" strokeWidth="2" />
        <path d="M184 265h42l5 5h-52z" fill="#b5a99e" opacity=".8" />
      </g>
      <g className="developer-hands" fill="#e8ad8d">
        <path d="M167 239c5-5 11-4 16 0l9 11c3 4 2 9-2 11-4 2-8 0-11-3l-12-11c-3-2-3-5 0-8z" />
        <path d="M244 238c-5-5-11-4-16 0l-9 11c-3 4-2 9 2 11 4 2 8 0 11-3l12-11c3-2 3-5 0-8z" />
      </g>
      <circle className="developer-cursor" cx="254" cy="185" r="3" fill="#f5c96a" />
    </svg>
  )
}

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
      <section className="hero-section container" id="top"><div className="hero-copy"><p className="eyebrow"><span>01</span> Full-Stack Developer · Indonesia</p><h1>Ideas,<br /><em>made real.</em></h1><p className="hero-intro">Thoughtful websites for founders, small businesses, and ideas ready to grow. I bring considered design and full-stack development together to create clear, useful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Let’s discuss your website <ArrowIcon /></a><a className="text-link" href="#work">See selected work <span>↓</span></a></div></div><div className="hero-scene" aria-label="Illustration of a developer at work"><div className="scene-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="developer-illustration"><DeveloperIllustration /></div><div className="photo-overlay"><img src={profileImg} alt="Portrait of Nanda" /><span>code<br /><strong>in progress</strong></span></div><div className="scene-label label-top">web<br /><strong>in motion</strong></div><div className="scene-label label-bottom">scroll to<br /><strong>explore ↓</strong></div><span className="scene-dot dot-one" /><span className="scene-dot dot-two" /></div><div className="hero-footer"><span>Based in Indonesia · Working worldwide</span><span>Scroll to explore <b>↓</b></span><span>© 2026</span></div></section>
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
