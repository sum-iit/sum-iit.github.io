# Sumit Sah - Professional Website

A clean, professional personal website with a template system that allows you to update all pages by editing just one file.

## 🌐 **Live Website**
Your website will be available at: `https://sum-iit.github.io`

## ✨ **Key Features**

- **🎯 One-File Updates**: Change your name, email, and social links in one place - updates all pages automatically
- **🎨 Professional Design**: Clean, academic-style layout inspired by surbhigoel.com
- **📱 Mobile Responsive**: Looks great on desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Minimal, optimized code for quick performance
- **🔗 Social Integration**: Google Scholar, LinkedIn, and YouTube links
- **🚀 Easy Maintenance**: No more copy-paste errors or duplicate content

## 📁 **File Structure**

```
sum-iit.github.io/
├── index.html              # About page
├── research.html           # Research & publications
├── group.html              # Team & collaborations
├── teaching.html           # Teaching & mentorship
├── activities.html         # Professional activities
├── blog.html              # Blog & articles
├── contact.html           # Contact information
├── README.md              # This file
└── assets/
    ├── css/
    │   └── style.css      # Main stylesheet
    ├── js/
    │   ├── config.js      # ⭐ EDIT THIS FILE TO UPDATE ALL PAGES
    │   └── script.js      # Interactive functionality
    ├── images/
    │   └── profile.jpg    # Your profile photo (add this)
    └── files/
        └── resume.pdf     # Your resume/CV (add this)
```

## 🚀 **Quick Setup**

### 1. **Create GitHub Repository**
- Repository name: `sum-iit.github.io` (must be exact)
- Make it public

### 2. **Upload Files**
Upload all files maintaining the folder structure above.

### 3. **Add Your Content**
- Add your profile photo: `assets/images/profile.jpg`
- Add your resume: `assets/files/resume.pdf`
- Edit `assets/js/config.js` with your information

### 4. **Enable GitHub Pages**
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

Your site will be live in 5-10 minutes!

## 🔧 **Customization**

### **🎯 One File Controls Everything**

Edit **ONLY** this section in `assets/js/config.js`:

```javascript
const SITE_CONFIG = {
    // Personal Information - EDIT THESE VALUES
    name: "Sumit Sah",                              // ← Your name
    title: "Senior Software Engineer",              // ← Your job title
    affiliation: "Tech Innovation Lab",             // ← Your company/organization
    email: "sumit.sah@example.com",                // ← Your email address
    
    // Social Media Links - EDIT THESE URLs
    social: {
        googleScholar: "https://scholar.google.com/citations?user=your-id",
        linkedin: "https://linkedin.com/in/your-username", 
        youtube: "https://youtube.com/@your-channel"
    }
};
```

### **What Updates Automatically:**
- ✅ Your name in header and profile
- ✅ Job title and affiliation
- ✅ Email address
- ✅ All social media links
- ✅ Navigation menu

### **To Add More Social Links:**
Add to the `social` section in `config.js`:
```javascript
social: {
    googleScholar: "your-url",
    linkedin: "your-url",
    youtube: "your-url",
    twitter: "your-twitter-url",        // ← Add new social link
    github: "your-github-url"           // ← Add another one
}
```

Then update the template code to display them.

## 📝 **Content Management**

### **Page-Specific Content**
Each HTML file contains only its unique content in the `<div class="bio-section">` area. Edit these sections to customize:

- **index.html** - Your bio and background
- **research.html** - Publications and research interests
- **group.html** - Team members and collaborations
- **teaching.html** - Courses and educational activities
- **activities.html** - Professional activities and awards
- **blog.html** - Blog posts and articles
- **contact.html** - Contact information and office hours

### **Adding New Pages**
1. Create new HTML file using the same template structure
2. Add the page to navigation in `config.js`
3. Add unique content in the bio-section

## 🎨 **Design Customization**

### **Colors** (edit in `style.css`):
- Header blue: `#2c5aa0`
- Link blue: `#4a9eff`
- Background: `#000` (black)
- Text: `#fff` (white)

### **Typography**:
- Main font: Inter (loaded from Google Fonts)
- Professional, clean appearance
- Consistent hierarchy

## 📱 **Mobile Responsiveness**

The website automatically adapts to different screen sizes:
- **Desktop**: Two-column layout (profile sidebar + content)
- **Tablet**: Responsive single-column layout
- **Mobile**: Optimized for touch interaction

## 🔍 **SEO & Performance**

- **Clean URLs**: Professional structure
- **Fast Loading**: Minimal CSS and JavaScript
- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Optimized for search engines
- **Mobile-First**: Google-friendly responsive design

## 📊 **Browser Support**

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🛠️ **Development**

### **Local Testing**
1. Download all files
2. Open any HTML file in a browser
3. Test navigation and responsiveness
4. Make changes and refresh to see updates

### **Making Changes**
1. Edit `config.js` for personal information
2. Edit individual HTML files for page content
3. Edit `style.css` for design changes
4. Commit and push to GitHub - changes deploy automatically

## 🎯 **Best Practices**

### **Content Guidelines**
- Keep descriptions professional and concise
- Use consistent formatting across pages
- Update publication dates and information regularly
- Maintain professional tone throughout

### **Image Guidelines**
- **Profile photo**: 500x500px minimum, square aspect ratio
- **High quality**: Professional headshot recommended
- **File format**: JPG or PNG
- **File size**: Under 1MB for fast loading

### **Link Management**
- Test all external links regularly
- Use HTTPS URLs when available
- Update social media links when profiles change

## 🔒 **Security & Privacy**

- No sensitive data stored in code
- External links open in new tabs
- Professional email only (no personal information)
- Social links under your control

## 📚 **Troubleshooting**

### **Common Issues**

**Double Headers Appearing**
- Remove old header HTML from files
- Ensure only `config.js` and `script.js` are loaded

**Profile Photo Not Showing**
- Check file path: `assets/images/profile.jpg`
- Verify image file exists and is named correctly
- Fallback initials will show if image fails

**Social Links Not Working**
- Verify URLs are complete (include https://)
- Check for typos in `config.js`
- Ensure proper URL format

**Pages Not Loading**
- Check file names match navigation links
- Verify all files uploaded to GitHub
- Check GitHub Pages is enabled

## 📞 **Support**

For technical issues:
1. Check this README first
2. Verify file structure matches the guide
3. Test locally before deploying
4. Check browser console for JavaScript errors

## 📄 **License**

This project is open source and available under the MIT License.

---

## 🎉 **You're All Set!**

Your professional website is now ready to deploy. Remember:
- **Edit once in `config.js`** - changes everywhere
- **Keep content professional** and up-to-date
- **Test on mobile** devices regularly
- **Update regularly** with new achievements and projects

**Happy coding!** 🚀
