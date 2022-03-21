const express = require('express')
const bodyparser = require('body-parser')
const UserRouter = require('./router/userRouter')
const cors = require('cors')
const app = express()
require('./dbConnection')
app.use(cors())
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())
app.use('/user', UserRouter)
app.listen(3001, () => {
console.log("I am Connected With PORT 3000")
})
