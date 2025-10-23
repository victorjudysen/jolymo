# Jolymo Logistics Company Limited - Website

A professional, mobile-responsive static website for Jolymo Logistics Company Limited, a Tanzanian logistics company.

## 📋 Project Overview

This is a fully functional static website built with HTML, CSS, and JavaScript. It showcases Jolymo Logistics' services, company information, and provides a contact form for customer inquiries.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **SEO-Optimized** - Includes proper meta tags, semantic HTML, and structured content
- **Professional Design** - Corporate color scheme with dark blue (#002B5B), white (#FFFFFF), and orange (#EB824A)
- **Interactive Navigation** - Sticky navbar with mobile hamburger menu
- **Contact Form** - Integrated with Formspree for email submissions
- **Form Validation** - Real-time JavaScript validation for better user experience
- **Smooth Animations** - Fade-in effects and smooth scrolling
- **Accessibility** - Keyboard navigation support and ARIA labels

## 📁 File Structure

```
jolymo/
├── index.html          # Homepage with hero section and service overview
├── about.html          # About Us page with mission, vision, and values
├── services.html       # Detailed services page
├── contact.html        # Contact page with form and map
├── style.css           # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactivity and validation
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser
3. Or right-click and select "Open with" your preferred browser

### Option 2: Use a Local Server (Recommended)

For better testing and development:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser and go to: `http://localhost:8000`

## 📧 Setting Up the Contact Form

The contact form uses **Formspree** to handle submissions. To activate it:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `contact.html` in a text editor
6. Find line 88: `<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
7. Replace `YOUR_FORM_ID` with your actual Formspree form ID
8. Save the file

**Note:** The form will send submissions to `info@jolymo.co.tz` as configured in the hidden field.

## 🎨 Customization

### Colors

The color scheme is defined in CSS variables in `style.css` (lines 18-22):

```css
:root {
    --primary-blue: #002B5B;    /* Main corporate color */
    --accent-orange: #EB824A;   /* Accent/CTA color */
    --white: #FFFFFF;           /* Background color */
    --light-gray: #F5F5F5;      /* Section backgrounds */
    --text-gray: #666666;       /* Body text */
}
```

### Contact Information

Update company contact details in all HTML files:

1. **Phone Number:** Search for `+255 XX XXX XXXX` and replace with actual number
2. **Email:** Already set to `info@jolymo.co.tz`
3. **Address:** Search for "Dar es Salaam, Tanzania" and add full address

### Google Maps

To add a real Google Maps location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `contact.html` (around line 162) with your code

## 📱 Pages Overview

### 1. Home (index.html)
- Hero section with call-to-action
- Services overview with cards
- Why choose us section
- Featured benefits

### 2. About Us (about.html)
- Company overview
- Mission and vision statements
- Core values (6 key values)
- Why partner with us

### 3. Services (services.html)
- Customs Clearing
- Freight Forwarding
- Transportation
- Warehousing & Storage
- Logistics Consultancy
- Industries served

### 4. Contact (contact.html)
- Contact information cards
- Interactive contact form with validation
- Google Maps integration
- FAQ section

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 SEO Features

- Unique meta titles for each page
- Descriptive meta descriptions
- Relevant keywords for Tanzania logistics industry
- Semantic HTML5 structure
- Alt text ready for images (when added)
- Proper heading hierarchy

## 🚀 Performance

- No external dependencies or frameworks
- Minimal CSS and JavaScript
- Fast loading times
- Optimized for mobile networks

## 📋 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Create a Netlify account
2. Drag and drop the project folder
3. Your site will be live instantly with a custom URL

### Traditional Web Hosting
1. Upload all files via FTP/cPanel
2. Ensure `index.html` is in the root directory
3. Configure domain if needed

## ✅ Quality Checklist

- [x] Mobile-responsive design
- [x] SEO-optimized with meta tags
- [x] Accessible navigation
- [x] Form validation
- [x] Cross-browser compatible
- [x] Professional corporate design
- [x] Clean, commented code
- [x] Fast loading performance

## 🛠️ Future Enhancements (Optional)

- Add image gallery for services
- Implement blog section
- Add client testimonials
- Create tracking system page
- Add language switcher (Swahili/English)
- Integrate analytics (Google Analytics)
- Add live chat widget
- Create downloadable service brochure

## 📞 Support

For questions or issues with the website, contact:
- **Email:** info@jolymo.co.tz
- **Phone:** +255 XX XXX XXXX

## 📄 License

© 2025 Jolymo Logistics Company Limited. All rights reserved.

---

**Built with ❤️ for professional logistics services in Tanzania**
