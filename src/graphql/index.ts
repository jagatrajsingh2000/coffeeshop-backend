import { ApolloServer } from "@apollo/server";

async function createApolloGraphqlServer(){
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query {

        }
        type Mutation {

        }
        `, //Schema
        resolvers: {
            Query: {

            },
            Mutation: {

            }
        }
    });
    await gqlServer.start();
    return gqlServer
}