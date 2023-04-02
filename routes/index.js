const express = require('express');
const app = express();

app.use( '/products', require('./products'));
app.use('/auth', require('./auth'));

module.exports = app;