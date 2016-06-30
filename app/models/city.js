const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const schema = new mongoose.Schema({
	name: String,
	knownFor: String
});

module.exports = mongoose.model('City', schema);