# Bharath S — MERN Stack Developer Portfolio

A minimal, dark-theme-friendly single-page portfolio built with React and Vite. It follows the Geist/Vercel-inspired design system documented in [`DESIGN.md`](./DESIGN.md): near-white canvas, ink-black typography, hairline borders, and a soft multi-stop gradient atmosphere.

## Features

- **Full-page section scrolling** — desktop mouse wheel snaps one section at a time with an 800ms cooldown; over-long sections (like Projects) scroll normally until you reach their edge.
- **Custom cursor** — instant 6px dot + trailing 32px ring, with a cyan hover state on links/buttons/cards. Desktop only; automatically disabled on touch devices.
- **Light / dark theme** — toggle in the navbar, persisted in `localStorage`, with system preference as the initial default.
- **Animated Lottie portrait** in the About section.
- **Responsive layouts** — collapses cleanly from desktop to tablet and mobile.
- **Reduced-motion support** for Framer Motion animations and CSS transitions.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | React 19, Vite 8 |
| Styling | Plain CSS with custom properties (no CSS framework) |
| Animation | Framer Motion, `@lottiefiles/dotlottie-react` |
| Icons | Lucide React, React Icons |
| Fonts | Geist Sans + Geist Mono via `@fontsource` |
| Tooling | ESLint, `@vitejs/plugin-react` |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # App shell, theme provider, wheel navigation
├── index.css               # Design tokens, reset, section base styles
├── App.css                 # Page-wide gradient background
├── components/
│   ├── Navbar.jsx/.css     # Sticky nav, logo, links, theme toggle, CTA
│   ├── Hero.jsx/.css       # Landing section with animated code window
│   ├── About.jsx/.css      # Lottie portrait + two-column profile
│   ├── Projects.jsx/.css   # Project cards grid
│   ├── Skills.jsx/.css     # Tech stack chips by category
│   ├── Footer.jsx/.css     # Contact section (id="contact")
│   └── CustomCursor.jsx/.css
└── context/
    └── ThemeContext.jsx    # Theme state + localStorage persistence
public/
├── developer.lottie        # About-section animation
├── favicon.svg
└── icons.svg
```

## Customizing Content

| What | Where |
| --- | --- |
| Name, tagline, hero copy | `src/components/Hero.jsx`, `src/components/About.jsx` |
| Navbar logo / links | `NAV_LINKS` and `.navbar-logo` in `Navbar.jsx` |
| Projects | `PROJECTS` array in `src/components/Projects.jsx` |
| Skills | `SKILL_CATEGORIES` in `src/components/Skills.jsx` |
| Email, phone, social links | `CONTACT_ITEMS` / `SOCIAL_LINKS` in `src/components/Footer.jsx` |
| Colors, spacing, typography | `:root` and `[data-theme='dark']` in `src/index.css` |
| Page metadata / OG tags | `index.html` |

### Assets to supply

- **Resume:** the "Download Resume" button in `About.jsx` links to `/resume.pdf`. Add your PDF as `public/resume.pdf` (or change the `href` to a hosted URL).
- **Project links:** several projects in `Projects.jsx` still use `#` placeholders for `githubUrl` and `liveUrl`. Replace them with real URLs before publishing.
- **Lottie animation:** replace `public/developer.lottie` with your own `.lottie` export if desired.

## How the Interactions Work

- **Wheel navigation** is implemented in `useSectionWheelNavigation()` in `src/App.jsx`. Sections are marked with `data-scroll-section` and `min-height: 100vh`. Tune the timing with `SCROLL_LOCK_MS`.
- **Custom cursor** lives in `src/components/CustomCursor.jsx`. The dot is written straight to `transform` on `pointermove`; the ring follows in a `requestAnimationFrame` lerp loop. The trailing strength is the `0.16` factor in `animate()`.
- **Theme** is provided by `ThemeContext.jsx` and applied as `data-theme` on `<html>`.

## Known Notes

- `npm run lint` currently reports `no-unused-vars` errors for JSX-only imports. The ESLint config is missing `eslint-plugin-react`'s `jsx-uses-vars` rule; the build itself is clean.
- `npm audit` reports transitive dependency advisories. Run `npm audit fix` to review/update them.

## Deployment

Build with `npm run build` and deploy the generated `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). No server or environment variables are required.

## Contact

- Email: bharath978930@gmail.com
- Phone: +91 9789301648
- [GitHub](https://github.com/bharath532) · [LinkedIn](https://www.linkedin.com/in/bharath9789)
