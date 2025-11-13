# Copilot Instructions for quince-15

## Project Overview
- This is a Next.js 13+ app using the `/app` directory structure and Tailwind CSS for styling.
- Major UI components are in `components/` and global styles in `app/globals.css`.
- The entry point for the main page is `app/page.tsx`, with layout handled by `app/layout.tsx`.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Hot reload:** Editing files in `app/` or `components/` triggers automatic reload.
- **Build for production:** `npm run build`
- **No test scripts or test folders detected.**

## Key Patterns & Conventions
- **Component structure:** All React components are function components in TypeScript (`.tsx`).
- **Styling:** Use Tailwind CSS utility classes. Global styles are in `app/globals.css`.
- **Font loading:** Uses `next/font` for optimized font loading (see README for Geist font).
- **No custom API routes or backend logic detected.**
- **No state management libraries (Redux, Zustand, etc.) detected.**
- **No custom ESLint or PostCSS rules beyond defaults.**

## Integration Points
- **External dependencies:** Next.js, Tailwind CSS, next/font.
- **No custom integrations or service boundaries found.**

## Examples
- To add a new section to the homepage, create a component in `components/` and import it in `app/page.tsx`.
- For global styles, edit `app/globals.css`.
- For layout changes, edit `app/layout.tsx`.

## References
- `README.md` for setup and deployment instructions.
- `app/` for main app structure.
- `components/` for reusable UI elements.

---
If any conventions or workflows are unclear, please provide feedback so this guide can be improved.