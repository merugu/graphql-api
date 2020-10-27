const express = require('express');
const _ = require('lodash');
const app = express();

const init = () => {
    const employees = [];
    const address1 = {
        street: 'xyz drive',
        city: 'xyz city',
        state: 'xyz state',
        postalCode: '123',
    };
    const employee1 = {
        employeeID: 1,
        name: 'Amit',
        address: [address1],
    }
    const address2 = {
        street: 'abc drive',
        city: 'abc city',
        state: 'abc state',
        postalCode: '456',
    };
    const employee2 = {
        employeeID: 2,
        name: 'Ajit',
        address: [address2],
    }
    employees.push(employee1);
    employees.push(employee2);
    console.log('Set ', JSON.stringify(employees));
    app.set('Employees', employees);
}

const getEmployeeByID = (key) => {
    console.log('Employee ID ', key.employeeID)
    const employees = app.get('Employees');
    console.log('Retrive ', JSON.stringify(employees));
    const returnEmployeeRecord = _.find(employees, (employee) => employee.employeeID == key.employeeID);
    console.log('Returning ', returnEmployeeRecord);
    return returnEmployeeRecord;
}

module.exports = {
    init,
    getEmployeeByID,

}