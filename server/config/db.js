const mongoose = require('mongoose')


const dbURI = 'mongodb://localhost:27017/MarketPlace';

const db = mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully")
})
    .catch((e) => {
        console.log("Error connecting to MongoDB:" + e);
    })

module.exports = mongoose