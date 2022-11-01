const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName) || {};
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
