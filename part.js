let mongoose = require('mongoose');

// create a model class for auto parts
let partModel = mongoose.Schema({
    name: String,
    category: String,
    manufacturer: String,
    description: String,
    price: Number
},
{
    collection: "parts"
});

module.exports = mongoose.model('Part', partModel);
