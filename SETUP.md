# Quick Setup Guide - Jolymo Logistics Website

## ⚡ Quick Start (3 Steps)

### Step 1: Set Up Contact Form
1. Visit https://formspree.io and create a free account
2. Create a new form and copy your form ID
3. Open `contact.html` and find line 88
4. Replace `YOUR_FORM_ID` with your actual Formspree ID
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
   ```

### Step 2: Update Contact Information
Replace placeholder contact details in all files:

**Phone Number:** Search for `+255 XX XXX XXXX` and replace with:
- Example: `+255 754 123 456` or `+255 22 123 4567`

**Address:** Search for "Dar es Salaam, Tanzania" and add full address:
- Example: "123 Samora Avenue, Dar es Salaam, Tanzania"

### Step 3: Launch Website

**Option A - Open in Browser (Easiest):**
- Double-click `index.html`

**Option B - Local Server (Better):**
```powershell
# In PowerShell, navigate to project folder:
cd c:\Users\user\Documents\thisuncle-tech-ltd\jolymo

# Start server with Python:
python -m http.server 8000

# Open: http://localhost:8000
```

## 📋 Pre-Launch Checklist

- [ ] Updated Formspree form ID in contact.html
- [ ] Replaced all phone number placeholders
- [ ] Added complete business address
- [ ] Tested contact form submission
- [ ] Checked all pages on mobile device
- [ ] Verified navigation works on all pages
- [ ] Tested on different browsers (Chrome, Firefox, Safari)
- [ ] Added real Google Maps location (optional)

## 🚀 Deploy to Live Server

### GitHub Pages (Free & Easy)
```powershell
# Initialize git repository
git init
git add .
git commit -m "Initial commit - Jolymo Logistics website"

# Create repository on GitHub, then:
git remote add origin https://github.com/USERNAME/jolymo-website.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Upload via FTP
1. Connect to your web hosting via FTP (FileZilla, etc.)
2. Upload all files to `public_html` or `www` folder
3. Ensure `index.html` is in the root directory

## 🎨 Common Customizations

### Change Colors
Edit `style.css` lines 18-22:
```css
:root {
    --primary-blue: #002B5B;    /* Change this */
    --accent-orange: #EB824A;   /* Change this */
}
```

### Add Logo Image
Replace text logo in all HTML files (around line 18):
```html
<div class="logo">
    <a href="index.html">
        <img src="logo.png" alt="Jolymo Logistics" height="50">
    </a>
</div>
```

### Add Real Images
Replace icon placeholders with images:
```html
<!-- Before: -->
<div class="service-icon">📦</div>

<!-- After: -->
<img src="images/customs-clearing.jpg" alt="Customs Clearing">
```

## 🐛 Troubleshooting

**Problem:** Contact form not working
- **Solution:** Check if Formspree ID is correct in contact.html

**Problem:** Mobile menu not opening
- **Solution:** Ensure script.js is properly linked at bottom of HTML files

**Problem:** Styles not loading
- **Solution:** Verify style.css is in the same folder as HTML files

**Problem:** Map not showing
- **Solution:** Replace iframe src with your actual Google Maps embed code

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review code comments for explanations
- Contact: info@jolymo.co.tz

---

**Website is ready to go live! 🎉**
