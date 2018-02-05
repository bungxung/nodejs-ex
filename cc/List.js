var mongoose = require('mongoose');  
var ListSchema = new mongoose.Schema({  
  name: String,
  adresse: String,
  telefon: String,
  website: String
});
mongoose.model('List', ListSchema);

module.exports = mongoose.model('List');