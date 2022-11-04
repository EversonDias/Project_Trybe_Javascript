const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se passado não for passador parâmetro retorna-ra undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Verifica se ao passar o parâmetro COUNT retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se ao passar o parâmetro NAMES retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se ao passar o parâmetro avarageAge retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica se ao passar o parâmetro location retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica se ao passar o parâmetro popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Verifica se ao passar o parâmetro availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Verifica se ao passar um numero como parâmetro retorna uma mensagem de erro', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se parra o parâmetro ID retorna o id da especie', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('Verifica se ao passar um parâmetro invalido retorna null', () => {
    expect(handlerElephants('elephant')).toBe(null);
  });
});
