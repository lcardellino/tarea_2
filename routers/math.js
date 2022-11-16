const express = require('express')
const router = express.Router()
const {suma, dividir, par} = require("../controllers/mathsControllers")



router.get('/suma/:num1/:num2', suma)
router.get('/dividir/:dividendo/:divisor', dividir)
router.get('/par', par)


module.exports = router