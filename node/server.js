var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  ExchangeRates = require('./api/models/exchangeRatesModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/exchangeRateDb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/exchangeRatesRoutes');
routes(app);

app.listen(port);

console.log('RESTful Exchange Rate Service started on: ' + port);
