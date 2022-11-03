const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const cont = {};
    data.species.forEach((numberOfAnimals) => {
      cont[numberOfAnimals.name] = numberOfAnimals.residents.length;
    });
    return cont;
  }
  if (animal.specie && animal.sex === undefined) {
    const { specie } = animal;
    const specieSelected = data.species.find((animalSpecie) => animalSpecie.name === specie);
    return specieSelected.residents.length;
  }
  const { specie, sex } = animal;
  const specieSelected = data.species.find((animalSpecie) => animalSpecie.name === specie);
  return specieSelected.residents.filter((animalSpecie) => animalSpecie.sex === sex).length;
}

module.exports = countAnimals;
