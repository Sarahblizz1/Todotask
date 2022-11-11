const mongoose = require('mongoose')
const { config } = require('dotenv')


async function connect(uri){
    try{
        mongoose.connect(uri || 'mongodb://localhost/27017')
        console.log("connectd to mongodb")
    } catch (error) {
        console.log(error.message);
    }
    }
   

module.exports = connect