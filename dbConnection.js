const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
    console.log('I am Error Please Fix me')
})
db.once('open', () => {
    console.log('Congratulations')
})
