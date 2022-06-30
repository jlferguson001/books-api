const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

books.get('/books/:id', (req, res) =>{

} )

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBook => {
            res.json(foundBook)
        })
})



books.put('/books/:id', (req, res) =>{

})


books.delete('/books/:id', (req, res) =>{

})

books.post('/books', (req, res) => {

})

module.exports = books