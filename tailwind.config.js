module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#0ea5e9'
      }
    },
  },
  variants: {
    extends: {
      display: ['group-hover']
    }
  },
  plugins: [],
};
