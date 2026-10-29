import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'

/* ---------------- Icons ---------------- */
const P = {
  website: ['M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z', 'M2 9h20M6 6.5h.01M9 6.5h.01'],
  gear: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1'],
  chat: ['M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z'],
  database: ['M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z', 'M20 5v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5', 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'],
  chart: ['M3 3v18h18', 'M7 14v3M12 9v8M17 5v12'],
  compass: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z'],
  refresh: ['M3 12a9 9 0 0 1 15-6.7L21 8', 'M21 3v5h-5', 'M21 12a9 9 0 0 1-15 6.7L3 16', 'M3 21v-5h5'],
  check: ['M20 6 9 17l-5-5'],
  doc: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5M9 13h6M9 17h6'],
  bulb: ['M9 18h6M10 22h4', 'M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z'],
  layers: ['M12 2 21 7l-9 5-9-5 9-5z', 'M3 12l9 5 9-5M3 17l9 5 9-5'],
  table: ['M3 4h18v16H3z', 'M3 9h18M3 14h18M9 4v16'],
  pulse: ['M2 12h4l3 8 4-16 3 8h6'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  target: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  wrench: ['M15 7a4 4 0 1 0-3.5 4L4 18.5 5.5 20l7.5-7.5A4 4 0 0 0 15 7z'],
  cpu: ['M6 6h12v12H6z', 'M9 9h6v6H9z', 'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3'],
  shield: ['M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z', 'M9 12l2 2 4-4'],
  plane: ['M22 2 11 13', 'M22 2 15 22l-4-9-9-4 20-7z'],
  calc: ['M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h4'],
  bolt: ['M13 2 3 14h8l-1 8 10-12h-8l1-8z'],
  arrow: ['M5 12h14M13 6l6 6-6 6'],
  ext: ['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'],
  sun: ['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'],
  moon: ['M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z'],
  spark: ['M12 3v4M12 17v4M3 12h4M17 12h4', 'M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4z'],
}
export function Icon({ name, ...rest }) {
  const d = P[name] || []
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {d.map((seg, i) => <path key={i} d={seg} />)}
    </svg>
  )
}

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({ children, delay = 0, y = 22, as = 'div', className, ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* ---------------- Animated counter ---------------- */
export function Counter({ to, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [inView, to, duration])
  return <span ref={ref}>{prefix}{Math.round(val)}{suffix}</span>
}

/* ---------------- Split / word-stagger text ---------------- */
export function SplitText({ text, className, delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ---------------- Tilt + spotlight card ---------------- */
export function TiltCard({ children, className = '', max = 7, ...rest }) {
  const ref = useRef(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
    el.style.setProperty('--mx', px * 100 + '%')
    el.style.setProperty('--my', py * 100 + '%')
  }
  function onLeave() { rx.set(0); ry.set(0) }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`card tilt ${className}`}
      {...rest}
    >
      <span className="spot" />
      {children}
    </motion.div>
  )
}

/* ---------------- Animated background ---------------- */
export function Background() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = canvas.getContext('2d')
    let w, h, raf
    const dots = []
    const N = Math.min(60, Math.floor(window.innerWidth / 24))
    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = Math.max(window.innerHeight, 700)
    }
    resize()
    for (let i = 0; i < N; i++) {
      dots.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25 })
    }
    function color() {
      return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0C7C94'
    }
    function draw() {
      ctx.clearRect(0, 0, w, h)
      const c = color()
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > w) d.vx *= -1
        if (d.y < 0 || d.y > h) d.vy *= -1
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            ctx.strokeStyle = c
            ctx.globalAlpha = (1 - dist / 130) * 0.22
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 0.55
      ctx.fillStyle = c
      for (const d of dots) { ctx.beginPath(); ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2); ctx.fill() }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="blob a" /><div className="blob b" /><div className="blob c" />
      <canvas ref={canvasRef} className="particles" />
      <div className="bg-grid" />
    </div>
  )
}

/* ---------------- Theme toggle ---------------- */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('oya-theme') || 'system' } catch { return 'system' }
  })
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
    try { localStorage.setItem('oya-theme', theme) } catch {}
  }, [theme])
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const toggle = () => setTheme(isDark ? 'light' : 'dark')
  return { theme, isDark, toggle }
}
