module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#2f3e52',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'gray-darkest': '#161D27'
      },
      backgroundImage: {
        'grid-pattern': "url('/pics/grid.png')",
      },
    },
    fontFamily: {
      'mono': ['ui-monospace', 'JetBrains Mono']
    }
  },
  plugins: [],
}