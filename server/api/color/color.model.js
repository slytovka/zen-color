'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ColorSchema = new Schema({
  name: String,
  info: String,
  keyWords: String,
  power: String,
  motivation: String
});


module.exports = mongoose.model('Color', ColorSchema);
