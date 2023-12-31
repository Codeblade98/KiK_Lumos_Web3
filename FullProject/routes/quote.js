const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
})

router.post('/', async (req, res) => {
    res.header( "Access-Control-Allow-Origin" );
    const quote = new Quote({
        author : req.body.author,
        quote : req.body.quote
    })
    try{
        const newQuote = await quote.save();
        res.status(201).json({newQuote});
    }catch(err){
        res.status(400).json({message: err.message});
    }
})

module.exports = router;