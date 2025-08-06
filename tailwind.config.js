/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // =============================================================================
      // ANIMATION EXTENSIONS
      // =============================================================================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
      },

      // =============================================================================
      // KEYFRAME DEFINITIONS
      // =============================================================================
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        slideLeft: {
          '0%': { 
            transform: 'translateX(20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(0)', 
            opacity: '1' 
          },
        },
        slideRight: {
          '0%': { 
            transform: 'translateX(-20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(0)', 
            opacity: '1' 
          },
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.9)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.6)' 
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glowPulse: {
          '0%': { 
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' 
          },
          '100%': { 
            textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)' 
          },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },

      // =============================================================================
      // BOX SHADOW EXTENSIONS
      // =============================================================================
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.7)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 50px -12px rgba(31, 38, 135, 0.25)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(59, 130, 246, 0.2)',
        'purple-glow': '0 0 20px rgba(147, 51, 234, 0.5)',
        'purple-glow-lg': '0 0 40px rgba(147, 51, 234, 0.6)',
      },

      // =============================================================================
      // GRADIENT EXTENSIONS
      // =============================================================================
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      },

      // =============================================================================
      // SPACING EXTENSIONS
      // =============================================================================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },

      // =============================================================================
      // BORDER RADIUS EXTENSIONS
      // =============================================================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  
  // =============================================================================
  // PLUGINS AND CUSTOM COMPONENTS
  // =============================================================================
  plugins: [
    function({ addComponents }) {
      addComponents({
        // =============================================================================
        // GLASS EFFECT COMPONENTS
        // =============================================================================
        '.glass-effect': {
          '@apply backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl': {},
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        
        '.glass-button': {
          '@apply backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl transition-all duration-300': {},
          'box-shadow': '0 4px 15px rgba(59, 130, 246, 0.3)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        
        '.glass-button:hover': {
          '@apply bg-white/15 border-blue-400/40': {},
          'box-shadow': '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)',
        },

        // =============================================================================
        // GRADIENT TEXT COMPONENT
        // =============================================================================
        '.gradient-text': {
          'background': 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #EC4899 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    }
  ]
}