'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/exchangeRatesController');

  // todoList Routes
  app.route('/exchange-rates')
    .get(exchangeRates.getAll)
    .post(exchangeRates.create);


  app.route('/exchange-rates/:exchangeRateId')
    .get(todoList.getById)
    .put(todoList.update)
    .delete(todoList.delete);
};
