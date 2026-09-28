const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API de Operações', () => {
  it('GET /operacoes/soma retorna o resultado', async () => {
    const res = await request(app).get('/operacoes/soma?a=2&b=3');
    expect(res.status).to.equal(200);
    expect(res.body.resultado).to.equal(5);
  });

  it('retorna 400 ao dividir por zero', async () => {
    const res = await request(app).get('/operacoes/divisao?a=10&b=0');
    expect(res.status).to.equal(400);
    expect(res.body.erro).to.include('zero');
  });

  it('retorna 404 para operação desconhecida', async () => {
    const res = await request(app).get('/operacoes/potencia?a=2&b=3');
    expect(res.status).to.equal(404);
  });

  it('retorna 400 quando os parâmetros não são números', async () => {
    const res = await request(app).get('/operacoes/soma?a=x&b=3');
    expect(res.status).to.equal(400);
  });
});