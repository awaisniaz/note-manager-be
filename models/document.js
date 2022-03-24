const mongoose = require('mongoose')
const user = new mongoose.Schema({
    name: { type: String, minlength: 5 },
    type: { type: String },
    size: { type: Number },
    url: { type: String },
    date: { type: Date },
    picture: { type: String }
})
// Mongoose data table
const userModel = mongoose.model('User', user)
module.exports = userModel
