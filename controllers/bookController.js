const express = require("express");
const router = express.Router();
const db = require("../models");

//read
router.get("/api/books", (req,res) => {
    db.Book.find({}).then(foundBooks => {
        req.json({
            error: false,
            data: foundBooks,
            message: "Successfully retrieved all books."
        });
    }).catch(err => {
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to retrieve all books"
        });
    });
});
//read one

module.exports = router;