const data = require('../data/zoo_data');

const wantedSpecies = (props) => {
  const infoAnimal = {
    species: [],
    locations: [],
  };
  const species = props.map((id) => data.species.find((animal) => animal.id === id));
  species.forEach((animal) => {
    infoAnimal.species.push(animal.name);
    infoAnimal.locations.push(animal.location);
  });
  return infoAnimal;
};

const createInfo = (props) => {
  const infoSpecies = wantedSpecies(props.responsibleFor);
  return ({
    id: props.id,
    fullName: `${props.firstName} ${props.lastName}`,
    species: infoSpecies.species,
    locations: infoSpecies.locations,
  });
};

function getEmployeesCoverage(props) {
  try {
    if (!props) {
      const listEmployee = data.employees.map((people) => createInfo(people));
      return listEmployee;
    }
    if (props.name) {
      const employees = data.employees.find((people) =>
        people.firstName === props.name
        || people.lastName === props.name);
      return createInfo(employees);
    }
    if (props.id) {
      const employees = data.employees.find((people) => people.id === props.id);
      return createInfo(employees);
    }
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
