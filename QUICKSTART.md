# 🚀 Quick Start Guide - Jolymo Logistics Website

## ✅ What's Been Created

Your complete website is ready with:
- ✅ **home.html** - Modern homepage with hero, services, testimonials
- ✅ **about.html** - Company story, mission, values, team
- ✅ **services.html** - 4 detailed service offerings
- ✅ **contact.html** - Contact form, info, and map placeholder
- ✅ **main.css** - Complete styling with scrolling navbar
- ✅ **main.js** - All interactive features

## 🎨 New Design Features

### Color Scheme
- **Primary:** #004E98 (Deep Blue)
- **Accent:** #F2A007 (Warm Gold)
- **Background:** #F7F7F7 (Light Gray)

### Special Features
1. **Scrolling Navbar** - Starts transparent, becomes white on scroll
2. **Responsive Design** - Works on all devices
3. **Form Validation** - Real-time feedback
4. **Smooth Animations** - Fade-in effects

## 🌐 How to View

### Option 1: Direct Open
Simply double-click `home.html` in your file explorer

### Option 2: Local Server (Recommended)
```powershell
# In PowerShell, navigate to your project folder:
cd C:\Users\user\Documents\thisuncle-tech-ltd\jolymo

# Start a server:
python -m http.server 8000

# Visit: http://localhost:8000/home.html
```

## 📝 Next Steps - Customize Your Site

### 1. Update Contact Information
In ALL HTML files, replace:
- `+255 XXX XXX XXX` with actual phone numbers
- Update company address if needed

### 2. Add Google Maps
In `contact.html`, find the map placeholder and replace with:
```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL" 
    width="100%" 
    height="400" 
    style="border:0; border-radius: 12px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```
Get your map URL from: https://www.google.com/maps

### 3. Update Team Photos & Info
In `about.html`, update the leadership team section with:
- Actual names
- Real titles
- Professional photos
- Contact details

### 4. Add Social Media Links
In the footer of all pages, update:
```html
<a href="YOUR_FACEBOOK_URL">...</a>
<a href="YOUR_TWITTER_URL">...</a>
<a href="YOUR_LINKEDIN_URL">...</a>
```

### 5. Test the Contact Form
The form currently uses `mailto:`. For production, you may want:
- Email service (Formspree, EmailJS)
- Backend API
- Contact form plugin

## 🎯 Key Navigation

| Page | URL | Purpose |
|------|-----|---------|
| Home | home.html | Landing page |
| About | about.html | Company info |
| Services | services.html | Service details |
| Contact | contact.html | Get in touch |

## 📱 Mobile Testing

Test on different devices:
- Open browser DevTools (F12)
- Click "Toggle Device Toolbar" (Ctrl+Shift+M)
- Test on iPhone, iPad, Android

## 🔧 Common Customizations

### Change Logo
Replace `assets/images/logo.png` with your logo (recommended size: 50px height)

### Update Hero Image
In `home.html`, change:
```html
background: ... url('assets/images/YOUR-IMAGE.jpg')
```

### Modify Colors
Edit `main.css` CSS variables:
```css
:root {
    --primary-blue: #004E98;  /* Change this */
    --accent-gold: #F2A007;   /* And this */
}
```

## 🚨 Important Notes

1. **Email Forms:** Currently uses mailto: - may open email client
2. **Images:** All images are from your assets/images/ folder
3. **Responsive:** Test on mobile devices before deploying
4. **Browser Support:** Works on modern browsers (Chrome, Firefox, Safari, Edge)

## 📤 Deploy to Web

### Option 1: GitHub Pages (Free)
```bash
git add .
git commit -m "Complete website rebuild"
git push

# Enable GitHub Pages in repository settings
# Your site will be at: https://victorjudysen.github.io/jolymo/home.html
```

### Option 2: Netlify (Free)
1. Drag and drop your folder to netlify.com
2. Your site is live in seconds!

### Option 3: Traditional Hosting
Upload all files via FTP to your web host

## 🎉 You're Ready!

Your professional logistics website is complete and ready to launch. All 4 pages are fully functional with:
- ✅ Modern design
- ✅ Mobile responsive
- ✅ Scrolling navbar
- ✅ Contact form
- ✅ SEO-friendly structure

Need changes? Just edit the HTML files directly - no build process needed!

---
**Questions?** Contact info@jolymo.co.tz
