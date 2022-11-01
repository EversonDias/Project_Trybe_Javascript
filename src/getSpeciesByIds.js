const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
return ids.map((event) => data.species.find((animal) =>animal.id === event))
}

module.exports = getSpeciesByIds;
