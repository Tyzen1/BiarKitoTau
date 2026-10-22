---
name: Biar Kito Tau
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444653'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#002e81'
  on-tertiary: '#ffffff'
  tertiary-container: '#0042b2'
  on-tertiary-container: '#a4b9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies civic clarity, transparent governance, and communal empowerment. Serving the residents, workers, and visitors of Palembang, the interface balances institutional authority with everyday accessibility. 

The aesthetic is Modern Civic Minimalism with controlled tactile translucency. It relies on clean, high-legibility surfaces, disciplined typographic hierarchy, and structural white space. Frosted glass elements are reserved strictly for floating viewport utilities—such as interactive map controls, filter sheets, and bottom navigation ribbons—ensuring utility over decoration while keeping underlying city data contextualized.

## Colors

The palette is engineered around civic trust, structural legibility, and high-contrast status feedback.

- **Canvas & Surfaces:** Primary background is `#FFFFFF`, layered on `#F8FAFC` for secondary page backdrops and grouping planes.
- **Brand Identity:** Deep institutional blue (`#1E40AF`) drives structural banners, active states, and primary actions. Sky civic blue (`#0284C7`) and electric civic blue (`#2563EB`) provide depth for interactive states, links, and secondary badges.
- **Civic Signal Markers (Categorical & Incident):**
  - **Darurat / Bencana (Emergency):** `#EF4444` (light surface tint: `#FEF2F2`, border: `#FCA5A5`)
  - **Lalu Lintas / Insiden (Traffic):** `#F59E0B` (light surface tint: `#FFFBEB`, border: `#FCD34D`)
  - **Wisata / Event (Tourism & Culture):** `#10B981` (light surface tint: `#ECFDF5`, border: `#6EE7B7`)
  - **Loker / Ekonomi (Careers & Economy):** `#0EA5E9` (light surface tint: `#F0F9FF`, border: `#7DD3FC`)
- **Neutrals:** Text sits firmly on `#0F172A` (900) for headers, `#334155` (700) for body, and `#64748B` (500) for labels. Card borders leverage `#E2E8F0`.

## Typography

Plus Jakarta Sans governs the entire interface across display, editorial, and micro-copy roles. Its open apertures, tall x-height, and contemporary geometric structure provide immediate legibility in bilingual layouts (Indonesian & regional terms).

- **Headlines:** Set with high contrast using 600 (Semibold) and 700 (Bold) to define clear content boundaries across civic announcements and emergency bulletins.
- **Body:** Standard text runs strictly at 400 (Regular) weight using controlled line-height ratios (1.4–1.5) to maintain sustained readability across public notices and documentation.
- **Labels & Categorical Badges:** Rendered in 500 or 600 weight, optimized for rapid scanning on maps, status tags, and statistical data overlays.

## Layout & Spacing

The layout employs an 8pt base grid with a responsive container architecture:
- **Desktop (1280px+):** 12-column grid, 24px (`1.5rem`) gutters, maximum content container width of 1280px centered with automatic margins.
- **Tablet (768px - 1279px):** 8-column grid, 24px (`1.5rem`) gutters, 24px outer page margins.
- **Mobile (320px - 767px):** 4-column grid, 16px (`1rem`) gutters, 16px outer page margins.

Layouts split between two primary structural paradigms:
1. **Portal Content Views:** Traditional top-down hierarchy featuring service clusters, feeds, and informational cards.
2. **Civic Map & Dashboard Views:** Edge-to-edge canvas with floating floating glass control panels positioned using consistent `space-md` offsets from safe boundaries.

## Elevation & Depth

Visual hierarchy uses a hybrid system combining low-contrast containment borders and subtle atmospheric shadows, paired with selective frosted glass for floating interface layers.

