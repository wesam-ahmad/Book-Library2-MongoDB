const Author = require("../models/Author");
const Book = require("../models/Book");


exports.createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const author = new Author({ name, bio });
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAuthorWithBooks = async (req, res) => {
    try {
        const { authorId } = req.params;
        const author = await Author.findById(authorId).populate("books");
        if (!author) return res.status(404).json({ message: "Author not found" });
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




exports.findAuthor = async (req, res) => {
    const { name } = req.params;
    console.log(name);
    console.time("Query Time");
    const author = await Author.findOne({ name });
    console.timeEnd("Query Time");

    if (!author) return res.status(404).json({ message: "Author Not Found" });
    res.json(author);
};

