const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao chamar a função sem parâmetro retorna a agenda', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  const message = 'The zoo is closed';

  it('Para os argumentos Monday e 12:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('monday', '12:00-am')).toBe(message);
  });

  it('verifica se a função não faz diferenciação entre maiúsculas e minúsculas', () => {
    expect(getOpeningHours('monday', '12:00-am')).toBe(message);
  });

  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('tuesday', '09:00-am')).toBe('The zoo is open');
  });

  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('wednesday', '09:00-pm')).toBe('The zoo is closed');
  });

  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('thu', '09:00-am')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('friday', '09:00-zm')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('saturday', 'c9:00-am')).toThrow(/^The hour should represent a number$/);
  });

  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('sunday', '09:c0-am')).toThrow(/^The minutes should represent a number$/);
  });

  it('Para os argumentos Sunday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('sunday', '13:00-am')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Para os argumentos Sunday e 12:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('sunday', '12:60-am')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
