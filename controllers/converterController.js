'use strict'
/**
 * Import the service
 */
const { convertToRomanNumerals } = require('../services/convertToRomanNumerals')

/**
 * This function defines a controller/handler for the roman numerals conversion
 * @param {*} req - The Express request object
 * @param {*} res - The Express result object
 */
const controller = async (req, res) => {
  console.log('Got /stream')
  // Setting the headers
  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive'
  })
  res.flushHeaders()
  // Retry every 10 seconds
  res.write('retry: 10000\n\n')
  let count = 0
  while (count <= 100) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Convert to roman numerals
    const romanNum = convertToRomanNumerals({ number: count })
    console.log(`Emit: ${count}, Conversion: ${romanNum}`)

    // The data to be sent to the client
    const data = { emittedNumber: count, convertedNumber: romanNum }

    // Emit the event that contains the data
    res.write(`data: ${JSON.stringify(data)}\n\n`)
    ++count
  }
}

/**
 * Export the controller
 */
module.exports = {
  controller
}