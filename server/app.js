const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));

app.use('/api/auth', require('./api/auth'));
app.use("/api/listings", require("./api/listings"));
app.use("/api/users", require("./api/users"));

module.exports = app;
