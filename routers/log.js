const express = require('express')
const router = express.Router()
const {log} = require("../controllers/logControllers")


router.post('/', log)

module.exports = router