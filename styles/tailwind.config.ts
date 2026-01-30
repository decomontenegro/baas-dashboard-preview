import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      /* ============================================
       * COLORS
       * ============================================ */
      colors: {
        // Primary - Deep Teal
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
          DEFAULT: '#14b8a6',
        },
        // Accent - Warm Coral
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
          DEFAULT: '#f97316',
        },
        // Neutral - Cool Slate
        neutral: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Semantic
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#10b981',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#ef4444',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6',
        },
      },

      /* ============================================
       * TYPOGRAPHY
       * ============================================ */
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.025em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },

      /* ============================================
       * SPACING (8px Grid)
       * ============================================ */
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px - base
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '3.5': '0.875rem',  // 14px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px
        '9': '2.25rem',     // 36px
        '10': '2.5rem',     // 40px
        '11': '2.75rem',    // 44px
        '12': '3rem',       // 48px
        '14': '3.5rem',     // 56px
        '16': '4rem',       // 64px
        '18': '4.5rem',     // 72px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '28': '7rem',       // 112px
        '32': '8rem',       // 128px
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px
        '52': '13rem',      // 208px
        '56': '14rem',      // 224px
        '60': '15rem',      // 240px
        '64': '16rem',      // 256px
        '72': '18rem',      // 288px
        '80': '20rem',      // 320px
        '96': '24rem',      // 384px
        // Sidebar specific
        'sidebar-collapsed': '4.5rem',
        'sidebar-expanded': '16rem',
        'header': '4rem',
      },

      /* ============================================
       * BORDER RADIUS
       * ============================================ */
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.625rem',   // 10px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px
        '2xl': '1.25rem',   // 20px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },

      /* ============================================
       * SHADOWS
       * ============================================ */
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(15 23 42 / 0.04)',
        'sm': '0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)',
        'DEFAULT': '0 4px 6px -1px rgb(15 23 42 / 0.07), 0 2px 4px -2px rgb(15 23 42 / 0.07)',
        'md': '0 6px 10px -2px rgb(15 23 42 / 0.08), 0 3px 6px -3px rgb(15 23 42 / 0.08)',
        'lg': '0 10px 15px -3px rgb(15 23 42 / 0.08), 0 4px 6px -4px rgb(15 23 42 / 0.08)',
        'xl': '0 20px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.08)',
        '2xl': '0 25px 50px -12px rgb(15 23 42 / 0.2)',
        'inner': 'inset 0 2px 4px 0 rgb(15 23 42 / 0.04)',
        // Colored shadows
        'primary': '0 4px 14px 0 rgb(20 184 166 / 0.25)',
        'primary-lg': '0 10px 25px -3px rgb(20 184 166 / 0.3)',
        'accent': '0 4px 14px 0 rgb(249 115 22 / 0.25)',
        'error': '0 4px 14px 0 rgb(239 68 68 / 0.25)',
        'success': '0 4px 14px 0 rgb(16 185 129 / 0.25)',
        // Card shadows
        'card': '0 1px 3px 0 rgb(15 23 42 / 0.04), 0 1px 2px -1px rgb(15 23 42 / 0.04)',
        'card-hover': '0 10px 25px -5px rgb(15 23 42 / 0.1), 0 8px 10px -6px rgb(15 23 42 / 0.08)',
      },

      /* ============================================
       * TRANSITIONS
       * ============================================ */
      transitionDuration: {
        'instant': '0ms',
        'fastest': '50ms',
        'faster': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '400ms',
        'slowest': '500ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      /* ============================================
       * Z-INDEX
       * ============================================ */
      zIndex: {
        'below': '-1',
        'base': '0',
        'dropdown': '10',
        'sticky': '20',
        'fixed': '30',
        'drawer': '40',
        'modal': '50',
        'popover': '60',
        'tooltip': '70',
        'toast': '80',
        'max': '9999',
      },

      /* ============================================
       * ANIMATIONS
       * ============================================ */
      animation: {
        'slide-up': 'slide-up 200ms ease-out',
        'slide-down': 'slide-down 200ms ease-out',
        'slide-left': 'slide-left 200ms ease-out',
        'slide-right': 'slide-right 200ms ease-out',
        'fade-in': 'fade-in 200ms ease-in-out',
        'fade-out': 'fade-out 200ms ease-in-out',
        'scale-in': 'scale-in 200ms ease-out',
        'scale-out': 'scale-out 200ms ease-in',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 1s ease-in-out infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },

      /* ============================================
       * BACKDROP
       * ============================================ */
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      /* ============================================
       * ASPECT RATIOS
       * ============================================ */
      aspectRatio: {
        'card': '4 / 3',
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
      },

      /* ============================================
       * CONTAINER
       * ============================================ */
      maxWidth: {
        'prose': '65ch',
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    // Custom plugin for component utilities
    function({ addUtilities, addComponents, theme }: any) {
      // Focus ring utility
      addUtilities({
        '.focus-ring': {
          outline: 'none',
          '&:focus-visible': {
            outline: `2px solid ${theme('colors.primary.500')}`,
            outlineOffset: '2px',
          },
        },
        // Glass morphism
        '.glass': {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        '.dark .glass': {
          background: 'rgba(15, 23, 42, 0.7)',
        },
        // Text gradient
        '.text-gradient': {
          background: `linear-gradient(135deg, ${theme('colors.primary.400')}, ${theme('colors.accent.400')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          backgroundClip: 'text',
        },
        // Skeleton loading
        '.skeleton': {
          background: `linear-gradient(90deg, ${theme('colors.neutral.200')} 25%, ${theme('colors.neutral.100')} 50%, ${theme('colors.neutral.200')} 75%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s ease-in-out infinite',
        },
      })

      // Component classes
      addComponents({
        // Card component
        '.card': {
          backgroundColor: theme('colors.neutral.0'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.card'),
          border: `1px solid ${theme('colors.neutral.200')}`,
          transition: 'box-shadow 200ms ease-in-out, transform 200ms ease-out',
          '&:hover': {
            boxShadow: theme('boxShadow.card-hover'),
          },
        },
        '.dark .card': {
          backgroundColor: theme('colors.neutral.800'),
          borderColor: theme('colors.neutral.700'),
        },
        // Button base
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.lg'),
          transition: 'all 150ms ease-in-out',
          cursor: 'pointer',
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: 'white',
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.primary.600'),
            boxShadow: theme('boxShadow.primary'),
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme('colors.primary.700'),
            transform: 'scale(0.98)',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.neutral.100'),
          color: theme('colors.neutral.700'),
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.neutral.200'),
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme('colors.neutral.300'),
            transform: 'scale(0.98)',
          },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme('colors.neutral.300')}`,
          color: theme('colors.neutral.700'),
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.neutral.50'),
            borderColor: theme('colors.neutral.400'),
          },
        },
        // Input base
        '.input': {
          width: '100%',
          height: '2.5rem',
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
          backgroundColor: theme('colors.neutral.0'),
          border: `1px solid ${theme('colors.neutral.300')}`,
          borderRadius: theme('borderRadius.lg'),
          fontSize: theme('fontSize.sm')[0],
          transition: 'border-color 150ms ease-in-out, box-shadow 150ms ease-in-out',
          '&::placeholder': {
            color: theme('colors.neutral.400'),
          },
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.500'),
            boxShadow: `0 0 0 3px ${theme('colors.primary.500')}20`,
          },
          '&:disabled': {
            backgroundColor: theme('colors.neutral.100'),
            cursor: 'not-allowed',
          },
        },
        '.dark .input': {
          backgroundColor: theme('colors.neutral.800'),
          borderColor: theme('colors.neutral.600'),
          color: theme('colors.neutral.100'),
        },
        // Badge
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2'),
          paddingTop: theme('spacing.0.5'),
          paddingBottom: theme('spacing.0.5'),
          fontSize: theme('fontSize.xs')[0],
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.full'),
        },
        '.badge-primary': {
          backgroundColor: `${theme('colors.primary.500')}15`,
          color: theme('colors.primary.700'),
        },
        '.badge-success': {
          backgroundColor: `${theme('colors.success.500')}15`,
          color: theme('colors.success.700'),
        },
        '.badge-warning': {
          backgroundColor: `${theme('colors.warning.500')}15`,
          color: theme('colors.warning.700'),
        },
        '.badge-error': {
          backgroundColor: `${theme('colors.error.500')}15`,
          color: theme('colors.error.700'),
        },
      })
    },
  ],
}

export default config
