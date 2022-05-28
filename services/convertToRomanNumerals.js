/**
 * A map that associate the numbers with the roman symbols
 */
const conversionMap = new Map([
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
])

/**
   * This function converts a number into roman numerals
   * @param {Number} number - The number to be converted
   * @returns {String} - The roman numeral as a string
   */
const convertToRomanNumerals = ({ number }) => {
  const conversionMapIterator = conversionMap.entries()
  if (number === 0) {
    return ''
  }
  for (const [key, value] of conversionMapIterator) {
    if (number >= key) {
      return value + convertToRomanNumerals({ number: number - key })
    }
  }
}

/**
   * Export the function
   */
module.exports = {
  convertToRomanNumerals
}
