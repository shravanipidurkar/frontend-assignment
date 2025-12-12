const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        dmserif: ["DM Serif Display", "serif"],
      },
      colors: {
        primary: '#1E824C',
        secondary: '#A9DFBF',
        backgroundGray: '#C8C8C8',
      },
      borderRadius: {
        'sortus-lg': '40px',
        'sortus-xl': '60px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      transformOrigin: {
        'top-left': 'top left',
      },
      skew: {
        slight: '2deg',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spinSlow: 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

