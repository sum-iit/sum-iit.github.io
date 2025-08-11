// This file controls ALL your pages - edit here to change everything!

const siteConfig = {
    name: "Sumit Sah",                              // ← Change your name
    title: "Senior Research Fellow",              // ← Change your job title  
    affiliation: "Indian Institute of Technology Dharwad, India",             // ← Change your company
    email: "sumit.sah1824@gmail.com",                // ← Change your email
    socialLinks: {
        googleScholar: "https://scholar.google.com/citations?user=your-id",  // ← Your Google Scholar
        linkedin: "https://linkedin.com/in/your-username",                   // ← Your LinkedIn
        youtube: "https://youtube.com/@your-channel"                         // ← Your YouTube
    }
};

// Don't change anything below this line
function createHeader(activePage) {
    const header = document.createElement('header');
    header.className = 'header';
    const container = document.createElement('div');
    container.className = 'container';
    const siteTitle = document.createElement('a');
    siteTitle.href = 'index.html';
    siteTitle.className = 'site-title';
    siteTitle.textContent = siteConfig.name;
    const nav = document.createElement('nav');
    nav.className = 'nav';
    const navigation = [
        { href: "index.html", text: "About", id: "about" },
        { href: "research.html", text: "Research", id: "research" },
        { href: "group.html", text: "Group", id: "group" },
        { href: "teaching.html", text: "Teaching", id: "teaching" },
        { href: "activities.html", text: "Activities", id: "activities" },
        { href: "blog.html", text: "Blog", id: "blog" },
        { href: "contact.html", text: "Contact", id: "contact" }
    ];
    navigation.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'nav-link';
        link.textContent = item.text;
        if (item.id === activePage) link.classList.add('active');
        nav.appendChild(link);
    });
    container.appendChild(siteTitle);
    container.appendChild(nav);
    header.appendChild(container);
    return header;
}

function createProfileSection() {
    const profileSection = document.createElement('div');
    profileSection.className = 'profile-section';
    const imageLink = document.createElement('a');
    imageLink.href = 'index.html';
    imageLink.className = 'profile-image-link';
    const imageDiv = document.createElement('div');
    imageDiv.className = 'profile-image';
    const img = document.createElement('img');
    img.src = 'assets/images/profile.jpg';
    img.alt = siteConfig.name;
    img.onerror = function() { this.style.display = 'none'; this.nextElementSibling.style.display = 'flex'; };
    const placeholder = document.createElement('div');
    placeholder.className = 'profile-placeholder';
    placeholder.textContent = 'SS';
    imageDiv.appendChild(img);
    imageDiv.appendChild(placeholder);
    imageLink.appendChild(imageDiv);
    const profileInfo = document.createElement('div');
    profileInfo.className = 'profile-info';
    const nameLink = document.createElement('a');
    nameLink.href = 'index.html';
    nameLink.className = 'profile-name-link';
    const nameHeading = document.createElement('h2');
    nameHeading.className = 'profile-name';
    nameHeading.textContent = siteConfig.name;
    nameLink.appendChild(nameHeading);
    const title = document.createElement('p');
    title.className = 'profile-title';
    title.textContent = siteConfig.title;
    const affiliation = document.createElement('p');
    affiliation.className = 'profile-affiliation';
    affiliation.textContent = siteConfig.affiliation;
    const socialDiv = document.createElement('div');
    socialDiv.className = 'profile-social';
    const socialLinks = [
        { url: siteConfig.socialLinks.googleScholar, icon: '🎓', text: 'Google Scholar' },
        { url: siteConfig.socialLinks.linkedin, icon: '💼', text: 'LinkedIn' },
        { url: siteConfig.socialLinks.youtube, icon: '📺', text: 'YouTube' }
    ];
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link';
        link.textContent = `${social.icon} ${social.text}`;
        socialDiv.appendChild(link);
    });
    const email = document.createElement('a');
    email.href = `mailto:${siteConfig.email}`;
    email.className = 'profile-email';
    email.textContent = siteConfig.email;
    profileInfo.appendChild(nameLink);
    profileInfo.appendChild(title);
    profileInfo.appendChild(affiliation);
    profileInfo.appendChild(socialDiv);
    profileInfo.appendChild(email);
    profileSection.appendChild(imageLink);
    profileSection.appendChild(profileInfo);
    return profileSection;
}

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const pageId = currentPage === 'index' ? 'about' : currentPage;
    const header = createHeader(pageId);
    document.body.insertBefore(header, document.body.firstChild);
    const existingProfile = document.querySelector('.profile-section');
    if (existingProfile) {
        const newProfile = createProfileSection();
        existingProfile.parentNode.replaceChild(newProfile, existingProfile);
    }
});
