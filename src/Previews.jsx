import React from 'react'

function Chrome({ label }) {
  return (
    <>
      <rect width="320" height="26" fill="#ffffff" opacity="0.14" />
      <circle cx="16" cy="13" r="3" fill="#fff" opacity="0.55" />
      <circle cx="27" cy="13" r="3" fill="#fff" opacity="0.4" />
      <circle cx="38" cy="13" r="3" fill="#fff" opacity="0.3" />
      <rect x="60" y="7" width="200" height="12" rx="6" fill="#fff" opacity="0.16" />
      <text x="70" y="16" fontFamily="monospace" fontSize="8" fill="#fff" opacity="0.85">{label}</text>
    </>
  )
}

const G = {
  neleena: ['#C08AA0', '#5E3B4D'],
  illinois: ['#0C7E9A', '#083E4E'],
  aviation: ['#2D6CB0', '#12304F'],
  cpa: ['#1E8A6E', '#0E3B30'],
  energy: ['#C77F2B', '#5A3410'],
  research: ['#6A57C8', '#2C2456'],
}

export default function Preview({ kind }) {
  const [c1, c2] = G[kind] || ['#0C7C94', '#083E4E']
  const id = 'grad-' + kind
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} /><stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#${id})`} />

      {kind === 'neleena' && (<>
        <Chrome label="Live site" />
        <text x="160" y="106" textAnchor="middle" fontFamily="Georgia, serif" fontSize="60" fill="#fff" opacity="0.95">N</text>
        <rect x="134" y="118" width="52" height="1.4" fill="#fff" opacity="0.6" />
        <text x="160" y="140" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#fff" opacity="0.82">Bespoke tailoring &amp; bridal</text>
      </>)}

      {kind === 'illinois' && (<>
        <Chrome label="Live site" />
        <g fill="#fff">
          <rect x="72" y="96" width="20" height="44" opacity="0.9" /><rect x="102" y="78" width="20" height="62" opacity="0.75" />
          <rect x="132" y="108" width="20" height="32" opacity="0.6" /><rect x="162" y="66" width="20" height="74" opacity="0.85" />
          <rect x="192" y="90" width="20" height="50" opacity="0.65" /><rect x="222" y="102" width="20" height="38" opacity="0.5" />
        </g>
        <line x1="68" y1="140" x2="250" y2="140" stroke="#fff" strokeWidth="1" opacity="0.5" />
        <text x="160" y="162" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">Demographics dashboard</text>
      </>)}

      {kind === 'aviation' && (<>
        <g fill="none" stroke="#fff" opacity="0.9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path transform="translate(136,60) scale(2)" d="M22 2 11 13" /><path transform="translate(136,60) scale(2)" d="M22 2 15 22l-4-9-9-4 20-7z" />
        </g>
        <text x="160" y="150" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">Lifecycle management</text>
        <text x="160" y="166" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#fff" opacity="0.6">500+ aircraft tracked</text>
      </>)}

      {kind === 'cpa' && (<>
        <g fill="none" stroke="#fff" opacity="0.9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(140,54) scale(1.8)">
            <path d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
            <path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M8 18h4" />
          </g>
        </g>
        <text x="160" y="156" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">Accounting, automated</text>
      </>)}

      {kind === 'energy' && (<>
        <g fill="none" stroke="#fff" opacity="0.9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path transform="translate(144,52) scale(2.1)" d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
        </g>
        <text x="160" y="156" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">Energy &amp; renewables data</text>
      </>)}

      {kind === 'research' && (<>
        <g fill="none" stroke="#fff" opacity="0.9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(136,52) scale(2)">
            <circle cx="12" cy="7" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </g>
        </g>
        <text x="160" y="156" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">Research match platform</text>
      </>)}
    </svg>
  )
}
