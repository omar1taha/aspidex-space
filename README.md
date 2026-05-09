# UAE Government Services

Here is a link for the live deployment link:
https://omar1taha.github.io/aspidex-space/

A React application that displays UAE government services with search and category filtering, built with the [UAE Design System](https://designsystem.gov.ae/).

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- [@aegov/design-system-react](https://www.npmjs.com/package/@aegov/design-system-react)
- [@aegov/design-system](https://www.npmjs.com/package/@aegov/design-system) (Tailwind plugin)

## Prerequisites

- Node.js >= 22.12

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    ServiceCard.tsx    # Reusable service card using UAE DS Card component
  data/
    services.ts        # Mock service data and types
  aegov.d.ts           # Type declarations for UAE DS React package
  App.tsx              # Main app with search, filter, and card grid
  index.css            # Tailwind directives + UAE DS styles
```
