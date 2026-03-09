# AGENTS.md - Agentic Coding Guidelines

## Project Overview

This is a Docusaurus-based documentation site for the "10.020 Data Driven World" course. It uses React 18, MDX, and various Docusaurus plugins including mermaid, brython (live Python), and local search.

## Build Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm start

# Build for production
npm run build

# Serve the built site locally
npm run serve

# Deploy to GitHub Pages
npm run deploy

# Clear Docusaurus cache
npm run clear

# Write translations
npm run write-translations

# Generate heading IDs for markdown
npm run write-heading-ids
```

### Single Test
No test framework is configured. Manual testing via `npm start` is required.

### Node Version
Node 18+ is required. The project uses `@docusaurus/core@3.7.0`.

---

## Code Style Guidelines

### General Principles
- Keep code simple and readable for educational purposes
- This is a documentation site - prioritize clarity over cleverness
- No comments unless explaining complex educational concepts

### JavaScript/TypeScript

**Imports**
- Use double quotes for all imports: `import React from "react"`
- Order imports: React → external libraries → internal components → local utilities
- Use `@site/` alias for absolute imports from project root

**Naming Conventions**
- Components: PascalCase (`CollapsibleAnswer`, `DeepDive`)
- Functions/variables: camelCase (`handleClick`, `isExpanded`)
- Files: camelCase or kebab-case (`index.js`, `my-component.js`)
- Constants: SCREAMING_SNAKE_CASE for config values

**React Components**
- Use functional components with arrow functions or `function` keyword
- Destructure props directly in function signature
- Use CSS Modules for component-specific styling (`.module.css` files)

**TypeScript**
- Enable `@ts-check` in JS files for type inference
- Use JSDoc comments for type annotations when needed
- Follow TypeScript conventions in `docusaurus.config.js`

### CSS/Styling
- Use CSS Modules (`.module.css`) for component styles
- Keep styles co-located with components in same directory
- Follow existing CSS patterns in theme files

### Markdown/MDX

**File Organization**
- Notes: `docs/` folder
- Projects: `projects/` folder  
- Learning objectives: `learning-objectives/` folder
- About: `about/` folder
- Images: Place in local `/images` subfolder alongside the markdown file

**Front Matter**
```yaml
---
sidebar_position: 1
---
```

**Custom Admonitions**
Use keywords: `info`, `success`, `danger`, `note`, `tip`, `warning`, `important`, `caution`, `keyword`, `think`

```markdown
:::tip
Your content here
:::
```

**Custom Components Available**
- `<DeepDive title="Title">` - Collapsible detailed explanation
- `<CollapsibleAnswer>` - Expandable answer block
- `<ImageCard path={require("./image.png").default} widthPercentage="70%"/>`
- `<ChatBaseBubble>` - Chat bubble styling
- `<LinkCard>` / `<LinkCardGrid>` - Card links
- `<SubjectCard>` - Subject information cards
- `<CenterItem>` - Centered content

### Error Handling
- No specific error handling framework required
- Use React error boundaries if adding complex components
- Validate props in development mode with meaningful error messages

### Configuration
- Main config: `docusaurus.config.js`
- Local overrides: `docusaurus.local.config.js` (not committed)
- Sidebar: `sidebars.js`
- Custom theme components in `src/theme/`

---

## Common Development Patterns

### Adding New Documentation Section
1. Create folder in root (e.g., `newsection/`)
2. Add entry `intro.md` with front matter
3. Register in `docusaurus.config.js` under `plugins`
4. Add to navbar under `themeConfig.navbar.items`
5. Include in search via `docsRouteBasePath`

### Customizing Admonitions
Edit `src/theme/Admonition/index.js` and add keywords to `docusaurus.config.js` under each doc preset's `admonitions.keywords`.

### Swizzling Docusaurus Components
```bash
npm run swizzle
```
Then modify in `src/theme/`.

---

## Important Notes

- This is a course website - changes should be backward compatible
- Test locally with `npm start` before deploying
- The deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`)
- URL structure includes `/2023/` baseUrl - update in `docusaurus.local.config.js` for forks
