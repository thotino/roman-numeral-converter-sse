'use strict'
/**
 * Import the service
 */
const { convertToRomanNumerals } = require('../services/convertToRomanNumerals')

// An utility function to delay the events
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * This function defines a controller/handler for the roman numerals conversion
 * @param {*} req - The Express request object
 * @param {*} res - The Express result object
 */
const controller = async (req, res) => {
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
    // Delay for 1 second
    await sleep(1000)
    // Convert to roman numerals
    const romanNum = convertToRomanNumerals({ number: count })    

    // The data to be sent to the client
    const data = { emittedNumber: count, convertedNumber: romanNum }
    console.log(data)
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
