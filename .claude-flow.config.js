// Claude Flow Configuration for Petal Culture
// Wedding & Event Florist Website

export default {
  project: {
    name: 'Petal Culture',
    type: 'wedding-florist-website',
    framework: 'astro',
    styling: 'tailwind',
    language: 'typescript'
  },

  brand: {
    name: 'Petal Culture',
    founder: 'Emily',
    tagline: 'Artful Florals for Life\'s Beautiful Moments',
    target: 'Weddings & Events',

    colors: {
      primary: {
        rose: '#e11d48',      // Rose 600
        blush: '#fda4af',     // Rose 300
        petal: '#ffe4e6'      // Rose 100
      },
      neutral: {
        cream: '#fef3c7',     // Amber 100
        sage: '#86efac',      // Green 300
        stone: '#f5f5f4',     // Stone 100
        charcoal: '#44403c'   // Stone 700
      },
      accent: {
        gold: '#fbbf24',      // Amber 400
        lavender: '#c084fc',  // Purple 400
        eucalyptus: '#6ee7b7' // Emerald 300
      }
    },

    typography: {
      headings: 'Playfair Display, serif',
      body: 'Inter, sans-serif',
      accent: 'Cormorant Garamond, serif'
    },

    voice: {
      tone: [
        'Elegant yet approachable',
        'Passionate about florals',
        'Personal and warm',
        'Professional but not stuffy',
        'Inspiring and creative'
      ],
      keywords: [
        'bespoke', 'artful', 'curated', 'timeless',
        'celebration', 'love story', 'bloom', 'seasonal',
        'sustainable', 'locally-sourced', 'handcrafted'
      ]
    }
  },

  agents: {
    contentCreator: {
      name: 'Content Creator Agent',
      role: 'Generate wedding and event floral content',
      capabilities: [
        'Create service descriptions',
        'Write blog posts about wedding trends',
        'Generate gallery captions',
        'Craft client testimonials templates',
        'Develop FAQ content'
      ],
      guidelines: [
        'Maintain elegant, warm tone',
        'Focus on emotional connection',
        'Highlight personalization',
        'Use floral terminology appropriately',
        'Include seasonal considerations'
      ]
    },

    designer: {
      name: 'Design System Agent',
      role: 'Maintain consistent visual design',
      capabilities: [
        'Create responsive components',
        'Ensure mobile-first approach',
        'Apply brand colors consistently',
        'Design intuitive navigation',
        'Optimize for conversions'
      ],
      guidelines: [
        'Mobile-first responsive design',
        'Clean, modern aesthetic',
        'High-quality imagery focused',
        'Easy navigation for 40+ clients',
        'Fast loading times'
      ]
    },

    brandManager: {
      name: 'Brand Consistency Agent',
      role: 'Ensure brand alignment across all touchpoints',
      capabilities: [
        'Review content for voice consistency',
        'Validate color usage',
        'Check typography application',
        'Ensure messaging alignment',
        'Monitor competitor differentiation'
      ],
      guidelines: [
        'Maintain Petal Culture voice',
        'Ensure visual consistency',
        'Differentiate from Elderberry',
        'Appeal to wedding market',
        'Build trust with new clients'
      ]
    },

    seoOptimizer: {
      name: 'SEO & Local Search Agent',
      role: 'Optimize for local wedding searches',
      capabilities: [
        'Generate meta descriptions',
        'Create schema markup',
        'Optimize for local SEO',
        'Build internal linking',
        'Generate sitemap'
      ],
      keywords: [
        'wedding florist [location]',
        'event flowers [location]',
        'bridal bouquets',
        'ceremony florals',
        'reception centerpieces'
      ]
    }
  },

  services: {
    weddings: {
      'Bridal Party': [
        'Bridal Bouquets',
        'Bridesmaids Bouquets',
        'Flower Girl Accessories',
        'Hair Flowers',
        'Corsages'
      ],
      'Ceremony': [
        'Altar Arrangements',
        'Aisle Decor',
        'Entrance Arrangements',
        'Pew/Chair Flowers',
        'Arch & Arbor Designs'
      ],
      'Reception': [
        'Centerpieces',
        'Head Table Arrangements',
        'Cake Flowers',
        'Bar & Buffet Florals',
        'Dance Floor Installations'
      ]
    },

    events: {
      'Corporate': [
        'Launch Events',
        'Award Ceremonies',
        'Conference Styling',
        'Brand Activations'
      ],
      'Social': [
        'Birthday Celebrations',
        'Anniversary Parties',
        'Baby Showers',
        'Engagement Parties'
      ],
      'Seasonal': [
        'Holiday Installations',
        'Spring Garden Parties',
        'Summer Soirées',
        'Autumn Harvests'
      ]
    }
  },

  content: {
    pages: [
      { path: '/', title: 'Home', priority: 1 },
      { path: '/weddings', title: 'Weddings', priority: 1 },
      { path: '/events', title: 'Events', priority: 1 },
      { path: '/gallery', title: 'Gallery', priority: 1 },
      { path: '/about', title: 'About Emily', priority: 2 },
      { path: '/process', title: 'Our Process', priority: 2 },
      { path: '/contact', title: 'Contact', priority: 1 },
      { path: '/blog', title: 'Journal', priority: 3 }
    ],

    cta: {
      primary: 'Start Your Floral Journey',
      secondary: 'View Our Portfolio',
      consultation: 'Book a Consultation'
    }
  },

  sparc: {
    modes: {
      'content-creator': {
        description: 'Generate wedding and event content',
        phases: ['specification', 'pseudocode', 'refinement'],
        focus: 'content generation with brand voice'
      },
      'designer': {
        description: 'Create UI components',
        phases: ['specification', 'architecture', 'completion'],
        focus: 'mobile-first responsive design'
      },
      'brand-manager': {
        description: 'Review brand consistency',
        phases: ['specification', 'refinement'],
        focus: 'voice and visual alignment'
      }
    }
  },

  hooks: {
    'pre-commit': [
      'npm run lint',
      'npm run build'
    ],
    'post-component': [
      'Update component library',
      'Check mobile responsiveness',
      'Validate accessibility'
    ]
  }
};