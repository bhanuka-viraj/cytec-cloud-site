# Cytec Cloud (PVT) LTD - Corporate Website

A modern, high-performance corporate website for **Cytec Cloud (PVT) LTD**, engineered with **Next.js 16** and **Tailwind CSS v4**. This project features a sleek, tech-forward design with dark mode support, sophisticated animations, and a fully static export capability.

## 🚀 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Theme**: [Next Themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)

## ✨ Features

-   **Modern UI/UX**: Glassmorphism, gradients, and a "cyber-physical" aesthetic.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Dark Mode**: First-class dark mode support with system preference detection.
-   **Static Export**: Configured to generate a purely static site (HTML/CSS/JS) for server-less deployment.

## 🛠️ Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it.

## 📦 Building for Production

This project is configured for **Static Export**.

1.  **Build the Project**:
    ```bash
    npm run build
    ```

2.  **Locate the Output**:
    The static files will be generated in the `static` folder (renamed from `out` by our build script) or `out` folder by default.
    -   *Note*: If you see an `out` folder, that is the standard Next.js export.

3.  **Deployment**:
    Upload the contents of the `static` (or `out`) folder to any static hosting provider (e.g., AWS S3, GitHub Pages, Netlify, Vercel).

## ⚠️ Important Note on Static Export

To ensure the static export (HTML files) works correctly when opened directly from a file system (e.g., double-clicking `index.html`), we use `assetPrefix: "."`.

-   **Images**: All images are imported relative to the app to ensure paths resolve correctly.
-   **Routing**: Standard `<a>` tags are used for navigation anchors to work without client-side hydration issues in strict file-protocol environments.

## 📁 Project Structure

-   `app/`: Application routes and layouts.
-   `components/`: Reusable UI components (Navbar, Footer, Hero, etc.).
-   `assets/`: Static assets like images (moved here for relative imports).
-   `public/`: Public static files (favicons, etc.).
