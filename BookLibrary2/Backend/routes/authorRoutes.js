const express = require("express");
const { createAuthor, getAuthorWithBooks } = require("../controllers/authorController");
const { findAuthor } = require("../controllers/authorController");

const router = express.Router();

router.post("/", createAuthor);
router.get("/:authorId", getAuthorWithBooks);
router.get("/authors/:name", findAuthor);




module.exports = router;


