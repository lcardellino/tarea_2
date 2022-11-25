const {Product} = require("../models/productos");
const {validationResult} = require("express-validator");


const crearProducto = async(req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Product(req.body)
        await item.save()
        res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501),json({error})
    }
};


const editarProducto = async (req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Product.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg: "se actualizo el producto"})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
        
    }
};


const verProductos = async(req, res) => {
    const items = await Product.find() 
    res.status(200).json({items})
};


const vistaUnicaProducto = async(req, res) => {
    const item = await Product.findById(req.params.id)
    res.status(200).json({item})
};


const eliminarProducto = async (req, res) => {
    const item = await Shoe.findByIdAndDelete(req.params.id)
    res.status(204).json({msg: "el siguiente item fue eliminado", item})
};


module.exports = {crearProducto, verProductos, vistaUnicaProducto, editarProducto, eliminarProducto}