import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Counter, Icon, TiltCard } from './ui.jsx'
import { STATS, ROLES, PILLS, MAILTO, EMAIL } from './data.js'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">About Oya Data Labs</span>
            <h1 style={{ marginTop: 12 }}>We turn AI, automation, and data into <span className="grad-text">results you can actually use.</span></h1>
            <p className="lede">A team of engineers who build the practical tools that let a business capture the value of modern technology — without needing a technical background to get there.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingBlock: '20px 70px' }}>
        <div className="wrap stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="card stat">
                <div className="num grad-text"><Counter to={s.to} suffix={s.suffix} /></div>
                <div className="lab">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingBlock: '0 60px' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What we do</span>
            <h2>The technical heavy lifting, handled</h2>
            <p>We design and build websites, AI chatbots, automations, data pipelines, and dashboards — and we translate the jargon, so you always understand what you are getting and why it matters. You bring the problem; we bring the build and the plain-language explanation.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingBlock: '0 70px' }}>
        <div className="wrap">
          <Reveal className="mission">
            <span className="eyebrow">Why we do it</span>
            <blockquote style={{ marginTop: 16 }}>
              <p>The world is being rebuilt around data and AI. The businesses that thrive over the next decade will not be the biggest — they will be the ones that put their data to work, automate the busywork, and adopt AI before their competitors do.</p>
              <p>Most owners can feel that shift coming but do not know where to start, and the people who could help speak a language they do not. That gap — between what is now possible and who actually gets to use it — is exactly why Oya Data Labs exists. Staying ahead of these changes should not require a computer science degree; it should just require the right partner.</p>
            </blockquote>
            <p className="name-note"><b>Oya</b> (OH-yah) means "stream" in Sinhala — a nod to what we do: turning scattered, messy data into a clean, steady flow your business can actually use.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingBlock: 0 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Who we are</span>
            <h2>A team that has shipped this for real</h2>
            <p>We are data engineers, computer engineers, and full-stack developers who have built and run systems in production — not learned it on your project.</p>
          </Reveal>
          <div className="roles">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <TiltCard className="role">
                  <div className="ic"><Icon name={r.icon} /></div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="pill-row">{PILLS.map(p => <span key={p} className="pill">{p}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingBlock: '70px 88px' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Who it is for</span>
            <h2>Built for people, not engineers</h2>
            <p>You do not need to be technical to work with us. We built Oya Data Labs for owners and teams who know AI, automation, and data matter for their future — but do not have the in-house expertise to act on it. We meet you in plain language, handle the technical side end to end, and leave you with tools you own and understand.</p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="sec" style={{ paddingBlock: '0 90px' }}>
        <div className="wrap">
          <Reveal className="contact-card">
            <span className="eyebrow">Let us talk</span>
            <h2>Ready to put your data to work?</h2>
            <p>Tell us the manual work or data headache you would like gone. We will reply with whether it is a fit and a rough sense of scope — usually within a day.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={MAILTO}>Email us about a project</a>
              <Link className="btn btn-ghost" to="/#services">See what we build</Link>
            </div>
            <div className="mailline">{EMAIL}</div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
