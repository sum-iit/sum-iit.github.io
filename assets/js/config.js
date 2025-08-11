// assets/js/config.js - EDIT THIS FILE TO UPDATE ALL PAGES

const SITE_CONFIG = {
    // Personal Information - EDIT THESE VALUES
    name: "Sumit Sah",
    title: "Senior Reasearch Fellow", 
    affiliation: "Indian Institute of Technology Dharwad, India",
    email: "sumit.sah1824@gmail.com",
    
    // Social Media Links - EDIT THESE URLs
    social: {
        googleScholar: "https://scholar.google.com/citations?user=your-google-scholar-id",
        linkedin: "https://linkedin.com/in/your-linkedin-username", 
        youtube: "https://youtube.com/@your-youtube-channel"
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
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
    
    // Create header
    const headerHTML = `
        <header class="header">
            <div class="container">
                <a href="index.html" class="site-title">${SITE_CONFIG.name}</a>
                <nav class="nav">
                    ${SITE_CONFIG.navigation.map(item => 
                        `<a href="${item.href}" class="nav-link ${item.page === currentPage ? 'active' : ''}">${item.text}</a>`
                    ).join('')}
                </nav>
            </div>
        </header>
    `;
    
    // Create profile section
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
                        🎓 Google Scholar
                    </a>
                    <a href="${SITE_CONFIG.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                        💼 LinkedIn
                    </a>
                    <a href="${SITE_CONFIG.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-link" title="YouTube">
                        📺 YouTube
                    </a>
                </div>
                <a href="mailto:${SITE_CONFIG.email}" class="profile-email">${SITE_CONFIG.email}</a>
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
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadTemplate);
