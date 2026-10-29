import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { Background, Icon, useTheme } from './ui.jsx'
import { EMAIL } from './data.js'
import Home from './Home.jsx'
import About from './About.jsx'

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0C7C94" /><stop offset="1" stopColor="#2FA8BE" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#m)" />
      <path d="M8 12h16M8 16.5h11M8 21h6" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" opacity="0.95" />
      <circle cx="23" cy="20" r="2.6" fill="#fff" />
    </svg>
  )
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
        <Link to="/" className="brand" onClick={close}><Mark /> Oya Data Labs</Link>
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
        <span className="brand">Oya Data Labs</span>
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
