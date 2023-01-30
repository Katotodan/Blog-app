const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)
const connectionDb = async() =>{
    return mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(console.log('DB connected...'))
}

module.exports = connectionDb