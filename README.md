# Foehn Design System

One place for service teams to find styles, components and patterns for designing government services.

## About

This documentation will replace the one you find in [Foehn](https://github.com/DSI-VD/foehn).
Next major version of Foehn will not contain any documentation. It will help to gain some place in the repo.

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm 10 or higher

### Installation

```bash
npm install
```

### Running the project

```bash
npm start
```

This cleans and prepares the build environment, copies Font Awesome, Foehn and documentation assets, formats sources, compiles Sass, starts Fractal and watches style changes.

### Building for production

```bash
npm run build
```

The production build is generated in the `build/` directory.

### Updating the project

```bash
npm update
npm install @dsivd/foehn@latest
npm run prebuild
```
