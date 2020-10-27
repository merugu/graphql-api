const { gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { buildWhereClause } = require('./query-builder');
const fieldMapping = require('../resolvers/field-mapping');

const schemas = [
   './queries.graphql',
   './employee.graphql',
   './input.graphql'
];


const schema = schemas.map(file => fs.readFileSync(path.join(__dirname, file), 'utf-8'));

schema.push(buildWhereClause(fieldMapping));
//schema.push(buildSortClause(fieldMapping));

const typeDefs = gql(schema.join('\n\n'));

module.exports = typeDefs;