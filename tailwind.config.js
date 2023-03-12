/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('/baner.jpeg')",
        
      }
    },
  },
  plugins: [],
}
