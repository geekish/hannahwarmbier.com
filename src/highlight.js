const _ = require('lodash')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, theme }) {
  const colorNames = ['amber', 'teal']

  const values = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  const gradient = (color) => `linear-gradient(to right, ${color} 100%, #fff 0)`
  const hl = {
    backgroundPosition: '0 90%',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '100% 30%',
    transitionProperty: 'background-image, background-size',
  }

  const highlights = {}

  _.forEach(colorNames, (color) => {
    _.forEach(values, (value) => {
      highlights[`.hl-${color}-${value}`] = {
        ...hl,
        backgroundImage: gradient(colors[color][value]),
      }
    })
  })

  addUtilities(highlights, ['hover', 'focus', 'dark'])
})
