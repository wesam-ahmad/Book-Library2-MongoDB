const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }, 
    publisher: { 
        name: String, 
        location: String 
    } 
});

//bookSchema.index({ title: 1 }); 

module.exports = mongoose.model("Book", bookSchema);