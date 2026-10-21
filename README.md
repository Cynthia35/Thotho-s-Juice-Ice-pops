# Thotho’s Juice & Ice Pops

A responsive React and Vite website featuring the real product photographs supplied in `public/images/`. No stock or generated product images are used.

## Run locally

Install a current version of Node.js, then open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite. To verify the production build, run `npm run build`; to preview it, run `npm run preview`.

## Editing the website

- Update the introductory About Us text in `src/content.js` (`aboutCopy`).
- Update product names, image paths, descriptive alt text, and gallery entries in `src/content.js`.
- Replace the contact placeholders in `src/App.jsx` when the business phone or email is ready. The WhatsApp enquiry link currently opens WhatsApp with a pre-filled message and lets the visitor choose a chat; it does not assume a phone number.
- Change the visual theme and responsive layout in `src/styles.css`.

The uploaded `Noble Distributions` promotional flyer was not present in the supplied project files. The current palette follows the orange, mango yellow, deep green, and warm cream colours specified in the brief. To use the flyer as a closer visual reference, copy the original flyer into `public/images/` and update this site only if you want it displayed; it is not recreated here.

## Images

The original uploaded product photographs are kept in `public/images/`. The site uses optimized copies in `public/images/optimized/` so the original photos remain untouched.

## Commit and push to GitHub

This project folder was supplied without a `.git` directory, so it is not currently a clone of the GitHub repository. The linked GitHub repository currently has no commits. To initialize this folder and push the first version, open PowerShell here and run:

```powershell
git init
git branch -M main
git remote add origin https://github.com/Cynthia35/Thotho-s-Juice-Ice-pops.git
git add .
git commit -m "Build Thotho's Juice & Ice Pops website"
git push -u origin main
```
