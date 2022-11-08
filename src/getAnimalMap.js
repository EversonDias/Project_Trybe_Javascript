const data = require('../data/zoo_data');

function createListAnimal(props) {
  const list = data.species.filter((elem) => elem.location === props).map((animal) => animal.name);
  return list;
}

function createListAnimalName(props) {
  const species = data.species.filter((animal) => animal.location === props);
  const listAnimal = [];
  species.forEach((animal, index) => {
    listAnimal.push({
      [animal.name]: animal.residents.map((animalResidents) => animalResidents.name),
    });
  });
  return listAnimal;
}

function listAnimalName() {
  return (
    {
      NE: createListAnimalName('NE'),
      NW: createListAnimalName('NW'),
      SE: createListAnimalName('SE'),
      SW: createListAnimalName('SW'),
    }
  );
}

function wantedAllAnimal() {
  return (
    {
      NE: createListAnimal('NE'),
      NW: createListAnimal('NW'),
      SE: createListAnimal('SE'),
      SW: createListAnimal('SW'),
    }
  );
}

function createList(props) {
  return (
    {
      NE: props.NE.map((animal) =>
        ({ [Object.keys(animal)]: animal[Object.keys(animal)].sort() })),
      NW: props.NW.map((animal) =>
        ({ [Object.keys(animal)]: animal[Object.keys(animal)].sort() })),
      SE: props.SE.map((animal) =>
        ({ [Object.keys(animal)]: animal[Object.keys(animal)].sort() })),
      SW: props.SW.map((animal) =>
        ({ [Object.keys(animal)]: animal[Object.keys(animal)].sort() })),
    }
  );
}

function listAnimalSort(props, name) {
  if (name) {
    createList(props);
  }
  return (
    {
      NE: props.NE,
      NW: props.NW,
      SE: props.SE,
      SW: props.SW,
    }
  );
}

const listeLocation = (location, props) => {
  const species = data.species.filter((animal) => animal.location === location);
  const listAnimal = [];
  species.forEach((animal) => (
    listAnimal.push({
      [animal.name]: animal.residents.filter((animalSex) =>
        animalSex.sex === props).map((nameAnimal) => nameAnimal.name),
    })
  ));
  return listAnimal;
};

function listAnimalSex(props, name) {
  if (name) {
    const liste = {
      NE: listeLocation('NE', props),
      NW: listeLocation('NW', props),
      SE: listeLocation('SE', props),
      SW: listeLocation('SW', props),
    };

    return liste;
  }
  return wantedAllAnimal();
}

function filterOptions(props, options) {
  let listAnimal = props;
  if (options.includeNames) {
    listAnimal = listAnimalName();
  }
  if (options.sex) {
    listAnimal = listAnimalSex(options.sex, options.includeNames);
  }
  if (options.sorted) {
    listAnimal = listAnimalSort(listAnimal, options.includeNames);
  }
  return listAnimal;
}

function getAnimalMap(options) {
  let listAnimal = wantedAllAnimal();
  if (options !== undefined) {
    listAnimal = filterOptions(listAnimal, options);
  }
  return listAnimal;
}

module.exports = getAnimalMap;
