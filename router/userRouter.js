const express = require('express')
const router = express.Router()
const userModel = require('../models/user')

router.post('/login', (req, res) => {
    userModel.findOne({ email: req.body.email, password: req.body.password }, (err, data) => {
        if (data) {
            res.send({ message: 'Login Successfully', response: true })
        }
        else {
            res.send({ message: 'Try Again', response: false })
        }
    })
})
router.post('/registration', (req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        profile_picture: req.body.profile_picture
    })
    userModel.findOne({ email: req.body.email }, (err, userExist) => {
        if (userExist == null) {
            newUser.save((err, data) => {
                if (err) {
                    res.send({ err, user }).status(202)
                    res.end()
                }
                else {
                    res.send({
                        message: "Successfully Created User",
                        success: true,
                    })
                }
            })
        }
        else {
            res.send({
                message: "User Email Is already Exist",
                success: false
            })
        }
    })

})
router.delete('/delete', (req, res) => {
    userModel.deleteMany({}, (err, data) => {
        if (err) {
            res.send('All User Deleted')
            res.end()
        }
        else {
            res.send(data)
        }
    })
})

module.exports = router