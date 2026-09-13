# 🌐 DEV.LOG — Personal Developer Blog & Digital Garden

> **A high-performance personal developer blog, digital garden, and portfolio template crafted with Astro 7, Tailwind CSS 4, strict TypeScript, and an ultra-tactile Liquid Glass Dark UI.**

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](./LICENSE)
[![Built with Astro](https://img.shields.io/badge/Astro-7.2-ff5d01.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com)
[![Pagefind](https://img.shields.io/badge/Search-Pagefind-818cf8.svg)](https://pagefind.app)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ed.svg)](https://www.docker.com)
[![CI](https://img.shields.io/badge/CI-Passing-success.svg?logo=github-actions)](./.github/workflows/ci.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-0366d6.svg?logo=dependabot)](./.github/dependabot.yml)

---

## ⚡ 1-Minute Customization (Single Configuration File)

Customize your entire blog from **one single file**:

👉 **[`src/config/site.ts`](./src/config/site.ts)** (or root alias **[`site.config.ts`](./site.config.ts)**)

```typescript
export const siteConfig = {
  // 1. Site Metadata, Title & Favicon
  name: "DEV.LOG",
  logoLetter: "D", // Monogram badge in header
  title: "DEV.LOG — Personal Dev Blog & Digital Garden",
  description: "A high-performance personal developer blog crafted with Astro and Liquid Glass UI.",
  url: "https://yourdomain.com",
  favicon: "/favicon.svg", // Supports /favicon.svg, /favicon.ico, /favicon.png
  defaultOgImage: "/images/og-default.png",

  // 2. Author Profile (Appears on all articles, hero, author cards & about page)
  author: {
    name: "Alex Morgan",
    role: "Software Engineer & Creative Developer",
    avatar: "/images/avatar.jpg", // Drop your photo into public/images/avatar.jpg
    bio: "Frontend engineer and creative developer fascinated by fast web apps and resilient architectures.",
    location: "San Francisco, CA",
    status: "Building the future of spatial web interfaces",
    social: {
      github: "https://github.com/yourhandle",
      twitter: "https://twitter.com/yourhandle",
      linkedin: "https://linkedin.com/in/yourhandle",
      email: "yourname@example.com",
    },
  },

  // 3. Home Hero Section
  hero: {
    greeting: "Hey, I'm Alex",
    badge: "Software Engineer • Creative Developer",
    tagline: "Welcome to my personal dev blog and digital notebook...",
    primaryButton: { text: "Read My Articles", href: "/blog" },
    secondaryButton: { text: "About Me", href: "/about" },
  },

  // 4. Navigation Links & Topic Categories
  navLinks: [
    { text: "Articles", href: "/blog" },
    { text: "Categories", href: "/categories" },
    { text: "Tags", href: "/tags" },
    { text: "About Me", href: "/about" },
  ],
  categories: [
    { name: "Tech", desc: "Astro Islands architecture, core web performance, and TypeScript." },
    { name: "Design", desc: "Liquid Glass UI, spatial design systems, fluid motion, and modern aesthetics." },
    { name: "Architecture", desc: "Domain-Driven Design, clean decoupled systems, and durability." },
    { name: "Story", desc: "Engineering insights, case studies, and modern frontend storytelling." },
  ],

  // 5. About Me Page Content
  about: {
    philosophyTitle: "My Engineering Philosophy",
    philosophyParagraphs: [
      "I started this blog as my personal digital garden—a place to document experiments...",
      "I believe that a modern website should feel instantaneous, tactile, and visually delightful...",
    ],
    quote: "Every byte of JavaScript saved makes the web a faster space for everyone.",
    highlights: [
      { icon: "⚡", title: "Speed & Zero-JS", desc: "Shipping ultra-lightweight static HTML..." },
      { icon: "✨", title: "Liquid Glass Design", desc: "Crafting translucent, refractive spatial UI..." },
      { icon: "🛡️", title: "Type Safety", desc: "Eliminating runtime bugs with strict TypeScript..." },
      { icon: "🚀", title: "60fps Micro-Interactions", desc: "Building responsive spring physics..." },
    ],
    techArsenal: [
      { name: "Astro 7", desc: "Islands architecture and zero-JS defaults", category: "Framework" },
      { name: "TypeScript", desc: "Strict domain models and nominal branding", category: "Language" },
      { name: "Tailwind CSS 4", desc: "Liquid Glass design system & CSS tokens", category: "Styling" },
      { name: "Vite & Pagefind", desc: "Instant HMR & fast static indexing", category: "Tooling" },
    ],
  },

  // 6. Newsletter Subscription Card
  newsletter: {
    badge: "Personal Dev Notes",
    title: "Follow My Engineering Journey & Experiments",
    description: "Occasional writeups on frontend architecture, liquid glass UI craft, and Astro experiments.",
    placeholder: "you@domain.com",
    buttonText: "Get Updates",
    successMessage: "Thanks for subscribing to my dev notes!",
  },

  // 7. 404 Page Not Found
  notFound: {
    badge: "HTTP_STATUS // 404_NOT_FOUND",
    title: "Page Lost in the Stream",
    description: "The route, article, or resource you were looking for doesn't exist or has moved.",
    homeButtonText: "Return Home",
    browseButtonText: "Browse Articles",
  },

  // 8. Search Modal
  search: {
    modalTitle: "Search Publications",
    placeholder: "Type keywords (e.g. Astro, TypeScript, Islands, CSS)...",
  },

  // 9. Footer Details
  footer: {
    tagline: "Crafted with Astro 7, TypeScript, and Liquid Glass aesthetics.",
    copyright: "Alex Morgan",
    brandDescription: "Personal blog & digital notebook template.",
  },
};
```

---

## 🚀 Quick Start

| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run check` | Run type-checking & `@astrojs/check` diagnostics |
| `npm run build` | Build static production output & generate Pagefind search index |
| `npm run preview` | Locally preview the production build in `dist/` |

---

## 🐳 Docker Support

Run the blog locally or deploy in production using Docker:

### Using Docker Compose (Fastest):
```bash
docker compose up --build
```
Open **`http://localhost:3000`** in your browser.

### Using Plain Docker:
```bash
# Build the multi-stage image
docker build -t devlog-blog .

# Run container on port 3000
docker run -d -p 3000:80 --name devlog-blog devlog-blog
```

---

## 🛡️ Automated CI & Dependabot

This repository includes production-ready GitHub Actions and automated dependency management:

- **Continuous Integration ([`.github/workflows/ci.yml`](./.github/workflows/ci.yml))**:
  - Automatically executes on pushes and pull requests to `main` and `master`.
  - Runs **`npm run check`** (Astro compiler checks and strict TypeScript verification).
  - Runs **`npm run build`** (validating that all 27 static routes and Pagefind search index compile cleanly).
- **Dependabot Security & Updates ([`.github/dependabot.yml`](./.github/dependabot.yml))**:
  - Weekly checks every Monday at 04:00 UTC.
  - Monitors **`npm`** packages, **`github-actions`**, and **`docker`** base images (`node:20-alpine`, `nginx:alpine`).
  - Automatically creates categorized, labelled pull requests with conventional commit prefixes.

## ✍️ Writing Articles & Complete MDX Component Guide

Articles are written in Markdown/MDX files located inside `src/content/blog/`.

### 1. Frontmatter Schema Reference

Create a file like `src/content/blog/05-my-first-post.mdx` with the following frontmatter:

```yaml
---
title: "The Architecture of Modern Frontend Systems"
description: "A deep dive into zero-JS static generation, reactive component boundaries, and spatial UI."
pubDate: 2026-09-15
category: "Tech" # Options: 'Tech' | 'Design' | 'Architecture' | 'Story' | 'Culture'
tags: ["Astro", "TypeScript", "Performance", "CSS"]
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
heroImageAlt: "High performance code editor and server architecture"
issueNumber: "Vol. 05"
featured: false # Set to true to showcase this post in the hero magazine cover
---
```

---

### 2. Interactive MDX Components

Import components at the top of your `.mdx` file:

```mdx
import Callout from '../../components/mdx/Callout.astro';
import ArchitecturePanel from '../../components/mdx/ArchitecturePanel.astro';
import SpeechBubble from '../../components/mdx/SpeechBubble.astro';
import CharacterAside from '../../components/mdx/CharacterAside.astro';
```

---

#### 💡 Component 1: `<Callout />` (Alerts & Tips)

Used for highlighting important technical tips, warnings, and architectural principles.

##### Props:
- `type`: `'tip'` (default / cyan), `'technique'` (indigo), `'warning'` (rose), `'secret'` (purple)
- `title`: String (e.g. `"Zero-JS Baseline"`)
- `badge`: Optional custom badge label (defaults to `"PRO TIP"`, `"CORE TECHNIQUE"`, etc.)

##### Examples:

```mdx
<Callout type="tip" title="Pro Tip on Bundle Sizes">
  Astro components render pure static HTML on the server by default. No client JS is sent unless a `client:*` directive is attached!
</Callout>

<Callout type="technique" title="State Machine Principle">
  Model complex UI states using discriminated unions to guarantee illegal states are impossible at compile-time.
</Callout>

<Callout type="warning" title="Avoid Layout Thrashing">
  Do not animate `top`, `left`, `width`, or `height`. Animate only compositor-friendly properties: `transform` and `opacity`.
</Callout>

<Callout type="secret" title="Deep Architecture Insight" badge="UNDER THE HOOD">
  Server Islands defer dynamic SSR fragments while serving the outer shell straight from edge CDN cache.
</Callout>
```

---

#### 🏗️ Component 2: `<ArchitecturePanel />` (Side-by-Side Comparison Grids)

Used for side-by-side architecture comparisons, before/after code contrasts, and multi-column technical cards.

##### Props:
- `columns`: `1` | `2` (default) | `3`
- `title`: String header (default: `"Architecture Matrix"`)
- `caption`: Optional footer caption (displayed in subtle monospace)
- `badge`: Optional right-side header tag (default: `"ARCHITECTURE PANEL"`)

##### Example:

```mdx
<ArchitecturePanel columns={2} title="Architecture Comparison" caption="Monolithic Single-Page Apps vs Astro Islands">
  <div class="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
    <h5 class="text-sm text-rose-600 dark:text-rose-400 font-bold mb-3 flex items-center gap-2">
      <span>❌</span> Traditional SPA Monolith
    </h5>
    <ul class="text-xs space-y-2 text-zinc-700 dark:text-zinc-300">
      <li>• Ships full client bundle (350KB+)</li>
      <li>• Hydration cascade blocks interactivity</li>
      <li>• Fragile runtime mismatches</li>
    </ul>
  </div>

  <div class="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
    <h5 class="text-sm text-emerald-600 dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
      <span>⚡</span> Astro Islands Architecture
    </h5>
    <ul class="text-xs space-y-2 text-zinc-700 dark:text-zinc-300">
      <li>• Zero JavaScript sent over the wire by default</li>
      <li>• Isolated component hydration</li>
      <li>• Instant sub-50ms First Contentful Paint</li>
    </ul>
  </div>
</ArchitecturePanel>
```

---

#### 💬 Component 3: `<SpeechBubble />` (Dialogue & Discussion Cards)

Used for quotes, interview insights, debates, or conversational technical explanations.

##### Props:
- `speaker`: Name of speaker (e.g. `"Alex Rivera"`)
- `role`: Optional job title / subtitle (e.g. `"Principal Systems Architect"`)
- `avatar`: Emoji (e.g. `"🚀"`, `"⚡"`, `"🎨"`) OR image path (`"/images/avatar.jpg"`, `"https://..."`)
- `side`: `'left'` (default) | `'right'`
- `variant`: `'normal'` (default) | `'shout'` (accent glow) | `'thought'` (dashed border & italic)

##### Example:

```mdx
<SpeechBubble 
  speaker="Elena Rostova" 
  role="Core Performance Specialist" 
  avatar="🚀" 
  side="left"
>
  "Is there a clean way to deliver rich interactive widgets without paying the penalty of 500KB hydration bundles across the entire page?"
</SpeechBubble>

<SpeechBubble 
  speaker="Alex Rivera" 
  role="Principal Systems Architect" 
  avatar="⚡" 
  side="right"
  variant="shout"
>
  "That is precisely what **Islands Architecture** solves. The page remains pure, static HTML at the edge, while interactive components hydrate independently as isolated islands."
</SpeechBubble>
```

---

#### 👤 Component 4: `<CharacterAside />` (Author Commentary & Notes)

Used for inline author thoughts, side commentary, and key takeaways.

##### Props:
- `name`: Author or note name (default: `"Architecture Note"`)
- `role`: Role or subtitle (default: `"Lead Engineer"`)
- `avatar`: Emoji or image path (default: `"⚡"`)

##### Example:

```mdx
<CharacterAside name="Alex Morgan" role="Software Engineer" avatar="⚡">
  "By setting `isolation: isolate` on liquid glass containers, browser compositors render subpixel corner curves smoothly without artifact bleeding."
</CharacterAside>
```

---

### 3. Advanced Code Blocks & Syntax Highlighting

This blog includes built-in **Astro Expressive Code** support for high-end code presentations:

#### File Headers:
````markdown
```typescript title="src/utils/math.ts"
export function add(a: number, b: number): number {
  return a + b;
}
```
````

#### Line Highlighting & Diffs:
````markdown
```typescript title="src/domain/payment.ts" ins={5-6} del={2-3}
// Remove ambiguous flags:
isLoading: boolean;
isSuccess: boolean;
// Use strict tagged union:
| { status: 'loading' }
| { status: 'success'; transactionId: string }
```
````

---

## 📁 Project Structure

```
├── site.config.ts             # 🌟 Root alias for 1-file site configuration
├── src/
│   ├── config/
│   │   └── site.ts            # ⭐ Single Source of Truth (Author, Bio, Socials, Hero, Meta)
│   ├── content/
│   │   └── blog/              # MDX Blog Articles
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation, ThemeToggle, SearchModal
│   │   ├── mdx/               # ArchitecturePanel, Callout, SpeechBubble, CharacterAside
│   │   └── ui/                # HeroMagazineCover, PostCard, ArticleSidebar
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Main layout with Liquid Glass ambient mesh & SEO
│   │   └── BlogPostLayout.astro # Article layout with reading time, TOC, and author bio
│   └── pages/
│       ├── index.astro        # Home page with Hero, Featured post & Recent articles
│       ├── blog/              # Article index & Dynamic [slug] routes
│       ├── categories/        # Category directory & Category filter pages
│       ├── tags/              # Tag cloud & Tag filter pages
│       ├── about.astro        # Personal About Me page with bio, tech stack & experience
│       └── rss.xml.ts         # Full RSS feed generator
└── public/
    └── images/
        └── avatar.jpg         # Author avatar photo
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

You are completely free to use, modify, customize, and deploy this template for your personal blog, digital garden, or portfolio website.
