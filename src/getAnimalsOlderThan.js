const data = require('../data/zoo_data');

function getAnimalsOlderThan(species, age) {
  const listSpecies = data.species.find((animal)=> animal.name === species).residents
  return listSpecies.every((animal) => animal.age >= age)
}

module.exports = getAnimalsOlderThan;
