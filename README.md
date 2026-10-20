# Khalid Mohamed — Portfolio (improved)

## Files
- `index.html` — semantic page structure and content
- `style.css` — responsive layout, theme colors, cards, mobile navigation, accessibility styling
- `script.js` — theme toggle, mobile menu, current year, and missing-portrait fallback
- `assets/portrait.png` — add your own portrait here

## Publish to GitHub Pages
1. Download and unzip this package.
2. Add your portrait image at `assets/portrait.png` (keep the filename and lowercase folder name exact).
3. Open your repository: https://github.com/KhalidMohamed37/portfolio
4. Upload/replace `index.html`, `style.css`, `script.js`, and the `assets` folder in the repository's publishing root. If you publish from `main` / `(root)`, these files must be at that root.
5. Commit the changes and wait for GitHub Pages to finish publishing.

The page uses relative paths (`style.css`, `script.js`, and `assets/portrait.png`) so it works under the project URL `/portfolio/`.

## Before publishing
- Verify the email address and profile links.
- Replace project descriptions/status with accurate information.
- Add real screenshots and working demo/repository links to projects you have completed.
- The Coffee Store App artwork is illustrative CSS, not a screenshot of a real app.
- Remove technologies from the skills list if you have not used them yet.

## Features included
- Responsive layout for desktop, tablet, and mobile
- Mobile navigation with accessible expanded state
- Light/dark theme toggle with guarded local storage
- Semantic landmarks, skip link, focus indicators, and reduced-motion support
- SEO description and Open Graph metadata
- Dynamic copyright year
- Graceful portrait fallback if `assets/portrait.png` is missing
