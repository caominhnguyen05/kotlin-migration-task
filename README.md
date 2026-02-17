# Kotlin Website Migration - JetBrains Internship Assignment

In this task, I have done migration of the legacy Kotlin homepage from a Flask + React hybrid architecture to **React Router 7 Framework Mode** setup with Server-Side Rendering.

## Project Structure

- `app/`
  - `components/`: Page sections (header section, start section, etc.).
  - `layout/`: Common layout used for the section components.
  - `routes/home.tsx`: Homepage content (Main Kotlin page)
  - `styles`: CSS style classes
  - `app.scss`: Application-level styles
  - `root.tsx`: Root layout of the website
  - `routes.ts`: Contains routing to homepage
- `public/`: Contain static assets (fonts and images).
- `package.json`
- `vite.config.ts`

## Instructions to Build and Run

1. Clone the repository

```bash
git clone https://github.com/caominhnguyen05/kotlin-migration-task.git
cd kotlin-mirgation-task
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

4. Build for production:

```bash
npm run build
```

## Notes / Migration Details

- In my implementation, I have removed the Flask backend, and as the header and footer UI depend on Flask, these two components are not included in the migrated version.
- `@rescui/*` components updated to use named imports, as default exports were deprecated.
