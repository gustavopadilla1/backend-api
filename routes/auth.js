const express  = require('express');
const app = express();
const ctrlAuth = require('../controllers/auth')


app.post('/signup', ctrlAuth.registrarUsuario);

app.post('/login', ctrlAuth.login)


module.exports = app;