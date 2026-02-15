# Singapore American School - Landing Page

A modern, one-page HTML website concept that replicates the structure and sophisticated feel of the Singapore American School homepage.

## 🎨 Features

- **Modern Design**: Clean, trustworthy, and visually driven layout with premium aesthetics
- **Fully Responsive**: Perfect display on mobile, tablet, and desktop devices
- **Tailwind CSS**: All styling implemented using Tailwind CSS via CDN
- **Interactive Elements**: 
  - Mobile hamburger menu with smooth toggle
  - Animated stat counters with viewport detection
  - Smooth scrolling for anchor links
- **Typography**: Premium font pairing with Playfair Display (serif) and Inter (sans-serif)
- **Color Palette**: 
  - Deep Navy Blue (#0a1929) for headers
  - Warm Gold (#c4a03b) for accents
  - Clean White and Light Gray backgrounds

## 📄 Page Sections

1. **Hero Section** - Full-width header with navigation and call-to-action
2. **The Eagle Way Pillars** - Three-column grid showcasing Excellence, Extraordinary Care, and Possibilities
3. **Reasons to Soar** - Full-width statement block
4. **Student Life & Statistics** - Two-column layout with animated statistics
5. **Future & Graduates** - Two-column teaser with graduate profile
6. **Student Testimonial** - Pull quote section with student profile
7. **Final Call to Action** - Full-width CTA section
8. **Footer** - Multi-column footer with links and copyright

## 🚀 Getting Started

Simply open `index.html` in any modern web browser. The page uses CDN resources, so an internet connection is required for full styling and icons.

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server
python3 -m http.server 8080
# Then navigate to http://localhost:8080/index.html
```

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **Tailwind CSS 3.x** - Utility-first CSS framework (via CDN)
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Playfair Display and Inter
- **Vanilla JavaScript** - Minimal JS for interactivity:
  - Mobile menu toggle
  - Intersection Observer API for stat animations
  - Smooth scroll behavior

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🎯 Key JavaScript Features

### Mobile Menu Toggle
```javascript
// Toggles visibility of mobile navigation menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
```

### Animated Stat Counters
```javascript
// Counts up numbers when they come into viewport
// Uses Intersection Observer API for performance
```

## 📝 Customization

To customize the page:

1. **Colors**: Edit the Tailwind config in the `<script>` tag
2. **Content**: Modify text directly in the HTML
3. **Images**: Replace placeholder URLs with actual images
4. **Fonts**: Change Google Fonts links in the `<head>`

## 🔒 Security

- No external dependencies beyond CDN resources
- No data collection or tracking
- All links are dummy/placeholder links

## 📄 License

For concept purposes only. © 2026 Singapore American School concept.

## 🤝 Contributing

This is a concept/demonstration project. Feel free to use it as a template for your own projects.