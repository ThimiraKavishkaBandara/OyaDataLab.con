export const SERVICES = [
  {
    icon: 'website', title: 'Website design & build',
    desc: 'Modern, fast, mobile-friendly websites that make your business look the part and win customers.',
    flow: [['website', 'Design'], ['cpu', 'Build'], ['spark', 'Go live']],
  },
  {
    icon: 'refresh', title: 'Automation tools',
    desc: 'Custom tools that do the repetitive work end to end — reports, reconciliations, spreadsheets — on autopilot.',
    flow: [['refresh', 'Manual task'], ['gear', 'Automate'], ['check', 'Runs itself']],
  },
  {
    icon: 'chat', title: 'AI chatbots & assistants',
    desc: 'Smart chatbots that answer questions from your own documents, built into the tools your team already uses.',
    flow: [['doc', 'Your docs'], ['chat', 'Chatbot'], ['bulb', 'Instant answer']],
  },
  {
    icon: 'database', title: 'Data engineering & pipelines',
    desc: 'Reliable pipelines that pull from legacy and cloud systems, then clean and organize your data so it is ready to use.',
    flow: [['database', 'Raw sources'], ['layers', 'Clean & model'], ['table', 'Ready data']],
  },
  {
    icon: 'chart', title: 'Dashboards & reporting',
    desc: 'Live dashboards that turn your data into decisions — the number you need, on screen before anyone asks.',
    flow: [['pulse', 'Live data'], ['chart', 'Dashboard'], ['eye', 'At a glance']],
  },
  {
    icon: 'compass', title: 'Tech consulting',
    desc: 'Not sure what to build? We help you pick what is worth automating and which tools actually fit — in plain language.',
    flow: [['target', 'Your goal'], ['compass', 'Plan'], ['wrench', 'Right tools']],
  },
]

export const WORK = [
  {
    preview: 'neleena', tag: 'Live · Website', live: true,
    href: 'https://astonishing-kitten-1db7e3.netlify.app/',
    title: 'Neleena Dress Makers',
    desc: 'A polished website for a bespoke tailoring and bridal business — portfolio, brand story, and an order-request form.',
  },
  {
    preview: 'illinois', tag: 'Live · Data dashboard', live: true,
    href: 'https://illinois-demographics.vercel.app/',
    title: 'Illinois Demographics Explorer',
    desc: 'An interactive tool for exploring Illinois population and demographic data — a raw public dataset made easy to navigate.',
  },
  {
    preview: 'aviation', tag: 'Project · 2025',
    title: 'Aviation Lifecycle Management',
    desc: 'An end-to-end lifecycle platform for small airports and regional carriers — tracking 500+ aircraft, equipment, and compliance lifecycles in one place.',
    meta: 'asset tracking · compliance · operations',
  },
  {
    preview: 'cpa', tag: 'Project · 2025',
    title: 'CPA Workflow Automation',
    desc: 'In-house tools that automate repetitive accounting procedures and replace manual workflows — about 15 hours a week saved.',
    meta: 'Python · accounting · automation',
  },
  {
    preview: 'energy', tag: 'Project · 2024',
    title: 'Energy + Renewables Pipeline',
    desc: 'An end-to-end pipeline analyzing how energy demand tracks renewable generation — 500K+ records a day, visualized for decisions.',
    meta: 'Azure Data Factory · Databricks · Power BI',
  },
  {
    preview: 'research', tag: 'Project · 2023',
    title: 'Research Match Platform',
    desc: 'A web app matching students to research opportunities with smart filtering and ranking — a searchable network for 1,000+ undergraduates.',
    meta: 'FastAPI · PostgreSQL',
  },
]

export const CAPABILITIES = [
  { icon: 'chat', title: 'AI chatbots & RAG assistants', desc: 'Assistants grounded in your own documents, with traceable, accurate answers.' },
  { icon: 'layers', title: 'Cloud data pipelines', desc: 'ETL and medallion architectures that turn messy, scattered data into trustworthy tables.' },
  { icon: 'chart', title: 'Real-time dashboards', desc: 'Operational, uptime, and KPI views that update on their own.' },
  { icon: 'shield', title: 'Secure, compliant data handling', desc: 'Experience building to enterprise and government-grade security standards.' },
  { icon: 'refresh', title: 'Workflow & spreadsheet automation', desc: 'Recurring reports, reconciliations, and file wrangling handled automatically.' },
  { icon: 'website', title: 'Websites & web apps', desc: 'From marketing sites to full-stack tools your customers and team rely on.' },
]

export const STATS = [
  { to: 10, suffix: '+', label: 'years combined experience in automation' },
  { to: 4, suffix: '', label: 'years building with AI' },
  { to: 20, suffix: '+', label: 'hours a week of manual work automated away' },
]

export const ROLES = [
  { icon: 'database', title: 'Data engineers', desc: 'We move, clean, and model your data so it is reliable and ready to use — the foundation everything is built on.' },
  { icon: 'cpu', title: 'Computer engineers', desc: 'We build the automations and systems that run quietly in the background, day after day.' },
  { icon: 'website', title: 'Full-stack developers', desc: 'We craft the websites, apps, chatbots, and dashboards you and your customers actually touch.' },
]

export const PROCESS = [
  { n: '01', title: 'Scope the bottleneck', desc: 'A short call to find the highest-leverage thing to automate and what a good outcome looks like. You leave with a plan and a fixed quote — free.' },
  { n: '02', title: 'Build & iterate', desc: 'We build in short cycles with something to look at early, so you are never waiting months. You review, we adjust, against your real data.' },
  { n: '03', title: 'Hand off & support', desc: 'You get working, documented software that runs on its own — plus the source and a walkthrough so your team owns it. Support optional, never required.' },
]

export const PILLS = ['Startups', 'Academia', 'Enterprise cloud', 'Aviation', 'Finance', 'Public data']

export const EMAIL = 'hello@oyadatalabs.com'
export const MAILTO = 'mailto:hello@oyadatalabs.com?subject=Project%20inquiry&body=Hi%20Oya%20Data%20Labs%2C%0A%0AHere%27s%20the%20manual%20work%20or%20data%20problem%20I%27d%20like%20to%20automate%3A%0A%0A'
