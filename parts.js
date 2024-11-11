var express = require('express');
var router = express.Router();
let Part = require('../model/part'); // Assuming your model is named 'part'

// Route to get the list of auto parts
router.get('/', async (req, res, next) => {
    try {
        const partsList = await Part.find(); // Fetches all parts from the database
        res.render('parts', {
            title: 'Auto Parts Inventory',
            partsList: partsList
        });
    } catch (err) {
        console.error(err);
        res.render('parts', {
            title: 'Auto Parts Inventory',
            error: 'Error on Server'
        });
    }
});

module.exports = router;
