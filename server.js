const express = require('express');
const app = express();

// route
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log('app is runnin on port 3000')
})