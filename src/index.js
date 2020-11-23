import apollo from "apollo-server-express";
const { ApolloServer, gql } = apollo;
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
