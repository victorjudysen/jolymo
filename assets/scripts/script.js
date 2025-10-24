// ===================================
// JAVASCRIPT FOR JOLYMO LOGISTICS
// Author: Jolymo Logistics Company Limited
// Description: Interactive features & form validation
// ===================================

// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu icon
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ===================================
// STICKY NAVBAR EFFECT
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth scrolling if href is not just '#'
        if (href !== '#' && href.length > 1) {
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// CONTACT FORM VALIDATION & SUBMISSION
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate Name
        if (name === '') {
            showError('nameError', 'Please enter your full name.');
            isValid = false;
        } else if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters long.');
            isValid = false;
        }
        
        // Validate Email
        if (email === '') {
            showError('emailError', 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }
        
        // Validate Phone (optional but if provided, must be valid)
        if (phone !== '' && !isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number.');
            isValid = false;
        }
        
        // Validate Message
        if (message === '') {
            showError('messageError', 'Please enter your message.');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters long.');
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            submitForm();
        }
    });
}

// ===================================
// HELPER FUNCTIONS FOR FORM VALIDATION
// ===================================

/**
 * Display error message for a form field
 * @param {string} elementId - ID of the error message element
 * @param {string} message - Error message to display
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Add error styling to input
        const inputId = elementId.replace('Error', '');
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.style.borderColor = '#e74c3c';
        }
    }
}

/**
 * Clear all error messages
 */
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
    
    // Reset input border colors
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.borderColor = '#E0E0E0';
    });
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidPhone(phone) {
    // Allow various phone formats including international
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(phone) && cleanPhone.length >= 10;
}

/**
 * Submit the contact form
 */
function submitForm() {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('formStatus');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Create FormData object
    const formData = new FormData(contactForm);
    
    // Submit form using Fetch API
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success
            showFormStatus('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
            contactForm.reset();
        } else {
            // Error from server
            return response.json().then(data => {
                if (data.errors) {
                    const errorMessages = data.errors.map(error => error.message).join(', ');
                    showFormStatus('error', `Error: ${errorMessages}`);
                } else {
                    showFormStatus('error', 'Oops! There was a problem sending your message. Please try again.');
                }
            });
        }
    })
    .catch(error => {
        // Network or other error
        console.error('Form submission error:', error);
        showFormStatus('error', 'Oops! There was a problem sending your message. Please check your internet connection and try again.');
    })
    .finally(() => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
}

/**
 * Display form submission status message
 * @param {string} type - 'success' or 'error'
 * @param {string} message - Status message to display
 */
function showFormStatus(type, message) {
    const formStatus = document.getElementById('formStatus');
    
    if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = 'form-status ' + type;
        formStatus.style.display = 'block';
        
        // Scroll to status message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide status message after 8 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 8000);
    }
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
// Add fade-in animations when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all service cards, feature items, and value cards
    const animatedElements = document.querySelectorAll(
        '.service-card, .feature-item, .value-card, .mission-vision-card, .why-about-item, .contact-info-card, .faq-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ===================================
// FORM INPUT REAL-TIME VALIDATION
// ===================================
// Provide immediate feedback as user types
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Validate name on blur
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            const name = this.value.trim();
            if (name === '') {
                showError('nameError', 'Please enter your full name.');
            } else if (name.length < 2) {
                showError('nameError', 'Name must be at least 2 characters long.');
            } else {
                document.getElementById('nameError').textContent = '';
                this.style.borderColor = '#4CAF50';
            }
        });
        
        // Clear error on focus
        nameInput.addEventListener('focus', function() {
            document.getElementById('nameError').textContent = '';
            this.style.borderColor = '#EB824A';
        });
    }
    
    // Validate email on blur
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email === '') {
                showError('emailError', 'Please enter your email address.');
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address.');
            } else {
                document.getElementById('emailError').textContent = '';
                this.style.borderColor = '#4CAF50';
            }
        });
        
        emailInput.addEventListener('focus', function() {
            document.getElementById('emailError').textContent = '';
            this.style.borderColor = '#EB824A';
        });
    }
    
    // Validate phone on blur (optional field)
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            const phone = this.value.trim();
            if (phone !== '' && !isValidPhone(phone)) {
                showError('phoneError', 'Please enter a valid phone number.');
            } else if (phone !== '') {
                document.getElementById('phoneError').textContent = '';
                this.style.borderColor = '#4CAF50';
            }
        });
        
        phoneInput.addEventListener('focus', function() {
            document.getElementById('phoneError').textContent = '';
            this.style.borderColor = '#EB824A';
        });
    }
    
    // Validate message on blur
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const message = this.value.trim();
            if (message === '') {
                showError('messageError', 'Please enter your message.');
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long.');
            } else {
                document.getElementById('messageError').textContent = '';
                this.style.borderColor = '#4CAF50';
            }
        });
        
        messageInput.addEventListener('focus', function() {
            document.getElementById('messageError').textContent = '';
            this.style.borderColor = '#EB824A';
        });
    }
}

// ===================================
// PAGE LOAD ANIMATION
// ===================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// CONSOLE MESSAGE (for developers)
// ===================================
console.log('%cJolymo Logistics Company Limited', 'color: #002B5B; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed with ❤️ for professional logistics services', 'color: #EB824A; font-size: 12px;');
