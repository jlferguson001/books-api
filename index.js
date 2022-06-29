const express= require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Jenni\s Book World')
})

app.listen(3003)