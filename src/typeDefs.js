import apollo from "apollo-server-express";
const { gql } = apollo;

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
