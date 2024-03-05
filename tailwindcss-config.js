/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '1366px',
      // => @media (min-width: 768px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1024px) { ... }
    }
  }
}