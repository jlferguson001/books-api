//connects to .env
require('dotenv').config()

//express application
const express= require('express')
const app = express()
const mongoose = require('mongoose')

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//route to /page
app.get('/', (req, res) => {
    res.send('Jenni\s Book World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page<h1>')
})
app.listen(process.env.PORT)