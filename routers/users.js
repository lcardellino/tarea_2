const express = require('express')
const router = express.Router()
const {user} = require("../controllers/usersControllers")



router.get('/:nombre/:apellido', user)

module.exports = router