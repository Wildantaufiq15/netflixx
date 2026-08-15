---
name: Cinematic Union
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#af8782'
  outline-variant: '#5e3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e50914'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c0000c'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#737272'
  on-tertiary-container: '#fbf8f8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-hero:
    fontFamily: Be Vietnam Pro
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  metadata:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  section-gap: 48px
  gutter: 16px
  container-max-width: 680px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system translates the high-stakes, immersive energy of a premium streaming platform into a personal celebratory context. The brand personality is bold, exclusive, and undeniably cinematic. It targets a modern audience that appreciates directness, high-impact visuals, and a "premiere" feel for a digital invitation.

The aesthetic follows a **High-Contrast / Bold** modern movement, utilizing a strict dark mode interface to make photography and red accents pop with theatrical intensity. The emotional response is one of excitement and "must-watch" urgency, treating the wedding event as a blockbuster release.

## Colors

The palette is restricted to high-impact tones to maintain a premium, cinematic atmosphere. 

- **Primary (#E50914):** Reserved for critical calls to action (RSVP), active states, and brand-level accents.
- **Background (#141414):** A deep, near-black that provides the canvas for the entire experience, ensuring no visual bleed and maximum contrast for text.
- **Surface (#333333):** Used for secondary elements, badges, and input backgrounds to provide subtle depth against the primary background.
- **Typography:** Pure white (#FFFFFF) is used for all primary information to ensure legibility against the dark background. Light gray (#B3B3B3) is used for metadata and secondary descriptions to establish a clear information hierarchy.

## Typography

The typography system utilizes **Be Vietnam Pro** for its contemporary, geometric sans-serif qualities that echo modern streaming interfaces.

- **Headlines:** Feature tight tracking and heavy weights (Bold/ExtraBold). Large section headings must be left-aligned to mimic content categories, with a mandatory 48px top margin to provide breathing room between "episodes" of the wedding story.
- **Body:** Set with generous line height for readability against dark backgrounds.
- **Uppercase Labels:** Used for small tags or badges to create a structured, organized look for event metadata (Date, Time, Location).

## Layout & Spacing

This design system uses a **Fixed Grid** centered column layout to mimic the focused experience of a mobile player or a curated content list. 

- **Column Structure:** Content is constrained to a maximum width of 680px for optimal readability and a premium "editorial" feel on desktop, while filling 100% of the width (minus 20px side margins) on mobile.
- **Rhythm:** A vertical stack model is used. Use 48px margins to separate major narrative sections. 
- **Alignment:** While text is generally left-aligned to follow the "Netflix content row" logic, the primary hero section can adopt center alignment for a "featured title" effect.

## Elevation & Depth

Depth in this system is achieved through **Tonal Layers** rather than traditional shadows. 

- **Level 0:** The base background is #141414.
- **Level 1:** Cards, badges, and input fields use #333333.
- **Overlay:** Use subtle vertical gradients (Black to Transparent) over photography to ensure white text remains legible while maintaining the "Cinematic" look.
- **Shadows:** If used, they should be "Hard" and nearly invisible, only meant to separate the Surface (#333333) from the Background (#141414) in complex layouts.

## Shapes

The shape language is primarily **Pill-shaped**, providing a soft, modern contrast to the sharp, aggressive typography.

- **Buttons:** Fully rounded edges (capsule style).
- **Badges/Pills:** Fully rounded edges.
- **Media/Cards:** Small-radius corners (4px to 8px) to maintain a structural, screen-like appearance for photos.

## Components

- **Buttons:** Primary buttons are Solid Red (#E50914) with White text, Bold weight, and fully rounded corners. Hover states should slightly brighten the red.
- **Pills/Badges:** Small metadata tags (e.g., "Ceremony", "Reception") should use the Surface color (#333333) with White or Light Gray text, fully rounded.
- **Input Fields:** Background #333333 with a bottom-only border or a very subtle 1px frame. Focus state should highlight the border in Red.
- **Cards:** Used for "Cast" (Wedding Party) or "Gallery" items. Rectangular with slight rounding, prioritizing the image with text as an overlay or directly beneath in Light Gray.
- **Lists:** Clean, horizontal rows with 1px borders in #333333 separating items like "Registry" or "Schedule."
- **Checkboxes/Radios:** Circular when selected, using the Red (#E50914) fill.