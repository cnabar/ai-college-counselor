# AI College Counselor — The Admissions Atelier

> **Ivy Ambition meets Surgical Precision.**  
> The private admissions advisory atelier for competitive applicants. Powered by 2.4 million institutional telemetry points to engineer an undeniable intellectual spike.

---

## Aesthetic & Design System

Built under **Preset B — "Midnight Luxe" (Dark Editorial)**:
- **Identity:** A private members' club meets a high-end watchmaker's atelier.
- **Palette:** 
  - Obsidian `#0D0D12` (Primary)
  - Champagne `#C9A84C` (Accent)
  - Ivory `#FAF8F5` (Background / Surface)
  - Slate `#2A2A35` (Text / Dark)
- **Typography:** 
  - Headings: `Inter` (tight tracking)
  - Drama: `Playfair Display` (Italic)
  - Data / Telemetry: `JetBrains Mono`
- **Visual Texture:** Global CSS noise overlay using an inline SVG `<feTurbulence>` filter at 0.05 opacity.
- **Micro-Interactions:** Magnetic button hover transitions (`scale(1.03)`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`), sliding background layers, and interactive lifts.

---

## Architectural Sections

1. **Floating Island Navbar:** Fixed pill-shaped navigation container with dynamic backdrop blur on scroll past the hero.
2. **Opening Shot Hero:** 100dvh full-bleed classical library imagery with a heavy gradient overlay, content pushed to the bottom-left third, and GSAP staggered fade-up animations.
3. **Interactive Functional Artifacts:**
   - **Diagnostic Shuffler:** Overlapping cards cycling vertically with spring-bounce physics every 3.2 seconds.
   - **Telemetry Typewriter:** Real-time monospace live feed streaming simulated candidate milestones and committee consensus.
   - **Cursor Protocol Scheduler:** Weekly calendar grid with an animated SVG cursor that enters, clicks, activates day events, and saves protocol state.
4. **The Manifesto:** Parallax luxury texture with ScrollTrigger word-by-word reveal and contrasting typography.
5. **Sticky Stacking Archive Protocol:** 3 pinned full-screen cards stacking with depth scaling, 20px blur, and custom canvas/SVG animations (astrolabe rings, scanning laser grid, kinetic audio waveform).
6. **Membership / Pricing:** 3-tier grid featuring the highlighted "Ivy Performance" tier and 14-day guarantee.
7. **Admissions Intake Modal:** 4-phase AI telemetry evaluation simulation and instant trial dossier synthesis.
8. **Atelier Footer:** Rounded top with live pulsing system operational indicator.

---

## Technical Stack

- **Framework:** React 19
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4.17
- **Animation:** GSAP 3 (with ScrollTrigger plugin)
- **Icons:** Lucide React

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/cnabar/ai-college-counselor.git
cd ai-college-counselor

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## License

Private repository. All rights reserved.
