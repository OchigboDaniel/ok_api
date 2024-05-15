const express = require('express');
const body_parser = require('body-parser');
const adminRoute = require('../routes/admin.routes');

const app = express();

const port = 2000;

app.use(body_parser.json())

app.use('/', adminRoute);

app.use(express.urlencoded);

app.use(express.json())

app.listen(port, ()=>{
    console.log(`App is running on port http://localhost:${port}`);
})

module.exports = app;
