# Typography & Spacing System

## Overview
A comprehensive design system implementing consistent typography, spacing, and alignment across the portfolio following senior developer best practices.

## Design Principles

### 1. Typography Scale
Using a modular scale for consistent font sizing:

```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
--font-size-7xl: 4.5rem;      /* 72px */
```

### 2. Line Heights
Optimized for readability:

```css
--line-height-tight: 1.25;     /* Headings */
--line-height-snug: 1.375;     /* Subheadings */
--line-height-normal: 1.5;     /* Body text */
--line-height-relaxed: 1.625;  /* Long-form content */
--line-height-loose: 2;        /* Spacious layouts */
```

### 3. Spacing Scale
Consistent spacing using 8px base unit:

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 2.5rem;   /* 40px */
--spacing-3xl: 3rem;     /* 48px */
--spacing-4xl: 4rem;     /* 64px */
--spacing-5xl: 5rem;     /* 80px */
--spacing-6xl: 6rem;     /* 96px */
```

## Component-Specific Implementation

### Hero Section
**Typography:**
- Main Heading: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`
- Subheading: `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
- Body Text: `text-base sm:text-lg lg:text-xl`
- Small Text: `text-sm sm:text-base`
- Badge Text: `text-sm`

**Spacing:**
- Section Padding: `py-24 sm:py-32`
- Horizontal Padding: `px-6 sm:px-8 lg:px-12`
- Element Margins: `mb-6`, `mb-8`, `mb-10`, `mb-12`
- Max Width: `max-w-5xl mx-auto`

**Alignment:**
- Text: `text-center`
- Content: `max-w-5xl mx-auto`
- Buttons: `justify-center`

### About Section
**Typography:**
- Section Heading: `text-3xl sm:text-4xl lg:text-5xl`
- Subsection Heading: `text-xl sm:text-2xl`
- Body Text: `text-base sm:text-lg` (intro), `text-sm sm:text-base` (body)
- Stats Value: `text-4xl sm:text-5xl lg:text-6xl`
- Stats Label: `text-xs sm:text-sm`

**Spacing:**
- Section Padding: `py-20 sm:py-24 lg:py-32`
- Horizontal Padding: `px-6 sm:px-8 lg:px-12`
- Content Spacing: `mb-16 sm:mb-20`
- Card Padding: `p-8 sm:p-10 lg:p-12`
- Stats Grid Gap: `gap-4 sm:gap-6`

**Alignment:**
- Section Header: `text-center`
- Content: `max-w-5xl mx-auto`
- Stats: `text-center`

### Navbar
**Typography:**
- Logo: `text-lg sm:text-xl font-bold`
- Nav Links: `text-sm font-medium`
- CTA Button: `text-sm font-semibold`

**Spacing:**
- Height: `h-16`
- Padding: `px-4 sm:px-6 lg:px-8`
- Link Padding: `px-4 py-2`
- Button Padding: `px-5 py-2.5`

**Alignment:**
- Container: `flex items-center justify-between`
- Nav Items: `space-x-1`

## Responsive Breakpoints

```css
/* Mobile First Approach */
Base: 0px - 639px
sm: 640px+
md: 768px+
lg: 1024px+
xl: 1280px+
2xl: 1536px+
```

## Font Weight Scale

```css
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
```

## Best Practices Applied

### 1. Mobile-First Design
- Start with mobile sizes
- Scale up for larger screens
- Use responsive utilities (`sm:`, `md:`, `lg:`, `xl:`)

### 2. Consistent Spacing
- Use spacing scale variables
- Maintain vertical rhythm
- Apply consistent gaps between elements

### 3. Typography Hierarchy
- Clear distinction between heading levels
- Appropriate line heights for content type
- Consistent font weights

### 4. Accessibility
- Minimum font size: 14px (0.875rem)
- Sufficient line height for readability
- Proper heading structure (h1, h2, h3)
- Color contrast ratios meet WCAG standards

### 5. Performance
- System font stack for fast loading
- Font smoothing for better rendering
- Optimized letter spacing

## Usage Examples

### Heading
```jsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
    Your Heading
</h1>
```

### Body Text
```jsx
<p className="text-base sm:text-lg leading-relaxed text-gray-400">
    Your paragraph text
</p>
```

### Section Spacing
```jsx
<section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
    {/* Content */}
</section>
```

### Centered Content
```jsx
<div className="max-w-5xl mx-auto text-center">
    {/* Centered content */}
</div>
```

## Maintenance Guidelines

1. **Always use the spacing scale** - Don't use arbitrary values
2. **Follow the typography scale** - Maintain consistency
3. **Test on multiple screen sizes** - Ensure responsive behavior
4. **Check accessibility** - Verify contrast and readability
5. **Document changes** - Update this file when modifying the system

## Tools & Resources

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: For theme consistency
- **Responsive Design**: Mobile-first approach
- **Typography Scale**: Modular scale calculator
- **Contrast Checker**: WCAG compliance tool

## Future Enhancements

1. Add custom font family (optional)
2. Implement dark/light theme toggle
3. Add animation timing variables
4. Create component-specific spacing tokens
5. Add print stylesheet
