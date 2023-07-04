/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: '#674baf',
        magenta: '#e882e8',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Open Sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'bg-desktop': "url('images/bg-desktop.svg')",
        'bg-mobile': "url('images/bg-mobile.svg')"
      },

      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1380px',
          xl: '1300px',
          "2xl": '1250px',
        }
      }
    },
  },
  plugins: [],
}

