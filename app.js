/**
 * The app dependencies
 */
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

/**
  * The route/controller
  */

const { controller } = require('./controllers/converterController')
const app = express()
const port = 3000

app.use(cors())
app.use(morgan('combined'))

/**
  * Defining a route
  */
app.get('/events', controller)

/**
  * Start listening
  */
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
