import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, TiltCard, SplitText, Icon } from './ui.jsx'
import Preview from './Previews.jsx'
import { SERVICES, WORK, CAPABILITIES, PROCESS, MAILTO, EMAIL } from './data.js'

function Flow({ steps }) {
  return (
    <div className="flow">
      {steps.map(([icon, label], i) => (
        <React.Fragment key={i}>
          <div className="node"><Icon name={icon} /><span>{label}</span></div>
          {i < steps.length - 1 && <div className="arrow"><Icon name="arrow" /></div>}
        </React.Fragment>
      ))}
    </div>
  )
}

function HeroVisual() {
  const box = { fill: 'var(--surface)', stroke: 'var(--hairline-strong)', strokeWidth: 1 }
  const lbl = { fill: 'var(--ink-soft)', fontFamily: 'var(--mono)', fontSize: 10 }
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: 20, boxShadow: 'var(--shadow-lg)' }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>How a build comes together</div>
      <svg viewBox="0 0 340 236" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <marker id="aIn" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" style={{ fill: 'var(--muted)' }} /></marker>
          <marker id="aOut" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" style={{ fill: 'var(--accent)' }} /></marker>
        </defs>
        {[['Spreadsheets', 18], ['Databases', 64], ['Legacy', 110], ['Documents', 156]].map(([t, y]) => (
          <g key={t}>
            <rect x="6" y={y} width="94" height="30" rx="7" style={box} />
            <text x="53" y={y + 19} textAnchor="middle" style={lbl}>{t}</text>
          </g>
        ))}
        <rect x="130" y="76" width="78" height="80" rx="11" style={{ fill: 'var(--accent-wash)', stroke: 'var(--accent)', strokeWidth: 1 }} />
        <text x="169" y="108" textAnchor="middle" style={{ fill: 'var(--accent-strong)', fontFamily: 'var(--display)', fontSize: 12, fontWeight: 600 }}>Pipeline</text>
        <text x="169" y="124" textAnchor="middle" style={{ fill: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 9 }}>clean · model</text>
        <text x="169" y="136" textAnchor="middle" style={{ fill: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 9 }}>automate</text>
        {[['AI assistant', 50], ['Dashboards', 106], ['Reports', 162]].map(([t, y]) => (
          <g key={t}>
            <rect x="238" y={y} width="96" height="34" rx="8" style={box} />
            <text x="286" y={y + 21} textAnchor="middle" style={lbl}>{t}</text>
          </g>
        ))}
        <g style={{ fill: 'none', stroke: 'var(--muted)', strokeWidth: 1.5 }}>
          <path d="M100 33 C118 33 116 104 129 108" markerEnd="url(#aIn)" />
          <path d="M100 79 C116 79 118 112 129 114" markerEnd="url(#aIn)" />
          <path d="M100 125 C116 125 118 122 129 120" markerEnd="url(#aIn)" />
          <path d="M100 171 C118 171 116 128 129 124" markerEnd="url(#aIn)" />
        </g>
        <g style={{ fill: 'none', stroke: 'var(--accent)', strokeWidth: 1.8 }}>
          <path d="M208 100 C224 100 224 69 237 67" markerEnd="url(#aOut)" />
          <path d="M208 116 C226 116 224 122 237 123" markerEnd="url(#aOut)" />
          <path d="M208 132 C224 132 224 177 237 179" markerEnd="url(#aOut)" />
        </g>
        <text x="169" y="214" textAnchor="middle" style={{ fill: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 9.5 }}>runs on a schedule · monitored · documented</text>
      </svg>
    </motion.div>
  )
}

const MARQUEE = ['AI chatbots', 'Workflow automation', 'Cloud data pipelines', 'Dashboards & reporting', 'Website design & build', 'Tech consulting', 'Secure data handling']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="hero-badge"><span className="dot" /> Data · automation · AI · web</span>
            </motion.div>
            <h1 style={{ marginTop: 20 }}>
              <SplitText text="The manual work in your business," />
              <span className="grad-text"><SplitText text="engineered away." delay={0.35} /></span>
            </h1>
            <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
              We design and build the tools that move a business forward — modern websites, automation, AI chatbots, cloud data pipelines, and dashboards — explained in plain language, not jargon.
            </motion.p>
            <motion.div className="cta-row" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}>
              <Link to="/#contact" className="btn btn-primary">Book a free scoping call <Icon name="arrow" style={{ width: 16, height: 16 }} /></Link>
              <Link to="/#work" className="btn btn-ghost">See our work</Link>
            </motion.div>
            <p className="sub">Websites · AI chatbots · automation · data pipelines · dashboards · consulting</p>
          </div>
          <div className="heroviz"><HeroVisual /></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="strip" aria-hidden="true">
        <div className="marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What we do</span>
            <h2>Everything you need to run a modern business</h2>
            <p>Whether it is a website that brings in customers, a report someone rebuilds every Monday, or data trapped across three systems — we build the thing that handles it for good.</p>
          </Reveal>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <TiltCard className="svc">
                  <div className="ic"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Flow steps={s.flow} />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="sec" style={{ background: 'color-mix(in srgb, var(--surface-2) 55%, transparent)', borderBlock: '1px solid var(--hairline)' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Selected work</span>
            <h2>Things we have built</h2>
            <p>Live sites you can click through, plus independent projects we have shipped.</p>
          </Reveal>
          <div className="work-grid">
            {WORK.map((w, i) => {
              const inner = (
                <>
                  <span className="preview"><Preview kind={w.preview} /></span>
                  <div className="body">
                    <span className="tag">{w.live && <span className="dot" />}{w.tag}</span>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                    {w.href ? <span className="visit">Visit live site <Icon name="ext" style={{ width: 13, height: 13 }} /></span>
                      : <span className="meta">{w.meta}</span>}
                  </div>
                </>
              )
              return (
                <Reveal key={w.title} delay={(i % 3) * 0.08}>
                  {w.href
                    ? <a className="card case" href={w.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                    : <div className="card case">{inner}</div>}
                </Reveal>
              )
            })}
          </div>

          {/* CAPABILITIES */}
          <Reveal style={{ marginTop: 64 }} className="sec-head">
            <span className="eyebrow">What we can do</span>
            <h2>Capabilities we bring to the table</h2>
            <p>The range of work our team is able to build — honed across industry, startups, and large organizations.</p>
          </Reveal>
          <div className="cap-grid">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <TiltCard className="cap" max={4}>
                  <div className="ic"><Icon name={c.icon} /></div>
                  <div><h4>{c.title}</h4><p>{c.desc}</p></div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How we work</span>
            <h2>Small scope, real result, no lock-in</h2>
            <p>A simple three-step engagement designed to prove value fast and hand you something you own.</p>
          </Reveal>
          <div className="steps">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="step">
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec">
        <div className="wrap">
          <Reveal className="contact-card">
            <span className="eyebrow">Let us talk</span>
            <h2>Tell us what is eating your team's time.</h2>
            <p>Send a couple of sentences about the manual work or data headache you would like gone. We will reply with whether it is a fit and a rough sense of scope — usually within a day.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={MAILTO}>Email us about a project</a>
              <Link className="btn btn-ghost" to="/about">More about us</Link>
            </div>
            <div className="mailline">{EMAIL}</div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
