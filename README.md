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

## Deploy to Render

This repository includes a Render Blueprint in `render.yaml` and pins Node.js using `.node-version`. Render uses the Blueprint to deploy the Vite production build as a static site:

| Render setting | Value |
| --- | --- |
| Service type | Static site |
| Build command | `npm ci && npm run build` |
| Publish directory | `./dist` |
| Branch | `main` |

### Create the site

1. Push the project, including `render.yaml` and `.node-version`, to the `main` branch of the GitHub repository.
2. Sign in to the [Render Dashboard](https://dashboard.render.com/) and select **New > Blueprint**.
3. Connect the `Cynthia35/Thotho-s-Juice-Ice-pops` GitHub repository and create the Blueprint.
4. Render reads `render.yaml`, builds the site, and provides its published `onrender.com` URL.

Alternatively, select **New > Static Site** and connect the repository. Use the build command and publish directory shown above. Subsequent pushes to the connected branch trigger a new deployment.

The site is a static, single-page frontend and does not require a server process, database, environment variables, or a separate start command.
