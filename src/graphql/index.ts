import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Menu } from "./menuItems";
async function createApolloGraphqlServer(){
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query {
            ${User.queries}
        }
        type Mutation {
            ${User.mutation}
            ${Menu.mutation}
        }
        `, //Schema
        resolvers: {
            Query: {
                ...User.resolvers.queries
            },
            Mutation: {
                ...User.resolvers.mutations,
                ...Menu.resolvers.mutations
            }
        }
    });
    await gqlServer.start();
    return gqlServer
}
export default createApolloGraphqlServer;