const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }] 
});

//authorSchema.index({ name: 1 }); 

module.exports = mongoose.model("Author", authorSchema);