# Dr. Tani - Holistic Wellness Website

## Overview
A modern, responsive single-page website for Dr. John Tani's chiropractic and holistic wellness practice in Draper, Utah. Rebuilt from the original drtani.com with a fresh, contemporary design.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, Shadcn UI, Framer Motion
- **Backend**: Express (minimal - serves static content only)
- **No database needed** - this is a static content site

## Structure
- `client/src/pages/home.tsx` - Main single-page layout with all sections (Navbar, Hero, About, Mission, Services, Contact, Footer)
- `client/src/App.tsx` - Router setup
- `client/public/images/` - Generated images for hero and service cards
- `client/src/index.css` - Theme colors (teal/sage green wellness palette, hue 168)

## Design
- Color palette: Teal/sage green primary (hue 168) for a wellness/health feel
- Fonts: Plus Jakarta Sans (body), Lora (headings/serif)
- Single-page scrolling design with smooth navigation
- Responsive mobile navigation with hamburger menu
- Animated sections with Framer Motion

## Key Features
- Sticky navigation with scroll-aware styling
- Hero section with generated background image
- About section with credential cards
- Mission statement with personal note
- Services grid with generated illustrations
- Contact section with Google Maps embed and click-to-call
- Full responsive design (mobile-first)
