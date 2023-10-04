/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "alumni": ["Alumni Sans", "sans-serif"],
      "noto": ["Noto Sans Mono", "monospace"],
      "antique": ["Antique Olive Nord", "sans-serif"]
    },
    colors: {
      'blurple': {
        '50': '#ecf1ff',
        '100': '#dde4ff',
        '200': '#c2ceff',
        '300': '#9cacff',
        '400': '#757fff',
        '500': '#6464ff',
        '600': '#4536f5',
        '700': '#3b2ad8',
        '800': '#3025ae',
        '900': '#2b2689',
        '950': '#1b1650',
    },
    
      "off-black": "#191919"
    },
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}

