# Nullframe Portfolio Website

This repository contains the source code for the **Nullframe** portfolio website, a personal web development studio by Jeff Elder based in Manitoba, Canada.

The site serves as a digital portfolio to showcase technical skills, featured projects, and provide a contact point for potential clients. It is built using standard web technologies (HTML, CSS, JavaScript) without heavy frameworks, demonstrating a clean, responsive, and performant design with built-in dark/light mode functionality.

## Project Structure

```text
jeff-elder-portfolio/
├── about.html         # About page detailing the developer's background and rates
├── contact.html       # Contact page with a Formspree-powered inquiry form
├── index.html         # The main landing page displaying a hero section and skills
├── projects.html      # Projects showcase page (populated dynamically via JS)
├── script.js          # Handles dynamic content rendering and theme toggling
├── style.css          # Global stylesheet including CSS variables and theme rules
├── thankyou.html      # Form submission success page
└── assets/            # Directory containing images and SVGs used on the site
    ├── femconnect.png
    ├── foundry.png
    ├── klb.png
    ├── nullframe.svg
    ├── nullframelogo.png
    ├── nullframelogo.svg
    ├── nullframelogotext.svg
    ├── nullframenavbar.svg
    └── qring.png
```

## Features
- **Dynamic Content:** Skills and projects are rendered dynamically via JavaScript objects, making it easy to update the portfolio.
- **Theme Toggle:** Built-in dark and light mode toggle that saves user preferences via `localStorage`.
- **Responsive Design:** Mobile-friendly layouts utilizing CSS Grid and Flexbox.
- **Contact Form:** Integrated with Formspree for easy message handling.