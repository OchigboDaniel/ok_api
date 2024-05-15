const router = require('express').Router();
const AdminController = require('../controller/admin.controller')

router.post('/registration', AdminController.register);

router.get("/", (req, res)=>{
    res.send("hello world")
})

module.exports = router;