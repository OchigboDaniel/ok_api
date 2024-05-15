const express = require('express');
const body_parser = require('body-parser');
const adminRoute = require('./routes/admin.routes');

const app = express();

app.use(body_parser.json())

app.use('/', adminRoute);

app.use(express.urlencoded);

app.use(express.json())

module.exports = app;