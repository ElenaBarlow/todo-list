const mongoose = require("mongoose");

module.exports = async () => {
    await mongoose.connect(
            "mongodb+srv://ElenaBarlow:ElenaBarlow123@cluster0.uevaa8p.mongodb.net/?retryWrites=true&w=majority",
        
        )
    } 
