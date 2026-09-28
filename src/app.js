const express = require('express');
const { soma, subtracao, multiplicacao, divisao } = require('./calculadora');

const app = express();
app.use(express.json());

app.get('/operacoes/:tipo', (req, res) => {
  const { tipo } = req.params;
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros a e b devem ser números' });
  }

  try {
    let resultado;
    switch (tipo) {
      case 'soma':         resultado = soma(a, b);         break;
      case 'subtracao':    resultado = subtracao(a, b);    break;
      case 'multiplicacao': resultado = multiplicacao(a, b); break;
      case 'divisao':      resultado = divisao(a, b);      break;
      default:
        return res.status(404).json({ erro: 'Operação não encontrada' });
    }
    res.json({ operacao: tipo, a, b, resultado });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = app;