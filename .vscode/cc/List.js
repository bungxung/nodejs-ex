var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  adresse: String,
  telefon: String,
  website: String
});
mongoose.model('List', UserSchema);

module.exports = mongoose.model('List');