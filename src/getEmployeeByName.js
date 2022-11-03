const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const name = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return name || {};
}

module.exports = getEmployeeByName;
