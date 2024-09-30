/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '639px'},

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '226': '226px',
        '500': '500px',
        '400': '400px',
        '281': '281px',
        '300': '300px',
        '484': '484px',
        '576': '576px',
        '510': '510px',

      },
    },
  },
  plugins: [],
}

