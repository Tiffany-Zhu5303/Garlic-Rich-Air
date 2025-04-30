/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        height: {
            'screen-h-75': '75vh',
        },
        lineHeight: {
            'quarter': '0.25', 
            'half': '0.5',
        },
      },
    },
    plugins: [],
  }