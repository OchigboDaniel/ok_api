const app = require("./app");

const port = 2000;

app.listen(port, ()=>{
    console.log(`App is running on port http://localhost:${port}`);
})

module.exports = app;
