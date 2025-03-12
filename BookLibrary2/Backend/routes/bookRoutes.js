
const express = require("express");
const { createBook, getBookWithAuthor } = require("../controllers/bookController");
const router = express.Router();

router.post("/", createBook);
router.get("/:bookId", getBookWithAuthor);

module.exports = router;
