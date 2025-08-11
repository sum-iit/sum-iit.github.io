# Sumit Sah - Personal Website

A professional personal website built for GitHub Pages deployment.

## Directory Structure

```
sumitsah.github.io/
├── index.html              # Main page (About)
├── research.html           # Research page
├── projects.html           # Projects page
├── experience.html         # Experience page
├── blog.html              # Blog page
├── contact.html           # Contact page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Main JavaScript file
│   ├── images/
│   │   └── profile.jpg    # Your profile photo (add this)
│   └── files/
│       └── resume.pdf     # Your resume (add this)
└── README.md              # This file
```

## Setup Instructions

1. **Create Repository**
   - Create a new repository on GitHub named `sumitsah.github.io`
   - Make sure it's public

2. **Upload Files**
   - Upload all the HTML files to the root directory
   - Create the `assets` folder structure
   - Upload the CSS and JS files to their respective folders

3. **Add Your Content**
   - Replace placeholder content with your actual information
   - Add your profile photo to `assets/images/profile.jpg`
   - Add your resume to `assets/files/resume.pdf`
   - Update contact information and links

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

5. **Your site will be live at**: `https://sumitsah.github.io`

## Customization Guide

### Adding Your Profile Photo
1. Add your photo to `assets/images/profile.jpg`
2. In each HTML file, uncomment this line:
   ```html
   <img src="assets/images/profile.jpg" alt="Sumit Sah">
   ```
3. Comment out or remove the placeholder div:
   ```html
   <!-- <div class="profile-placeholder">SS</div> -->
   ```

### Updating Content
- **Personal Information**: Update name, title, and bio in all HTML files
- **Contact Details**: Change email addresses and social media links
- **Experience**: Replace with your actual work experience
- **Projects**: Add your real projects with correct GitHub links
- **Skills**: Update the skills section with your technologies

### Customizing Colors
Edit the CSS variables in `assets/css/style.css`:
- Primary blue: `#64b5f6`
- Background gradient: `#1a1a2e`, `#16213e`, `#0f3460`
- Text colors: `#e0e0e0`, `#b0b0b0`, `#90a4ae`

### Adding Blog Posts
Create individual HTML files for blog posts and link them from `blog.html`:
```html
<a href="blog/post-title.html" class="blog-title">Your Post Title</a>
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Professional dark color scheme
- **Smooth Animations**: Hover effects and transitions
- **Mobile Menu**: Collapsible navigation for mobile devices
- **SEO Friendly**: Proper HTML structure and meta tags
- **Fast Loading**: Optimized CSS and JavaScript

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Development

To make changes:
1. Edit the HTML, CSS, or JS files
2. Test locally by opening HTML files in a browser
3. Commit and push changes to GitHub
4. Changes will automatically deploy to GitHub Pages

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
