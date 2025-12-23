# WienerMatch

A playful landing page for WienerMatch - AI-powered dachshund matchmaking. Built with Vite + React to demo BugDrop integration.

## Features

- Curved "Wiener Dog" SVG text effect in hero section
- Interactive "Doxie Wishlist Builder" demo with trait management
- Warm cream/orange dachshund-inspired color palette
- Testimonials, features, how-it-works, and CTA sections
- Floating dog emoji decorations with smooth animations
- Integrated BugDrop widget for feedback and bug reports

## BugDrop Integration

This app includes the BugDrop widget that allows users to:
- Report bugs and issues with screenshots
- Select specific UI elements for context-aware feedback
- Submit feedback directly to GitHub Issues

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
- **Feedback**: BugDrop
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
