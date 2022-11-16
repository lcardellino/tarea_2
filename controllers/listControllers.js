const list = (req, res) => {
    let productos = {
        producto1: req.query.product1,
        producto2: req.query.product2,
        producto3: req.query.product3,
        producto4: req.query.product4,
        producto5: req.query.product5,
    }
    res.json(productos)};

module.exports = {list}