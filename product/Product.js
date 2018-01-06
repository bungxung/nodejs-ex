var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    amount: Number
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');