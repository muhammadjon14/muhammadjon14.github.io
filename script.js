// Portfolio Website JavaScript
// Handles theme toggle and language switching functionality

class PortfolioApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.currentLanguage = localStorage.getItem('language') || 'en';
        
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupLanguageSwitching();
        this.setupEventListeners();
        this.applyInitialSettings();
    }

    // Theme Management
    setupTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon(themeIcon);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        const themeIcon = document.querySelector('.theme-icon');
        this.updateThemeIcon(themeIcon);
        
        // Add animation effect
        this.addThemeTransitionEffect();
    }

    updateThemeIcon(icon) {
        if (this.currentTheme === 'dark') {
            icon.textContent = '☀️';
            icon.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.textContent = '🌙';
            icon.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    addThemeTransitionEffect() {
        // Add a temporary class for smooth transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Language Management
    setupLanguageSwitching() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                this.switchLanguage(selectedLang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Update all text content
        this.updateTextContent(lang);
        
        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Add language transition effect
        this.addLanguageTransitionEffect();
    }

    updateTextContent(lang) {
        const elementsWithData = document.querySelectorAll('[data-en][data-uz]');
        
        elementsWithData.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    addLanguageTransitionEffect() {
        // Add fade effect during language change
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.2s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 200);
        }, 100);
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + D for dark mode toggle
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
            
            // Ctrl/Cmd + L for language toggle
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                const newLang = this.currentLanguage === 'en' ? 'uz' : 'en';
                this.switchLanguage(newLang);
            }
        });

        // Accessibility improvements
        this.setupAccessibility();
    }

    setupAccessibility() {
        // Add ARIA labels and roles
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.setAttribute('role', 'button');
        themeToggle.setAttribute('tabindex', '0');
        
        // Handle Enter key on theme toggle
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Add focus management
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.setAttribute('role', 'button');
            button.setAttribute('tabindex', '0');
        });
    }

    // Apply initial settings
    applyInitialSettings() {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Apply saved language
        this.updateTextContent(this.currentLanguage);
        document.documentElement.setAttribute('lang', this.currentLanguage);
        
        // Set active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${this.currentLanguage}"]`).classList.add('active');
        
        // Update theme icon
        const themeIcon = document.querySelector('.theme-icon');
        this.updateThemeIcon(themeIcon);
    }

    // Utility methods
    getCurrentTheme() {
        return this.currentTheme;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Smooth scroll for better UX
    smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Add loading animation
    addLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(loader);
        
        setTimeout(() => {
            loader.remove();
        }, 1000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    
    // Add some interactive enhancements
    addInteractiveEnhancements();
});

// Additional interactive enhancements
function addInteractiveEnhancements() {
    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Add click animation to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.98)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
        });
    });

    // Add parallax effect to hero section (subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add CSS for loading animation
const loadingStyles = `
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007aff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

[data-theme="dark"] .loading-overlay {
    background: rgba(0, 0, 0, 0.9);
}

[data-theme="dark"] .loading-spinner {
    border-color: #38383a;
    border-top-color: #0a84ff;
}
`;

// Inject loading styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
