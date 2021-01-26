const mongoose = require('mongoose')
const user = new mongoose.Schema({
    name: {
        type: String, minlength: 5
    },
    email: { type: String }
    ,
    password: { type: mongoose.Schema.Types.Mixed },
    confirm_password: { type: mongoose.Schema.Types.Mixed },
    profile_picture: { type: String }

})

const userModel = mongoose.model('User', user)

module.exports = userModel
