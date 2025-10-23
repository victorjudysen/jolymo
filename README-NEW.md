# Jolymo Logistics Company Limited - Website

## Overview
A modern, responsive website for Jolymo Logistics, a leading clearing and forwarding company in Tanzania. Built with pure HTML, CSS, and vanilla JavaScript.

## 🎨 Design Features

### Color Palette
- **Primary Blue:** #004E98 (Deep Blue)
- **Accent Gold:** #F2A007 (Warm Gold)
- **Neutral Background:** #F7F7F7 (Light Gray)
- **Text:** #333333 (Dark Gray)

### Key Features
- ✅ **Scrolling Navbar:** Transparent on hero, transitions to white with shadow on scroll
- ✅ **Fully Responsive:** Mobile-first design with breakpoints for tablet and desktop
- ✅ **Modern Animations:** Fade-in effects as elements enter viewport
- ✅ **Form Validation:** Real-time validation with helpful error messages
- ✅ **Professional Design:** Clean, corporate aesthetic suitable for logistics industry

## 📄 Pages

### 1. Home (home.html)
- Hero section with background image
- Services preview grid (4 services)
- Why Choose Us section (6 features)
- Client testimonials (3 reviews)
- Call-to-action section
- Footer with social links

### 2. About (about.html)
- Company story with imagery
- Mission & Vision cards
- Core values (6 values with icons)
- Leadership team (4 members)
- Statistics section
- Regional coverage

### 3. Services (services.html)
- 4 detailed service cards:
  - Customs Clearing
  - Freight Forwarding
  - Import/Export Consultancy
  - Warehousing & Distribution
- Simple 4-step process
- Regional coverage (6 countries)

### 4. Contact (contact.html)
- Contact form (sends to info@jolymo.co.tz)
- Contact information cards
- Google Maps placeholder
- Business hours
- Multiple contact methods

## 🚀 Getting Started

### Local Development
1. Clone or download the repository
2. Open `home.html` in your web browser
3. No build process required - pure HTML/CSS/JS

### Testing
```bash
# Start a simple HTTP server (optional)
python -m http.server 8000

# Then visit: http://localhost:8000/home.html
```

## 📁 File Structure
```
jolymo/
├── home.html           # Homepage
├── about.html          # About Us page
├── services.html       # Services page
├── contact.html        # Contact page
├── main.css            # Main stylesheet
├── main.js             # JavaScript functionality
├── assets/
│   └── images/         # All images
│       ├── logo.png
│       ├── cargo-ship.jpeg
│       ├── port.jpg
│       ├── port-2.jpg
│       ├── port-3.jpg
│       ├── containers.jpeg
│       ├── cargo.jpg
│       ├── ship.jpg
│       └── boxes.jpg
└── README-NEW.md       # This file
```

## 🎯 Key Functionality

### Scrolling Navbar
The navbar starts transparent and visually connected to the hero section. As users scroll down 50px, it smoothly transitions to:
- White background
- Subtle shadow effect
- Slightly reduced padding
- Logo size adjustment

### Form Handling
The contact form includes:
- Real-time validation
- Error messages for invalid inputs
- Email submission via mailto: to info@jolymo.co.tz
- Success feedback

### Responsive Design
Breakpoints:
- **Desktop:** > 768px (Full layout)
- **Tablet:** 481px - 768px (Adjusted grids)
- **Mobile:** ≤ 480px (Single column, mobile menu)

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📧 Contact Configuration
The contact form is configured to send emails to:
- **Primary:** info@jolymo.co.tz
- **Support:** support@jolymo.co.tz

## 🎨 Customization

### Changing Colors
Edit CSS variables in `main.css`:
```css
:root {
    --primary-blue: #004E98;
    --accent-gold: #F2A007;
    --neutral-bg: #F7F7F7;
    --text-dark: #333333;
}
```

### Updating Content
- **Text:** Edit HTML files directly
- **Images:** Replace files in `assets/images/`
- **Links:** Update navigation links in each HTML file

## 📱 Mobile Menu
The mobile menu features:
- Hamburger icon animation
- Slide-in navigation
- Touch-friendly tap targets
- Auto-close on link click

## ⚡ Performance
- No external dependencies (no jQuery, Bootstrap, etc.)
- Optimized CSS (single file)
- Minimal JavaScript footprint
- Fast page load times

## 🔧 Technologies Used
- **HTML5:** Semantic markup
- **CSS3:** Modern styling with Flexbox and Grid
- **JavaScript (ES6+):** Vanilla JS, no frameworks
- **SVG Icons:** Scalable vector graphics for icons

## 📝 Notes
- Replace placeholder phone numbers (+255 XXX XXX XXX) with actual numbers
- Add real Google Maps embed code in contact.html
- Update team member photos and details as needed
- Add actual social media links in footer

## 🎉 Credits
Built for Jolymo Logistics Company Limited
© 2024 All rights reserved

---

**Version:** 3.0 (October 2024)
**Last Updated:** October 23, 2025
