const Book = require("../models/Book");
const Author = require("../models/Author");


exports.createBook = async (req, res) => {
    try {
        const { title, genre, authorId, publisher } = req.body;

        
        const book = new Book({ title, genre, author: authorId, publisher });
        await book.save();

        
        await Author.findByIdAndUpdate(authorId, { $push: { books: book._id } });

        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookWithAuthor = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await Book.findById(bookId).populate("author"); 
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
