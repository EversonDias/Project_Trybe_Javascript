const data = require('../data/zoo_data');

function somaEntrants(entrants) {
  let some = 0;
  some += data.prices.adult * entrants.adult || 0;
  some += data.prices.child * entrants.child || 0;
  some += data.prices.senior * entrants.senior || 0;
  return some;
}

function countEntrants(entrants) {
  const child = entrants.filter((people) => people.age < 18);
  const adult = entrants.filter((people) => people.age >= 18 && people.age < 50);
  const senior = entrants.filter((people) => people.age >= 50);
  return {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const countEntrant = countEntrants(entrants);
  return somaEntrants(countEntrant);
}

module.exports = { calculateEntry, countEntrants };
