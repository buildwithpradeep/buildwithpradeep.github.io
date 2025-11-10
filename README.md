# Personal Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Summary  

This repository contains a personal portfolio site built with React + TypeScript and styled with SCSS. The app showcases projects, a timeline, skills, and a contact form. It was adapted from a public template and customized with personal content.

## Screenshot  

![screenshot](./src/assets/images/screenshot.png)

## Features

- Responsive, mobile-first layout  
- Light / dark theme toggle  
- Project showcase, timeline, skills, and contact form  
- Built with React, TypeScript, MUI, and Sass

## Local development

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start dev server:

    ```bash
    npm start
    ```

   Open http://localhost:3000

3. Edit source files in /src/components to customize text, images, and content.

## Build & deploy (GitHub Pages)

This section covers both a project page and a user/organization site. Replace placeholders with your repository details when instructed.

1) Add homepage to package.json (for a project page):

    ```json
    "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
    ```

   For a user/organization site repository named `<your-github-username>.github.io`, you can omit homepage.

2) Install gh-pages (dev dependency) if you plan to use it:

    ```bash
    npm install --save-dev gh-pages
    ```

3) package.json scripts (example):

    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```

4) Commit and push your source code to GitHub (origin should point to your repo).

5A) Deploy to gh-pages branch (project or user site):

    ```bash
    npm run deploy
    ```

   - This publishes build to a gh-pages branch. In GitHub → Settings → Pages, set Source to gh-pages if needed.

5B) Publish build directly to main (user site root):

    ```bash
    npm run build
    npx gh-pages -d build -b main
    ```

   - This copies static files to the main branch root for user/organization pages.

## Verification

- After deploying, wait a few minutes and visit the site URL you configured.
- In GitHub → Settings → Pages confirm the branch/folder being served.

## Notes

- Remove or update any remaining template credits in public/index.html, src/components/Footer.tsx, or README.
- The contact form UI is present in src/components/Contact.tsx; configure EmailJS or another backend if you want submissions to work.
- For automated deploys, consider adding a GitHub Actions workflow to build and publish on push to main.

## Credits

- Template originally created by Yuji Sato (yujisatojr). Original demo: https://yujisatojr.github.io/react-portfolio-template/

## License

- Keep or update the LICENSE file as appropriate.