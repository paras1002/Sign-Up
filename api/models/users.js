const mongoose = require('mongoose')

const signSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    contact: mongoose.Schema.Types.String,
})

module.exports = mongoose.model('signup',signSchema);