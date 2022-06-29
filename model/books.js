const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true},
    year: {type: Number, required: true},
    quantity: { type: Number, required: true},
    imageURL: { type: String, required: true},
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book