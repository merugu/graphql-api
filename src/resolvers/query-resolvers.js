const dataService = require('../service/data-service');

const queryResolvers = {
    Query: {
        getEmployeeByID: async (parent, { employeeID }) => dataService.getEmployeeByID({ employeeID }),
        findEmployee: async (parent, { query }) => {
            //json should be filtered as per the query where clause; will update here after configuring prometheus
            console.log(JSON.stringify(query));
        }
    }
}

module.exports = queryResolvers;