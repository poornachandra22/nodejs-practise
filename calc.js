const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  res.send(`Sum: ${sum}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const difference = parseFloat(a) - parseFloat(b);
  res.send(`Difference: ${difference}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const product = parseFloat(a) * parseFloat(b);
  res.send(`Product: ${product}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (b == 0) {
    res.send("Cannot divide by zero.");
  } else {
    const quotient = parseFloat(a) / parseFloat(b);
    res.send(`Quotient: ${quotient}`);
  }
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
