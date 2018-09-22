'use strict';

var mongoose = require('mongoose'),
  ExchangeRates = mongoose.model('ExchangeRates');

exports.getAll = function(req, res) {
  ExchangeRates.find({}, function(err, exchangeRates) {
    if (err){
      res.send(err);
    }
    res.json(exchangeRates)
  })
};

exports.create = function(req, res) {
  var newExchangeRate = new ExchangeRate(req.body);
  newExchangeRate.save(function(err, exchangeRate) {
    if (err) {
      res.send(err);
    }
    res.json(exchangeRate);
  })
};

exports.getById = function(req, res) {
  ExchangeRates.findById(req.params.exchangeRateId, function(err, exchangeRate) {
    if (err){
      res.send(err);
    }
    res.json(exchangeRate);
  });
};

exports.update = function(req, res) {
  ExchangeRates.findOneAndUpdate({_id: req.params.exchangeRateId}, req.body, {new: true}, function(err, exchangeRate){
    if (err){
      res.send(err);
    }
    res.json(exchangeRate);
  })
};

exports.delete = function(req, res) {
  ExchangeRates.remove({_id: req.params.exchangeRateId}, function(err, exchangeRate) {
    if (err){
      res.send(err);
    }
    res.json({ message: 'OK'});
  }
  });
}
app.route('/exchange-rates')
  .get(exchangeRates.get_all)
  .post(exchangeRates.create);


app.route('/exchange-rates/:exchangeRateId')
  .get(todoList.getById)
  .put(todoList.update)
  .delete(todoList.delete);
