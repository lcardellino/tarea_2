const mongoose = require ("mongoose")
require("dotenv").config() //========> dotenv oculta info sensible


//==> FUNC CONECTORA <==//
const conect = async () => {
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("Base de datos conectada")
    } catch {
        console.log("Error al conectarse a la base de datos")
    }
};

module.exports = {conect}