// assets/js/config.js - EDIT THIS FILE TO UPDATE ALL PAGES

const SITE_CONFIG = {
    // Personal Information - EDIT THESE VALUES
    name: "Sumit Sah",
    title: "Visiting Research Student",
    affiliation: "MBZUAI, Abu Dhabi",
    email: "sumit.sah1824@gmail.com",
    
    // Social Media Links - EDIT THESE URLs
    social: {
        googleScholar: "https://scholar.google.com/citations?user=2s4h4y4AAAAJ&hl=en",
        linkedin: "https://linkedin.com/in/sahsumit", 
        youtube: "https://youtube.com/@sumIITDh"
    },
    
    // Navigation Menu - Add/remove pages here
    navigation: [
        { href: "index.html", text: "About", page: "index" },
        { href: "research.html", text: "Research", page: "research" },
        { href: "group.html", text: "Group", page: "group" },
        { href: "teaching.html", text: "Teaching", page: "teaching" },
        { href: "activities.html", text: "Activities", page: "activities" },
        { href: "blog.html", text: "Blog", page: "blog" },
        { href: "contact.html", text: "Contact", page: "contact" }
    ]
};

// Template System - DO NOT EDIT BELOW THIS LINE
function loadTemplate() {
    // Get current page
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    const currentPage = currentFile.replace('.html', '') || 'index';

    // Add home page class for conditional styling
    if (currentPage === 'index' || currentPath === '/' || currentFile === '') {
        document.body.classList.add('home-page');
    }
    document.body.classList.add(`${currentPage}-page`);
    
    // Create header with mobile menu
    const headerHTML = `
        <div class="utility-bar">
            <div class="utility-inner">
                <a class="utility-brand" href="https://mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer">MBZUAI</a>
                <span class="utility-unit">Trustworthy Machine Learning &middot; Optimization &middot; Agentic AI</span>
            </div>
        </div>
        <header class="header">
            <div class="container">
                <a href="index.html" class="site-title">
                    <span class="site-title-main">${SITE_CONFIG.name}</span>
                    <span class="site-title-role">${SITE_CONFIG.title}</span>
                </a>
                <nav class="nav" id="navMenu">
                    ${SITE_CONFIG.navigation.map(item => 
                        `<a href="${item.href}" class="nav-link ${item.page === currentPage ? 'active' : ''}">${item.text}</a>`
                    ).join('')}
                </nav>
                <button class="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-expanded="false" aria-controls="navMenu">Menu</button>
            </div>
        </header>
    `;
    
    // Create profile section (will be hidden on mobile for non-home pages via CSS)
    const profileHTML = `
        <div class="profile-section">
            <a href="index.html" class="profile-image-link">
                <div class="profile-image">
                    <img src="assets/images/profile.jpg" alt="${SITE_CONFIG.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="profile-placeholder">SS</div>
                </div>
            </a>
            <div class="profile-info">
                <a href="index.html" class="profile-name-link">
                    <h2 class="profile-name">${SITE_CONFIG.name}</h2>
                </a>
                <p class="profile-title">${SITE_CONFIG.title}</p>
                <p class="profile-affiliation">${SITE_CONFIG.affiliation}</p>
                <div class="profile-social">
                    <a href="${SITE_CONFIG.social.googleScholar}" target="_blank" rel="noopener noreferrer" class="social-link" title="Google Scholar">
                        Google Scholar
                    </a>
                    <a href="${SITE_CONFIG.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                        LinkedIn
                    </a>
                    <a href="${SITE_CONFIG.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-link" title="YouTube">
                        YouTube
                    </a>
                </div>
                <div class="profile-actions">
                    <a href="mailto:${SITE_CONFIG.email}" class="profile-email">${SITE_CONFIG.email}</a>
                    <a href="assets/files/resume.pdf" target="_blank" rel="noopener noreferrer" class="profile-cv">CV / Resume</a>
                </div>
            </div>
        </div>
    `;
    
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Replace profile section
    const profileContainer = document.querySelector('.profile-section');
    if (profileContainer) {
        profileContainer.outerHTML = profileHTML;
    }
    
    // Insert footer at end of body
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand-block">
                    <a class="footer-kicker footer-link" href="https://mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer">MBZUAI</a>
                    <p class="footer-text">${SITE_CONFIG.name} &middot; ${SITE_CONFIG.affiliation}</p>
                </div>
                <p class="footer-text footer-updated">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Initialize mobile menu functionality
    initializeMobileMenu();
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change hamburger icon
            if (navMenu.classList.contains('active')) {
                mobileMenuBtn.textContent = 'Close';
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenuBtn.textContent = 'Menu';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.textContent = 'Menu';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.textContent = 'Menu';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadTemplate);
