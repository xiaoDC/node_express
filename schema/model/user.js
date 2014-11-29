// Movie.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    name: String,
    password: String,
    interest: [String]
});

module.exports = db.model('User', User);
