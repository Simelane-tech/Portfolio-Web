 # Kwanele Simelane Portfolio

Premium, modern, conversion-focused portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 16 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Features

- High-conversion hero section with animated value propositions
- Professional About, Skills, Services, and Value sections
- Interactive Projects cards with embedded `View Demo` modal (iframe)
- Contact form with real SMTP email sending (`/api/contact`)
- Smooth scrolling navigation and scroll-triggered animations
- Responsive layout for mobile, tablet, and desktop
- SEO metadata + `robots.js` + `sitemap.js`

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
copy .env.example .env.local
```

Then update values in `.env.local`.

3. Run development server:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Production

Build and run locally:

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep default build settings (`next build`).
4. Deploy.

## Customization Checklist

- Replace placeholder email (`kwanele@example.com`) with real contact email in `components/PortfolioPage.jsx`.
- Replace social placeholders with real LinkedIn and GitHub profile links.
- Update `websiteUrl` and `demoUrl` entries in project cards if needed.
- Replace `https://your-portfolio-domain.com` in:
  - `app/robots.js`
  - `app/sitemap.js`

## Contact API (SMTP)

The contact form sends messages to:

- `kwanele.simelane10536@gmail.com`

Required env vars:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (optional, defaults to `SMTP_USER`)

If you use Gmail SMTP, use an App Password instead of your normal login password.
