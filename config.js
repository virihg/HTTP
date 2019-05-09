const express = require('express');
var path = require("path");
exports.setup = (app) => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'html');
  app.engine('html', require('hbs').__express);
}
