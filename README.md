# Foehn Design System

One place for service teams to find styles, components and patterns for designing government services.

## About

This documentation will replace the one you find in [Foehn](https://github.com/DSI-VD/foehn).
Next major version of Foehn will not contain any documantion. It will help to gain some place in the repo.

## Getting Started

### Prerequisites

- Node.js (recommended version 14 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://[url]/foehn-design-system.git
cd foehn-design-system
```

2. Install dependencies:

```bash
npm install
```

### Running the project

To start the development server:

```bash
npm start
```

This will:

- Clean and prepare the build environment
- Copy necessary assets (Fontawesome, Foehn, documentation assets)
- Lint and format code
- Compile Sass styles
- Start Fractal with live reload
- Watch for style changes

The development server will be available at the URL shown in your terminal.

### Building for production

To build the project for production:

```bash
npm run build
```

This creates optimized files in the `build/` directory.

### Updating the project

To update dependencies and the project:

1. Update npm packages:

```bash
npm update
```

2. To update to a specific version of Foehn:

```bash
npm install @dsivd/foehn@latest
```

3. Rebuild the project after updates:

```bash
npm run prebuild
```
