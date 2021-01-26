const express = require('express')
const router = express.Router()
const userModel = require('../models/user')

router.post('/login', (req, res) => {
    userModel.find((err, data) => {
        if (err) {
            res.send('Sorry try again')
        }
        else {
            res.send(data)
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
    const data = userModel.find({ email: req.body.email })
    newUser.save((err, status) => {
        if (err) {
            res.send(err.message)
            res.end()
        }
        else {
            res.send({
                message: "Successfully Created User",
                success: true
            })
        }
    })
})
router.delete('/delete', (req, res) => {
    userModel.deleteMany({}, (err, data) => {
        if (err) {
            res.send('Sorry Try Again')
            res.end()
        }
        else {
            res.send(data)
        }
    })
})

module.exports = router