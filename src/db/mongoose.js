const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
var connectionURL = process.env.connectionURL || require('../config.js').connectionURL

// var connectionURL = '../config.js'


mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
