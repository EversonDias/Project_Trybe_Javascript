const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let ageAnimal = { age: 0 };
  const employeeSelected = data.employees.find((people) => people.id === id);
  const idSpecieResponsible = employeeSelected.responsibleFor[0];
  const oldSpecie = data.species.find((animal) => animal.id === idSpecieResponsible).residents;
  oldSpecie.forEach((animal) => {
    if (animal.age > ageAnimal.age) {
      ageAnimal = animal;
    }
  });
  return Object.values(ageAnimal);
}

module.exports = getOldestFromFirstSpecies;
