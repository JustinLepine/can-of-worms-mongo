const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    inventory: {
        type: String
    }
})

module.exports = mongoose.model('Users', usersSchema)