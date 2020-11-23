import { Cat } from "./models/Cat.js";

export const resolvers = {
  Query: {
    hello: () => "hello",
    cats: () => Cat.find(),
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const cat = new Cat({ name });
      await cat.save();
      return cat;
    },
  },
};
