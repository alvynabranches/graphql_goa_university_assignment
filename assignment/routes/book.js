const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Inside db")
    res.status(200).json({ message: "ok" })
});

router.post("/", async (req, res) => {
    console.info(req.body)
    // try {
        const book = new Book({
            title: req.body.title,
            description: req.body.description
        });
    // } catch (err) {
    //     res.status(500).json({ message: err.message })
    // }

    try {
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;