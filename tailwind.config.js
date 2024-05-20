/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStrokeWidth: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',
        red: '#f00',
        green: '#0f0',
        blue: '#00f',
        yellow: '#ff0',
      },
      keyframes: {
        borderColorChange: {
          '0%, 100%': { borderColor: '#ff0000' },
          '50%': { borderColor: '#0000ff' },
        },
      },
      animation: {
        'border-color-change': 'borderColorChange 2s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-0': {
          '-webkit-text-stroke-width': '0',
        },
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
        },
        '.text-stroke-4': {
          '-webkit-text-stroke-width': '4px',
        },
        '.text-stroke-5': {
          '-webkit-text-stroke-width': '5px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
        '.text-stroke-red': {
          '-webkit-text-stroke-color': '#f00',
        },
        '.text-stroke-green': {
          '-webkit-text-stroke-color': '#0f0',
        },
        '.text-stroke-blue': {
          '-webkit-text-stroke-color': '#00f',
        },
        '.text-stroke-yellow': {
          '-webkit-text-stroke-color': '#ff0',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
