const data = require('../data/zoo_data');

function generationExhibition(day) {
  const res = [];
  const animalDay = data.species.filter((animal) => animal.availability.includes(day));
  animalDay.forEach((animal) => res.push(animal.name));
  return res;
}

const calendar = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: generationExhibition('Tuesday'),
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: generationExhibition('Wednesday'),
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: generationExhibition('Thursday'),
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: generationExhibition('Friday'),
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: generationExhibition('Saturday'),
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: generationExhibition('Sunday'),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function exhibition(animal) {
  const animalType = data.species.find((species) => species.name === animal);
  return animalType.availability;
}

function getSchedule(scheduleTarget) {
  const listAnimal = Object.keys(data.hours);
  const listNameAnimal = [];
  data.species.forEach((animal) => {
    listNameAnimal.push(animal.name);
  });
  if (listNameAnimal.includes(scheduleTarget)) {
    return exhibition(scheduleTarget);
  }
  if (listAnimal.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: calendar[scheduleTarget],
    };
  }

  return calendar;
}

module.exports = getSchedule;
