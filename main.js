/* ========================================
   JOLYMO LOGISTICS - MAIN JAVASCRIPT
   Scrolling Navbar & Interactive Features
   ======================================== */

// ========================================
// SCROLLING NAVBAR BEHAVIOR
// ========================================
/**
 * Implements smooth navbar transition from transparent (connected to hero)
 * to white background with shadow (detached) on scroll.
 */
function initScrollingNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Check scroll position on page load
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        // Threshold: Add 'scrolled' class when user scrolls 50px down
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
/**
 * Toggle mobile navigation menu on hamburger icon click
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            // Toggle active class on nav links
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon to X
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ========================================
/**
 * Highlights the current page in the navigation menu
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
/**
 * Smooth scrolling for internal page links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// CONTACT FORM VALIDATION & SUBMISSION
// ========================================
/**
 * Validates and handles contact form submission
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return; // Exit if no contact form on page
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const fullName = document.getElementById('full-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Validation flags
        let isValid = true;
        
        // Clear previous errors
        clearErrors();
        
        // Validate Full Name
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full name is required');
            isValid = false;
        } else if (fullName.value.trim().length < 2) {
            showError(fullName, 'Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Phone (optional but format check if provided)
        if (phone.value.trim() !== '') {
            const phonePattern = /^[\d\s\+\-\(\)]+$/;
            if (!phonePattern.test(phone.value) || phone.value.trim().length < 10) {
                showError(phone, 'Please enter a valid phone number');
                isValid = false;
            }
        }
        
        // Validate Subject
        if (subject.value.trim() === '') {
            showError(subject, 'Subject is required');
            isValid = false;
        }
        
        // Validate Message
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // If valid, submit form
        if (isValid) {
            submitContactForm(fullName.value, email.value, phone.value, subject.value, message.value);
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            removeError(this);
        });
    });
}

/**
 * Show error message for a form field
 */
function showError(field, message) {
    field.classList.add('error');
    
    // Create or update error message
    let errorDiv = field.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        field.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

/**
 * Remove error message from a field
 */
function removeError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

/**
 * Clear all form errors
 */
function clearErrors() {
    document.querySelectorAll('.error').forEach(field => {
        field.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.remove();
    });
}

/**
 * Validate individual field
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name || field.id;
    
    if (field.hasAttribute('required') && value === '') {
        showError(field, `${fieldName.replace('-', ' ')} is required`);
        return false;
    }
    
    removeError(field);
    return true;
}

/**
 * Submit contact form data to info@jolymo.co.tz
 */
function submitContactForm(name, email, phone, subject, message) {
    // Create mailto link with form data
    const mailtoLink = `mailto:info@jolymo.co.tz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}`
    )}`;
    
    // Show success message
    const formAlert = document.createElement('div');
    formAlert.className = 'form-alert success';
    formAlert.innerHTML = `
        <strong>Success!</strong> Your message has been prepared. Click OK to send via your email client.
    `;
    
    const contactForm = document.querySelector('.contact-form');
    contactForm.insertBefore(formAlert, contactForm.firstChild);
    
    // Scroll to alert
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Open mailto link
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1500);
    
    // Reset form
    setTimeout(() => {
        contactForm.reset();
        formAlert.remove();
    }, 3000);
}

// ========================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ========================================
/**
 * Animate elements when they come into viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.service-card, .feature-card, .testimonial-card, .section-title, .section-subtitle'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add fade-in class styles dynamically
function addFadeInStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
/**
 * Show/hide back to top button and handle smooth scroll to top
 */
function initBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.setAttribute('title', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// PAGE LOAD INITIALIZATION
// ========================================
/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scrolling navbar (CRITICAL FEATURE)
    initScrollingNavbar();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Set active navigation link
    setActiveNavLink();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize contact form (if exists on page)
    initContactForm();
    
    // Initialize scroll animations
    addFadeInStyles();
    initScrollAnimations();
    
    // Initialize back to top button
    initBackToTop();
    
    console.log('✓ Jolymo Logistics website initialized');
});

// ========================================
// WINDOW LOAD - ADDITIONAL SETUP
// ========================================
window.addEventListener('load', function() {
    // Recheck navbar state after full page load
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
