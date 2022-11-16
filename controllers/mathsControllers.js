const dividir = (req, res) => {
  let divisor = Number(req.params.divisor);
  let dividendo = Number(req.params.dividendo);

  if (divisor == 0) {
    res.json({ error: "No se puede dividir por cero" });
  } else {
    let resultado = dividendo / divisor;
    res.json({ resultado });
  }
};

const suma = (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);

  if (num1 < 0 || num2 < 0) {
    res.json({
      error: "no se puede enviar numero menores a cero" });
  }
  else {
    let resultado = num1 + num2;
    res.json({ resultado });
  }
};

const par = (req, res) => {
  let queryValue = Object.values(req.query);
  let queryNumber = Number(queryValue);

  if (queryNumber == 0 || queryNumber % 2 == 0) {
    res.send("Autorizado");
  } else {
    res.send("No autorizado");
  }
};

module.exports = {dividir, suma, par };
