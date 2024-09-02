/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'head' : ['head'],
        'texts' : ['texts'],
        'btn-text' : ['btn-text'],
        'para' : ['para']
      }
    },
  },
  plugins: [],
}