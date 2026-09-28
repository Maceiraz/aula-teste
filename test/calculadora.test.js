const { expect } = require('chai');
const { soma, subtracao, multiplicacao, divisao } = require('../src/calculadora');

describe('Calculadora', () => {
  describe('#soma', () => {
    it('soma dois números positivos', () => {
      expect(soma(2, 3)).to.equal(5);
    });

    it('soma números negativos', () => {
      expect(soma(-1, -1)).to.equal(-2);
    });
  });

  describe('#subtracao', () => {
    it('subtrai dois números', () => {
      expect(subtracao(10, 4)).to.equal(6);
    });
  });

  describe('#multiplicacao', () => {
    it('multiplica dois números', () => {
      expect(multiplicacao(3, 4)).to.equal(12);
    });
  });

  describe('#divisao', () => {
    it('divide dois números', () => {
      expect(divisao(10, 2)).to.equal(5);
    });

    it('lança erro ao dividir por zero', () => {
      expect(() => divisao(10, 0)).to.throw('Divisão por zero');
    });
  });
});