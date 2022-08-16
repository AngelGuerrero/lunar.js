const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use((error, req, res, next) => {
  console.log('app error :>> ', error)
  res
    .status(error.statusCode || 500)
    .json({ statusCode: error.statusCode || 500, message: error.message })
  next()
})

module.exports = app
