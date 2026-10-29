# Oya Data Labs — website

The marketing site for Oya Data Labs (oyadatalabs.com), built with **Vite + React**.

## Stack
- React 18 + React Router (Home + About)
- Framer Motion (scroll reveals, text + counter animations, tilt cards)
- Animated canvas/particle + aurora background, light/dark theme toggle
- No backend — the contact button opens the visitor's email app

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy (Vercel)
Vercel auto-builds from `vercel.json` (framework: Vite, build: `vite build`, output: `dist/`).
Every push to `main` redeploys. If the project was previously set up as a static site,
set **Settings → Build & Deployment → Framework Preset = Vite** once.

## Edit the content
Most copy lives in `src/data.js` (services, work, capabilities, stats, process).
To change the business name, search for "Oya Data Labs". Contact email is in `src/data.js`.
