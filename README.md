# God-Fashioned Writers' Academy

Homepage for GFWA, built with Next.js (App Router) as a static export.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

- Content (programmes, steps, quote, contact) lives in `lib/content.ts`.
- Brand colours and styles are tokens at the top of `app/globals.css`.
- Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
  (repo Settings → Pages → Source: **GitHub Actions**).
