/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCD34D', // The bright yellow on the left
          blue: '#60A5FA',   // The soft sky blue on the right
          dark: '#1E293B',   // Deep slate text for high readability
        }
      },
    },
  },
  plugins: [],
};
