const mongoose = require('mongoose');

const connectToMongo = async() =>{
    await mongoose
    .connect(process.env.DB_URI)
    .then(()=>console.log('Connected to MongoDb'))
    .catch((err)=>console.error("Couldnot connect to MongoDB: ",err))
}

module.exports = connectToMongo;