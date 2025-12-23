# BugDrop Test App

A simple TypeScript fullstack todo list application built with Vite + React to test BugDrop integration.

## Features

- Interactive todo list with add, complete, and delete functionality
- Filter todos by status (All, Active, Completed)
- Live statistics showing total, active, and completed todos
- Integrated BugDrop widget for user feedback and bug reports
- Responsive design with smooth animations

## BugDrop Integration

This app includes the BugDrop widget script that allows users to:
- Report bugs and issues
- Suggest improvements
- Select specific UI elements for context-aware feedback

The widget is configured to submit feedback to the `neonwatty/feedback-widget-test` repository.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Deployment

This app is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the main branch.

Live demo: https://neonwatty.github.io/feedback-widget-test/

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
