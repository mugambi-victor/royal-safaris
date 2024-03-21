/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',  '../node_modules/preline/dist/*.js',],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1600'
    },
    extend: {
      colors: {
        brightRed: 'hsl(0, 100%, 62%)',
        brightRedLight: 'hsl(0, 100%, 78%)',
        brightRedSupLight: 'hsl(0, 100%, 90%)',
        darkBlue: 'hsl(240, 100%, 66%)',
        veryDarkBlue: 'hsl(240, 100%, 18%)',
        darkGrayishBlue: 'hsl(240, 65%, 82%)',
        veryPaleRed: 'hsl(351, 67%, 94%)',
        veryLightGray: 'hsl(348, 7%, 66%)'
      },
    },
  },
  plugins: [ require('preline/plugin'),],
}
