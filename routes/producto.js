const express = require('express')
const router = express.Router()
const {crearProducto, verProductos, editarProducto, vistaUnicaProducto, eliminarProducto} = require("../controllers/productoController")
const {validarId} = require("../middlewares/validarId")
const {check} = require("express-validator")



//===========> GET <=============//
router.get('/ver', verProductos)
router.get('/ver/:id', validarId, vistaUnicaProducto)



//===========> POST <=============//
router.post('/crear', [
    check("marca").not().isEmpty().withMessage("marca requerida").isLength({min: 3, max: 15}).withMessage("El campo debe tener mas de 3 letras y menos de 15"),  
    check("droga").not().isEmpty().withMessage("droga generica requerida"),
    check("laboratorio").not().isEmpty().withMessage("laboratorio requerido"),
    check("cantidad").not().isEmpty().withMessage("cantidad requerida"),
    check("concentracion").not().isEmpty().withMessage("concentracion requerida"),
    check("prescripcion").not().isEmpty().withMessage("venta bajo prescripcion requerida"),
], crearProducto);



//===========> PUT <=============//
router.put('/editar/:id', validarId, [
    check("marca").not().isEmpty().withMessage("marca requerida").isLength({min: 3, max: 15}).withMessage("El campo debe tener mas de 3 letras y menos de 15"),  
    check("droga").not().isEmpty().withMessage("droga generica requerida"),
    check("laboratorio").not().isEmpty().withMessage("laboratorio requerido"),
    check("cantidad").not().isEmpty().withMessage("cantidad requerida"),
    check("concentracion").not().isEmpty().withMessage("concentracion requerida"),
    check("prescripcion").not().isEmpty().withMessage("venta bajo prescripcion requerida"),], editarProducto)



//===========> DELETE <=============//
router.delete('/delete/:id', validarId, eliminarProducto)




module.exports = router;