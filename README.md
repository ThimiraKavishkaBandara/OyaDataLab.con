# Oya Data Labs — website

Marketing site for a freelance data engineering & automation business.

A single, self-contained static page: `index.html` (all CSS, SVG, and content
inlined — no build step, no dependencies). The contact button opens the
visitor's email app; there is no backend.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project → Import** this GitHub repo.
3. Framework preset: **Other**. Leave Build & Output settings empty.
4. **Deploy.** Every future `git push` to the main branch redeploys automatically.

## Editing

Edit `index.html` and push. To change the business name, find-and-replace
"Oya Data Labs". The contact email is set in the two `mailto:` links and the
footer.
