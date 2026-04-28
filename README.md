# LoveMitra Landing Page

A modern, premium, production-ready landing page for the LoveMitra dating app, built with React, Tailwind CSS (v4), and Framer Motion.

## Features
- **Premium Design:** #FF4D6D → #FF8C42 gradient theme with soft pastel UI.
- **Animations:** Smooth entry and hover animations using Framer Motion.
- **Responsive:** Mobile-first design that looks great on all devices.
- **SaaS-Level UI:** Clean spacing, modern typography, and glassmorphism effects.
- **SEO Optimized:** Meta tags and semantic HTML structure.

## Tech Stack
- **React.js** (Functional Components)
- **Tailwind CSS v4** (Utility-first styling)
- **Framer Motion** (Smooth animations)
- **Lucide React** (Beautiful icons)
- **React Router** (Routing setup)

## Project Structure
```
/src
  /components
    Navbar.jsx
    Hero.jsx
    Features.jsx
    HowItWorks.jsx
    Safety.jsx
    AppPreview.jsx
    Testimonials.jsx
    CTA.jsx
    Footer.jsx
  /pages
    Home.jsx
  App.jsx
  index.css
  main.jsx
```

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Design Customization
- The color palette and design tokens are defined in `src/index.css` using Tailwind v4's `@theme` block.
- Animations can be adjusted in individual components using Framer Motion's `initial`, `animate`, and `whileInView` props.
