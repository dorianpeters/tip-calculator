module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        dark: '#1a1a1a',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
