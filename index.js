//connects to .env
require('dotenv').config()

//express application
const express= require('express')
const app = express()

//route to /page
app.get('/', (req, res) => {
    res.send('Jenni\s Book World')
})

app.listen(process.env.PORT)