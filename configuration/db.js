const mongoose = require('mongoose');

// Create a database named thriftsbyJulietta
const dbConnection = mongoose.createConnection(
    "mongodb://localhost:27017/thriftsbyJulietta")
.on('open', () => {
    console.log("connected to database...");   
}).on('error', () => {
    console.log("connection error...");
})

module.exports = dbConnection;


