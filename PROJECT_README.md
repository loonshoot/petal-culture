# Petal Culture - Wedding & Event Florist Website

## 🌸 Project Overview

A modern, mobile-first website for Petal Culture, a wedding and event florist business founded by Emily. The site is designed to showcase floral services with an elegant, approachable aesthetic inspired by industry leaders while maintaining its own unique brand identity.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
petal-culture/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── navigation/   # Header, Footer
│   │   ├── sections/     # Page sections (Hero, Services, etc.)
│   │   └── ui/          # Buttons, Cards, etc.
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── content/         # Content files (future)
├── public/              # Static assets
└── .claude-flow.config.js # Claude Flow configuration
```

## 🤖 Claude Flow Integration

The project includes Claude Flow for intelligent content and design management:

### Available Commands

```bash
# Generate wedding content
npm run content:plan

# Create new component with consistent design
npm run design:component

# Review brand consistency
npm run brand:review
```

### Configured Agents

1. **Content Creator Agent** - Generates wedding and event content maintaining brand voice
2. **Design System Agent** - Ensures consistent visual design and mobile-first approach
3. **Brand Manager Agent** - Reviews all content for brand alignment
4. **SEO Optimizer Agent** - Optimizes for local wedding searches

## 🎨 Design System

### Colors
- **Primary**: Rose, Blush, Petal tones
- **Neutral**: Cream, Sage, Stone, Charcoal
- **Accent**: Gold, Lavender, Eucalyptus

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Cormorant Garamond (serif)

### Brand Voice
- Elegant yet approachable
- Passionate about florals
- Personal and warm
- Professional but not stuffy
- Inspiring and creative

## 📱 Mobile-First Approach

All components are designed mobile-first with:
- Responsive navigation with hamburger menu
- Touch-friendly interactions
- Optimized images and performance
- Smooth animations and transitions

## 📄 Pages

### Current Pages
- **Home** (`/`) - Hero, services overview, about section, gallery preview
- **Weddings** (`/weddings`) - Comprehensive wedding services
- **Contact** (`/contact`) - Contact form and information

### Planned Pages
- **Events** (`/events`) - Corporate and social events
- **Gallery** (`/gallery`) - Full portfolio
- **About** (`/about`) - Emily's story
- **Process** (`/process`) - Working with Petal Culture
- **Blog** (`/blog`) - Journal and tips

## 🌟 Key Features

- ✅ Mobile-first responsive design
- ✅ Clean, modern aesthetic
- ✅ Service-focused structure
- ✅ Contact form ready for integration
- ✅ SEO-friendly structure
- ✅ Performance optimized with Astro
- ✅ Type-safe with TypeScript
- ✅ Claude Flow integration for content management

## 🔄 Content Management with Claude Flow

Use Claude Flow to maintain consistency across the site:

```bash
# Generate new service descriptions
npx claude-flow sparc run content-creator "Create description for seasonal bouquet service"

# Design new component
npx claude-flow sparc run designer "Create testimonial carousel component"

# Review content for brand consistency
npx claude-flow sparc run brand-manager "Review homepage content"
```

## 🚦 Development Workflow

1. **Content First**: Use Claude Flow to generate content maintaining brand voice
2. **Component Development**: Build reusable components with consistent styling
3. **Mobile Testing**: Always test on mobile devices first
4. **Brand Review**: Run brand consistency checks before deploying

## 📈 Next Steps

1. Add image assets for gallery and hero sections
2. Implement contact form backend
3. Set up email notifications
4. Add more service pages
5. Integrate booking/consultation system
6. Set up analytics
7. Implement blog functionality
8. Add client testimonials
9. Create seasonal content

## 🤝 Client Acquisition

Ready to onboard 40 clients from the existing business with:
- Professional, trustworthy design
- Clear service offerings
- Easy contact methods
- Mobile-friendly for all age groups
- Fast loading and performance

## 📝 Notes for Emily

- Update contact information in Footer and Contact page
- Add real testimonials as they come in
- Upload high-quality portfolio images
- Consider adding pricing guides or starting prices
- Update social media links when accounts are created

## 🛠 Technologies

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Vite
- **Content AI**: Claude Flow
- **Version Control**: Git

## 📞 Support

For technical support or updates, the Claude Flow system can help generate new content and maintain consistency. Run `npm run flow` for interactive assistance.

---

*Built with love for Petal Culture by Claude Flow* 🌸