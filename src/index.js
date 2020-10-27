const app = require('express')();
const { ApolloServer } = require('apollo-server-express');
const dataService = require('./service/data-service');

const serverComponents = require('./server')
const server = new ApolloServer(serverComponents);

// one time load of employee objects into in-memory, this should be retrived from database in realtime
dataService.init();


server.applyMiddleware({
    app,
    path: '/graphql'
});

app.listen(4000, () => {
    console.log(`Graphql server is listening on port 4000, click here to launch url http://localhost:4000${server.graphqlPath}`);
});

module.exports = app;