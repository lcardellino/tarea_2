const express = require('express')
const router = express.Router()
const {index} = require("../controllers/indexControllers")


router.get('/api', index)


module.exports = router