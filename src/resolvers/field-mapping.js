const fieldMapping = {
    postalCode: {
        path: 'employee.address.postalCode',
        type: 'String',
        condition: 'match',
    },
    city: {
        path: 'employee.address.city',
        type: 'String',
        condition: 'match',
    },
    street: {
        path: 'employee.address.street',
        type: 'String',
        condition: 'match',
    },
    state: {
        path: 'employee.address.state',
        type: 'String',
        condition: 'match',
    },
    name: {
        path: 'employee.name',
        type: 'String',
        condition: 'match',
    },
}

module.exports = fieldMapping;