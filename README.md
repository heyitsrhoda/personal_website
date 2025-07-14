# Personal Website

This is my personal website built with Next.js and deployed on GitHub Pages.

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for GitHub Pages

To build the site for GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions. The workflow:

1. Builds the Next.js application
2. Exports static files to the `out` directory
3. Deploys to GitHub Pages

## GitHub Pages Configuration

- The site is configured for static export with `output: 'export'` in `next.config.ts`
- Images are set to `unoptimized: true` for static export compatibility
- The base path is set to `/personal_website` for production builds
- A `.nojekyll` file is included to prevent Jekyll processing

## Local Development vs Production

- Local development uses the standard Next.js dev server
- Production builds include the repository name in the base path for GitHub Pages
