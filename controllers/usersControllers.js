const user = (req, res) => {
    res.send(`Hola ${req.params.nombre} ${req.params.apellido}`)
};

module.exports = {user}