const config = require('config');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers').resolvers;

const serverComponents = {
    typeDefs,
    resolvers,
    playground: {}
};

module.exports = serverComponents;


