import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4udult30thr01uo5zcfh54p/master",
  cache: new InMemoryCache(),
});
