"use strict";

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const cors = require("cors");
const { readFileSync } = require("fs");
const { join } = require("path");

const resolvers = require("./store/resolvers");
const config = require("./config");

const app = express();
const port = config.api.port;

const typeDefs = readFileSync(
  join(__dirname, "store", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());

app.use(
  "/docs",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: false,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
