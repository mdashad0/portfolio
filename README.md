# Md Ashad — Portfolio

A modern, responsive personal portfolio built with Next.js (App Router) and Tailwind CSS. This repo showcases projects, services, skills and client reviews with a clean, responsive design and optimized performance.

Live demo: (run locally — see "Getting started")

Repository: https://github.com/mdashad0/portfolio

---

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Customization](#customization)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Overview

This portfolio is a single-page application built with Next.js using the App Router. It contains sections for Hero, About, Services, Projects, Skills, Client Reviews and Contact. The project uses component-driven development and sample data found in `Data/data.ts`.

## Screenshots

Add screenshots to `public/images/` and replace the placeholders below.

- ![Portfolio screenshot 1](public/images/p1.png)
- ![Portfolio screenshot 2](public/images/p2.png)
- ![Portfolio screenshot 3](public/images/p3.png)

## Features

- Modern, responsive UI with Tailwind CSS
- Dark / Light theme support (toggle-ready)
- Animated sections (AOS) and carousel for reviews
- Image optimization using `next/image`
- Clean component structure for easy customization
- Contact form wiring (placeholder) — integrate EmailJS or any backend

## Tech stack

- Next.js 16 (App Router) + React
- TypeScript
- Tailwind CSS
- react-multi-carousel
- AOS (Animate On Scroll)

## Project structure

Key folders and files:

- `app/` – top-level routes and global layout
- `components/` – UI components grouped by feature (Home, Navbar, Reviews, Services, etc.)
- `components/Home/*` – homepage sections (Hero, About, Services, Project, Reviews, Contact)
- `Data/data.ts` – demo content (projects, services, reviews, etc.)
- `public/images/` – static images used in the site
- `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs` – build & styling configuration

## Getting started

Prerequisites

- Node.js 18+ (recommended)
- npm (or pnpm / yarn)

Clone and install:

```powershell
git clone https://github.com/mdashad0/portfolio.git
cd portfolio
npm install
```

Run the development server:

```powershell
npm run dev
```

Open http://localhost:3000 (or the port printed by Next.js). If port 3000 is in use, Next will pick the next available port (e.g. 3001).

## Available scripts

- `npm run dev` — start Next.js in development mode (Turbopack)
- `npm run build` — build for production
- `npm run start` — start the production server after build

## Deployment

Recommended: Deploy to Vercel for automatic Next.js support.

1. Push the repo to GitHub
2. Import the repository on Vercel (https://vercel.com/new)
3. Vercel will detect Next.js and set up deployments automatically

Other options: Netlify or a custom Node host — use `npm run build` and serve the `.next` output.

## Troubleshooting

- Turbopack / dev lock error:

	If you see `Unable to acquire lock at .next/dev/lock`, stop running `next dev` instances and remove the lock file:

	```powershell
	Remove-Item -LiteralPath .next\\dev\\lock -ErrorAction SilentlyContinue
	```

- Port in use: Next will fall back to the next free port. To free port 3000:

	```powershell
	# Find node processes
	tasklist /fi "imagename eq node.exe"

	# Kill a process by PID (example)
	Stop-Process -Id <PID> -Force
	```

## Customization

- Theme colors: edit `tailwind.config.ts` to add your colors.
- Content: update `Data/data.ts` with your projects, services, and reviews.
- Images: add project screenshots to `public/images/` and update paths in `Data/data.ts`.

## Contact form (optional)

This project contains a placeholder contact section. To enable email sending from the front-end you can use EmailJS or wire a serverless function.

EmailJS quick setup:

1. Create an account at https://www.emailjs.com
2. Create a service and template
3. Add your EmailJS user ID and service/template IDs to the contact form component

## Contributing

Contributions are welcome. Suggested improvements:

- Add project metadata (title, description, links) to `Data/data.ts`
- Improve responsive layouts and accessibility
- Add unit/integration tests

How to contribute:

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-change`
3. Commit changes: `git commit -m "Add feature"`
4. Push and open a PR

## Acknowledgments

- Next.js and the React team
- Tailwind CSS for utilities
- react-multi-carousel for the reviews slider
- AOS for scroll animations

## Contact

- GitHub: https://github.com/mdashad0
- Project repository: https://github.com/mdashad0/portfolio

If you'd like me to add screenshots, badges, or a live demo link, tell me the images/URLs and I'll update the README.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of 

