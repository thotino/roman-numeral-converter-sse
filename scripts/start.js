/**
 * Import the dependency
 */
const nodemon = require('nodemon')
const options = require('../nodemon.json')

nodemon(options)

// Handle the restart of the application
nodemon.on('start', function () {
  console.log('Nodemon has started')
}).on('quit', function () {
  console.log('Nodemon has quit')
  process.exit()
}).on('restart', function (files) {
  console.log('Nodemon restarted due to: ', files)
})
