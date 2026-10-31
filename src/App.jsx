import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { Background, Icon, useTheme } from './ui.jsx'
import { EMAIL } from './data.js'
import Home from './Home.jsx'
import About from './About.jsx'

function BrandMark() {
  return (
    <svg className="mark" viewBox="0 0 50 34" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="oyaGrad" x1="0" y1="0" x2="0" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#35D7C3" />
          <stop offset="0.5" stopColor="#45A6F0" />
          <stop offset="1" stopColor="#8A80F0" />
        </linearGradient>
      </defs>
      <g stroke="url(#oyaGrad)" strokeWidth="3.6" strokeLinecap="round" fill="none">
        <path d="M3 8 C9 3 15 3 21 8 S33 13 35 8" />
        <path d="M3 17 C9 12 15 12 21 17 S33 22 35 17" />
        <path d="M3 26 C9 21 15 21 21 26 S33 31 35 26" />
      </g>
      <g fill="url(#oyaGrad)">
        <circle cx="40.5" cy="8" r="2.3" /><circle cx="46" cy="8" r="1.4" />
        <circle cx="40.5" cy="17" r="2.3" /><circle cx="46" cy="17" r="1.4" />
        <circle cx="40.5" cy="26" r="2.3" /><circle cx="46" cy="26" r="1.4" />
      </g>
    </svg>
  )
}

function Wordmark() {
  return <span className="brand-word">oya<em>Data&nbsp;Labs</em></span>
}

function ScrollManager() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 70); return }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hash, pathname])
  return null
}

function Nav() {
  const { isDark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link to="/" className="brand" onClick={close}><BrandMark /><Wordmark /></Link>
        <nav className="nav-links" aria-label="Primary">
          <Link to="/#services">Services</Link>
          <Link to="/#work">Work</Link>
          <Link to="/#process">Process</Link>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </nav>
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme" style={{ marginLeft: 'auto' }}>
          <Icon name={isDark ? 'sun' : 'moon'} />
        </button>
        <Link to="/#contact" className="btn btn-primary" style={{ padding: '10px 16px' }}>Start a project</Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <span className="brand"><BrandMark /><Wordmark /></span>
        <span>
          <Link to="/about">About</Link> &nbsp;·&nbsp; <Link to="/#services">Services</Link> &nbsp;·&nbsp; <Link to="/#contact">Contact</Link>
        </span>
        <span>© {new Date().getFullYear()} · <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent)' }}>{EMAIL}</a></span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
