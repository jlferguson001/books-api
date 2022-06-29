//connects to .env
require('dotenv').config()

//express application
const express= require('express')
const app = express()

//route to /page
app.get('/', (req, res) => {
    res.send('Jenni\s Book World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page<h1>')
})
app.listen(process.env.PORT)