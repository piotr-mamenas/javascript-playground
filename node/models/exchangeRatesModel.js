'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExchangeRateSchema = new Schema({
  code: {
    type: String
  },
  datetime: {
    type: Date,
    default: Date.now
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  close: {
    type: Number
  }
});

module.exports = mongoose.model('ExchangeRates', ExchangeRateSchema);
