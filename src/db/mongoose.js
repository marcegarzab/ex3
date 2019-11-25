const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
var connectionURL = 'mongodb+srv://admin:admin@marcelacluster-qiczh.mongodb.net/Exam3?retryWrites=true&w=majority'

// var connectionURL = '../config.js'


mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
