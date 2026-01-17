# Copilot Instructions for KTM Web Project

## Project Overview
**KTM GROUP** is a React-based website for a mining company. The codebase is a single-page application (SPA) built with Vite, featuring hero carousels, dynamic scroll animations, and a comprehensive UI component library. Key tech stack: React 18+, TypeScript, Tailwind CSS, Motion (Framer Motion fork), Radix UI, and Lucide React icons.

## Architecture

### Directory Structure
- **`src/app/`** - Main application code
  - `App.tsx` - Root component (1837 lines) with navigation, hero section, about, services, team, and contact sections
  - `components/` - Feature-specific components
    - `HeroCarousel.tsx` - Auto-rotating carousel for mineral resources (5000ms interval)
    - `ResourcesCarousel.tsx` - Interactive carousel with swipe/navigation controls
    - `figma/ImageWithFallback.tsx` - Custom image component with SVG error fallback
  - `components/ui/` - Shadcn/ui component library (30+ pre-built components)
- **`src/styles/`** - Global styling
  - `index.css` - Main import file (imports fonts, Tailwind, theme)
  - `tailwind.css` - Tailwind CSS configuration with `tw-animate-css` plugin
  - `theme.css` - Custom theme variables
  - `fonts.css` - Font definitions

### Key Design Patterns

1. **Color System** (defined in `App.tsx`):
   - Primary: `#F59E0B` (amber, used for accent)
   - Secondary: `#111827` (dark gray)
   - Accent: `#3B82F6` (blue)
   - Particles: `#FFAB00` (gold)

2. **Framer Motion (motion/react)**:
   - Scroll-based animations via `useScroll()` and `useTransform()`
   - `ParticleBackground` component generates animated floating particles
   - Parallax effects on hero section: `heroScale` and `heroOpacity`

3. **Component Composition**:
   - Use Radix UI primitives from `components/ui/` (e.g., `Dialog`, `Dropdown`, `Select`)
   - UI components accept standard HTML attributes + class/style props
   - Utilize `cn()` utility from `utils.ts` for conditional Tailwind classes

4. **Image Handling**:
   - Figma assets imported directly: `import image from "figma:asset/[ID].png"`
   - Use `ImageWithFallback` wrapper for remote images (Unsplash URLs in carousels)
   - Fallback renders base64-encoded error SVG on load failure

## Developer Workflow

### State Management
- **Local state only**: No Redux/Zustand detected. Use `useState` + `useRef` for component state.
- **Common hooks** in `App.tsx`:
  - `useScroll()` / `useTransform()` for scroll animations
  - `useEffect` for timers (e.g., carousel auto-rotation every 5000ms)
  - `useRef` for DOM element references (e.g., `sectionsRef` for scroll-to-section)

### Styling Approach
- **Tailwind CSS** is the primary styling system
- **CSS Modules** not used; all styling via className strings
- **Motion library** handles animations (not CSS animations)
- Custom theme defined in `theme.css` — always reference color system constants

### Carousel Patterns
Both carousels follow similar patterns:
- `currentSlide` / `currentIndex` state for tracking position
- Auto-rotate `HeroCarousel` using `setInterval` cleanup pattern
- `ResourcesCarousel` supports swipe gestures via `AnimatePresence` + `motion.div`

### Conventions Not to Break
1. **Component Structure**: Component state at top of component body, render logic below
2. **Import Order**: React hooks first, then external libraries, then local imports
3. **File Naming**: PascalCase for components (`.tsx`), kebab-case for utils (`.ts`)
4. **Lucide Icons**: Destructured from single import: `import { Menu, X, Phone, ... } from "lucide-react"`

## Integration Points

### External Data Sources
- **Unsplash URLs** for carousel images (embedded in component props)
- **Figma Assets** imported via `figma:asset/[ID]` protocol — ensure IDs match design system

### Critical Dependencies
- `motion/react` - Scroll animations and parallax effects
- `radix-ui/react-slot` - Slot-based component composition in UI lib
- `class-variance-authority` - CVA for component variant system
- `lucide-react` - Icon library (30+ icons used in main app)

### Communication Pattern
- Props drilling used throughout; no context API observed
- Pass callbacks down, state up (typical React patterns)
- No GraphQL or REST API integrations visible — static content site

## Common Tasks

### Adding a New Section
1. Create component in `components/` (e.g., `components/NewSection.tsx`)
2. Import in `App.tsx` and add JSX to render
3. Update `activeSection` state and `sectionsRef` for navigation
4. Add section link to mobile menu and navbar

### Updating Carousels
- **HeroCarousel**: Modify `slides` array (image URL + title)
- **ResourcesCarousel**: Pass new `items` array via props from `App.tsx`
- Change rotation interval: modify `setInterval(fn, [timeout])` duration

### Styling New Components
- Extract color constants from `App.tsx` if available
- Use `cn()` utility to merge conditional Tailwind classes
- Reference `theme.css` for custom CSS variables
