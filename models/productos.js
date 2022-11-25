const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productsSchema = new Schema({
    marca: {
        type: String,
        required: false
    },
    droga:{
        type: String,
        required: true
    },
    laboratorio: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    concentracion: {
        type: Number,
        required: true
    },
    prescripcion: {
    type: Boolean,
    required: true
    },
})

    const Product = mongoose.model('Product', productsSchema)
    module.exports = {Product}