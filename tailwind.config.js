/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'petal': {
          // Sophisticated greens
          sage: '#6b7280',     // Cool gray-green
          forest: '#064e3b',   // Deep forest green
          eucalyptus: '#10b981', // Fresh eucalyptus
          moss: '#059669',     // Rich moss green
          // Premium oranges
          terracotta: '#ea580c', // Warm terracotta
          amber: '#f59e0b',    // Rich amber
          peach: '#fed7aa',    // Soft peach
          // Neutrals for premium feel
          cream: '#fefdf8',    // Warm cream
          stone: '#f5f5f4',   // Light stone
          charcoal: '#374151', // Deep charcoal
          pearl: '#f8fafc'    // Pearl white
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Cormorant Garamond', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bloom': 'bloom 1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}