- **Level 0 (Flat Ground):** `#F8FAFC` base page backdrop.
- **Level 1 (Card & Content Blocks):** `#FFFFFF` surface bounded by a 1px border (`#E2E8F0`) with an ambient diffused shadow: `0px 1px 3px rgba(15, 23, 42, 0.05)`.
- **Level 2 (Hover States & Dropdowns):** `#FFFFFF` surface, 1px border (`#CBD5E1`), shadow: `0px 4px 12px rgba(15, 23, 42, 0.08)`.
- **Level 3 (Modals & Pinned Alerts):** Shadow: `0px 12px 24px -4px rgba(15, 23, 42, 0.12)`.
- **Level Glass (Floating Navigation & Map Filters):** Background `rgba(255, 255, 255, 0.85)` with a 12px backdrop blur (`backdrop-filter: blur(12px)`), encapsulated by a 1px perimeter border of `rgba(255, 255, 255, 0.6)` and ambient drop shadow: `0px 8px 20px rgba(15, 23, 42, 0.08)`.

## Shapes

The design system maintains a refined, approachable posture using **Rounded (Level 2)** geometry:
- Standard elements (buttons, form inputs, small widgets) use `0.5rem` (8px).
- Content cards, dashboard panels, and modals use `rounded-lg` at `1rem` (16px).
- Floating map ribbons, hero banners, and persistent bottom sheets use `rounded-xl` at `1.5rem` (24px).
- Status markers, chips, avatar rings, and counter badges use pill profiles (`9999px`) to maintain semantic separation from rectangular interaction blocks.

## Components

### Buttons
- **Primary:** Solid `#1E40AF` fill, `#FFFFFF` text, `0.5rem` radius, 12px 20px padding. Hover: `#1E3A8A`. Focus: 3px ring of `#93C5FD`.
- **Secondary:** Transparent fill, 1.5px border `#2563EB`, text `#1E40AF`. Hover: background `#EFF6FF`.
- **Subtle / Ghost:** Transparent fill, text `#334155`. Hover: background `#F1F5F9`.
- **Emergency Action:** Solid `#EF4444` fill, `#FFFFFF` text. Used exclusively for SOS reporting and critical alerts.

### Chips & Category Badges
- Compact pill-shaped tags featuring the category's distinct accent color:
  - **Darurat / Bencana:** Background `#FEF2F2`, text `#B91C1C`, border 1px solid `#FCA5A5`.
  - **Lalu Lintas:** Background `#FFFBEB`, text `#B45309`, border 1px solid `#FCD34D`.
  - **Wisata:** Background `#ECFDF5`, text `#047857`, border 1px solid `#6EE7B7`.
  - **Loker:** Background `#F0F9FF`, text `#0369A1`, border 1px solid `#7DD3FC`.
- Interactive chips for map filtering display a 2px active ring in `#1E40AF` when selected.

### Cards
- Constructed with `#FFFFFF` background, 1px border `#E2E8F0`, and `rounded-lg` radius.
- Padding sits at `1.5rem` (`space-lg`) on desktop and `1rem` (`space-md`) on mobile.
- Civic feed cards include a distinct left accent border (3px width) matching their specific category tone (e.g., Red for Darurat).

### Input Fields
- Background `#FFFFFF`, 1px border `#CBD5E1`, `0.5rem` border radius, padding 10px 14px.
- Text `#0F172A`, placeholder `#94A3B8`.
- Focus state: border `#2563EB` with a soft glow ring (`box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`).

### Checkboxes & Radio Buttons
- 18px dimensions, border `#94A3B8`, active fill `#1E40AF`.
- Checked state displays an ultra-crisp white check or center-dot icon.

### Floating Filter Panels (Map Utilities)
- Translucent backdrop container (`rgba(255, 255, 255, 0.85)`, blur 12px) floating 16px above map viewport boundaries.
- Rounded pill containers for horizontally scrolling category selectors.

### Data Metric Tiles
- Compact informational widgets displaying municipal metrics (e.g., Air Quality Index, River Water Levels at Musi River, Traffic Fluidity).
- Composed of micro-labels, large 24px bold metric values, and inline directional indicators.