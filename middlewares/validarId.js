const {Product} = require("../models/productos")


const validarId = async (req, res, next) => {
    try {
        const item = await Product.findById(req.params.id)
        if (item!== null) {
            next()
        } else {
            res.status(500).json({msg: "Error, el id no es valido"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
} 


module.exports = {validarId} 