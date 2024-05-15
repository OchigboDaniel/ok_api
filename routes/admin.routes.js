const router = require('express').Router();
const AdminController = require('../controller/admin.controller')

router.post('/registration', AdminController.register);

router.get("/", AdminController.register)

module.exports = router;