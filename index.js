//connects to .env
const express= require('express')
const mongoose = require('mongoose')
 const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(express.json())


//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Middleware
 
app.use(express.urlencoded({extended: true}))

//route to /page
app.get('/', (req, res) => {
    res.send('Jenni\s Book World')
})

//books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//404
app.get('*', (req, res) => {
    res.send('404')
})
app.listen(process.env.PORT)