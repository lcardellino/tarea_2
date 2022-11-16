const log = (req, res) => {

let nombre = req.body.nombre  
res.status(201).json ({
    nombre: nombre,
    status: "success"
    })};

module.exports = {log}
