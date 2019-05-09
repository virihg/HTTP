const express = require('express');
const config = require("./config");
const app = express();
const port = 3000;
const endpoints = require("./endpoints");


config.setup(app);
endpoints.routes(app);


app.listen(port, () => console.log('El servidor esta corriendo'));
