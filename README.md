# Digital Presence Scorecard

A free, two-track interactive scorecard that helps **Professionals** and **Business Owners** assess their digital presence and identify exactly what to work on next.

Built with React + Vite. Zero backend. Deploys to GitHub Pages in one command.

**Live demo:** https://ymopadilla.github.io/digital-presence-scorecard/

---

## What it does

Users choose their track on the welcome screen:

- **Professional** — Freelancers, coaches, consultants, job seekers, and creators building a personal brand
- **Business Owner** — Shops, service businesses, restaurants, and teams whose presence represents their company

Each track has its own tailored question set covering website, LinkedIn, social media, and platform-specific items (Google Business Profile for Business Owners; freelance platforms for Professionals). Results include a percentage score, a personalized list of what to improve, and two clear next steps.

---

## Tech stack

- React 18
- Vite
- CSS Modules
- GitHub Pages (via `gh-pages`)

No external dependencies beyond React itself.

---

## Local development

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173/digital-presence-scorecard/`

---

## Deploy to GitHub Pages

1. Make sure the `homepage` in `package.json` matches your GitHub username:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/digital-presence-scorecard"
   ```

2. Update `vite.config.js` base if your repo name differs:
   ```js
   base: '/digital-presence-scorecard/',
   ```

3. Run:
   ```bash
   npm run deploy
   ```

This builds the app and pushes to the `gh-pages` branch automatically.

4. In your GitHub repo settings → Pages → set source to the `gh-pages` branch.

---

## Customization

- **Questions and tips:** Edit `src/data.js` — all content lives there, cleanly separated from the UI
- **Brand colors:** Edit the CSS variables in `src/index.css`
- **CTA links:** Update the URLs in `src/components/Results.jsx`

---

## Part of the AIn't That Complicated ecosystem

Built by **Yvonne Padilla** — [AIn't That Complicated](https://aintthatcomplicated.com) · [Digital Navigation Solutions](https://digitalnavigationsolutions.com)

This tool is a free lead magnet. Users get their score and what to fix — the *how* lives in the courses.
