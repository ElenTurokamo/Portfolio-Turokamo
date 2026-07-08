# SleepyFramework Portfolio

A high-performance, minimalist landing page portfolio tailored for an independent developer. Built with modern web development tools, focusing on a clean aesthetic, fluent UI/UX animations, and a highly efficient asset footprint.

## ✨ Core Features
- **Fluid & Interactive UI/UX:** Tailored design with seamless element states, dynamic sidebar transitions, and custom SVG styling.
- **Responsive Architecture:** Fully flexible grid and flexbox layouts ensuring a pixel-perfect presentation across ultra-wide monitors, laptops, tablets, and smartphones.
- **Automated Delivery (CI/CD):** Integrated automated build and deployment pipelines via GitHub Actions to ensure zero-downtime updates upon repository pushes.

## 🛠 Tech Stack
- **Frontend Core:** HTML5, Clean CSS3, JavaScript (ES6+ Modules)
- **Build System:** Vite (Next-generation frontend tooling)
- **Code Quality:** ESLint (Flat config implementation)
- **Deployment:** GitHub Actions

## 🏗 Architecture & Design Patterns

The repository is built following a modern, decoupled single-page application (SPA) architecture, utilizing asynchronous component delivery and strict separation of concerns.

```text
├── .github/workflows/   # CI/CD deployment automation pipelines
├── public/              # Unprocessed static assets & global icons
└── src/                 # Core source directory
    ├── components/      # Modular, reusable UI components
    ├── styles/          # Structured style sheets (Variables & Utilities)
    └── main.js          # Central JavaScript entry point and initialization

```

1. The Modular Frontend Approach
Instead of a monolithic script file, the interactive behavior of the landing page is broken down into isolated JavaScript modules within the `src/` directory. Each component (e.g., sidebars, contact forms, navigation triggers) manages its own state and DOM events. These modules are fetched dynamically using ES6 imports, optimizing the initial page execution time.
2. Styles and Layout Management
Styles are written with maintainability in mind, utilizing modern CSS features such as CSS Custom Properties (variables) for uniform theme switching, flexbox for component alignment, and CSS Grid for layout structuring. Animation performance is optimized by relying strictly on hardware-accelerated properties (`transform` and `opacity`) to eliminate layout thrashing and maintain a steady 60 FPS.
3. Build & Bundling Process
The compilation pipeline is powered by Vite, which leverages native browser ES modules during development for instant Hot Module Replacement (HMR). For production, Vite uses Rollup under the hood to perform advanced tree-shaking, code splitting, and asset minification, resulting in optimized asset delivery.
⚙️ Production Build
To compile the codebase into highly optimized, minified static assets ready for production hosting:
Bash

```
npm run build

```

The compiled production-ready bundle will be outputted to the `dist/` directory, optimized with cache-busting filenames for script and style sheets.
