# School Marketing Site

A static, reusable marketing site template for schools built with HTML, Tailwind CSS, and minimal vanilla JavaScript. Designed to be easily duplicated and customized for different schools by simply editing a configuration file.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG compliant with keyboard navigation, ARIA attributes, and skip links
- ⚡ **Performance Optimized**: Lazy loading, optimized CSS, minimal JavaScript
- 🔧 **Config-Driven**: Easy customization through `config.json`
- 🚀 **No Heavy Frameworks**: Pure HTML, Tailwind CSS, and vanilla JS (< 200 LOC)
- 🎯 **Progressive Enhancement**: Core content works with JavaScript disabled

## Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework with JIT compilation
- **Vanilla JavaScript**: Minimal JS for interactions (~180 LOC)
- **PostCSS**: For CSS processing

## Project Structure

```
Schools/
├── site/                    # Main website files
│   ├── index.html          # Home page with hero, stats, programs, events
│   ├── about.html          # About page with mission, history, leadership
│   ├── academics.html      # Academics page with programs and faculty
│   ├── admissions.html     # Admissions page with process, tuition, aid
│   ├── assets/
│   │   └── images/         # Optimized images
│   ├── css/
│   │   ├── input.css       # Tailwind source file
│   │   └── styles.css      # Compiled CSS (generated)
│   └── js/
│       └── main.js         # Vanilla JS for interactions
├── config.json.sample      # Sample configuration file
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # NPM dependencies and scripts
└── README.md              # This file
```

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Schools
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the CSS**:
   ```bash
   npm run build:css
   ```

4. **Open in browser**:
   Open `site/index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   cd site && python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server site -p 8000
   ```

5. **Visit**: Navigate to `http://localhost:8000`

## Development

### Watch Mode

To automatically rebuild CSS when you make changes:

```bash
npm run watch:css
```

### Build for Production

```bash
npm run build
```

This will generate an optimized, minified CSS file.

## Customization

### How to Duplicate for Another School

1. **Copy `config.json.sample` to `config.json`**:
   ```bash
   cp config.json.sample config.json
   ```

2. **Edit `config.json`** with your school's information:
   - Site title and description
   - Navigation links
   - Hero content and CTAs
   - Program cards
   - Events
   - Stats
   - Footer information
   - Contact details
   - Social media links

3. **Replace images** in `site/assets/images/`:
   - logo.svg
   - hero.jpg
   - academics.jpg
   - admissions.jpg
   - student-life.jpg
   - event1.jpg, event2.jpg, event3.jpg

4. **Update colors** in `tailwind.config.js` if needed:
   ```js
   theme: {
     extend: {
       colors: {
         primary: { /* your colors */ },
         secondary: { /* your colors */ }
       }
     }
   }
   ```

5. **Rebuild CSS**:
   ```bash
   npm run build:css
   ```

### Content Updates

Most content can be updated directly in the HTML files:
- **Header & Footer**: These are currently inline in each HTML file. For easier maintenance, consider using a build tool to include partials.
- **Page Content**: Edit the content within each HTML page as needed.

## Components

### Header
- Logo and site title
- Main navigation (desktop)
- Mobile menu toggle
- Top bar with quick links

### Mobile Navigation
- Off-canvas menu
- Accessible with keyboard
- ARIA attributes for screen readers
- Focus trap

### Hero Section
- Large background image/gradient
- Headline and subheading
- Dual CTAs (primary and secondary)
- Reveal animation on load

### Stats Strip
- Four-column statistics
- Staggered reveal animations

### Program Cards
- Three-column grid (responsive)
- Image, title, description, and CTA
- Hover effects
- Reveal animations

### News & Events Carousel
- Auto-rotating carousel
- Previous/Next controls
- Dot navigation
- Keyboard accessible
- Pause on hover/focus
- ARIA attributes

### Footer
- Multi-column sitemap
- Contact information
- Newsletter signup (placeholder)
- Social media links

## JavaScript Features

All JavaScript functionality is in `site/js/main.js` (~180 LOC):

1. **Mobile Menu Toggle**: Off-canvas navigation with keyboard support
2. **IntersectionObserver Animations**: Reveal elements as they enter viewport
3. **Accessible Carousel**: Auto-rotating with manual controls, keyboard navigation
4. **Lazy Loading**: Images load as they approach viewport
5. **Active Navigation**: Highlights current page in navigation

## Accessibility Features

- ✅ Skip link for keyboard navigation
- ✅ Semantic HTML5 elements
- ✅ ARIA attributes for interactive components
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Screen reader friendly
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Form labels

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Preconnect for fonts
- ✅ Minified CSS
- ✅ Small JavaScript footprint
- ✅ Efficient animations using CSS transforms
- ✅ Tailwind CSS purging (removes unused styles)

## Testing Checklist

### Lighthouse Score
Target: >= 90 on mobile

Run Lighthouse in Chrome DevTools:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" device
4. Run audit

### Manual Testing

- [ ] **Keyboard Navigation**: Tab through all interactive elements
- [ ] **Mobile Menu**: Opens/closes properly, focus is trapped
- [ ] **Carousel**: Auto-rotates, controls work, keyboard accessible
- [ ] **Animations**: Reveal animations trigger on scroll
- [ ] **Lazy Loading**: Images load as you scroll
- [ ] **Responsive**: Test on mobile, tablet, and desktop sizes
- [ ] **No-JS Mode**: Core content is accessible without JavaScript
- [ ] **Screen Reader**: Test with NVDA or VoiceOver

### Browser Testing

Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Mobile (last 2 versions)

## SEO Considerations

The site includes:
- Meta tags (title, description)
- Open Graph placeholders
- Semantic HTML
- Proper heading hierarchy

**Recommended additions**:
- Create `robots.txt`
- Add XML sitemap
- Configure Open Graph images
- Add structured data (JSON-LD)

### Example robots.txt

```
User-agent: *
Allow: /
Sitemap: https://yourschool.edu/sitemap.xml
```

## Deployment

### Static Hosting

This site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `site/` folder
- **Vercel**: Import the repository
- **GitHub Pages**: Push to a branch and enable Pages
- **AWS S3**: Upload files to an S3 bucket
- **Cloudflare Pages**: Connect your repository

### Build Before Deploy

Always run the build command before deploying:

```bash
npm run build
```

Then deploy the entire `site/` directory.

## License

MIT License - Feel free to use this template for your school!

## Support

For issues or questions, please open an issue in the GitHub repository.

## Credits

Built with:
- [Tailwind CSS](https://tailwindcss.com/)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- Icons from [Heroicons](https://heroicons.com/)