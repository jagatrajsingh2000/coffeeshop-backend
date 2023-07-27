import MenuService from "../../services/menu";
import { menuPayload, categoryPayload } from "../../services/menu"


const queries = {
    getUserToken: async (
      _: any,
      payload: menuPayload
    ) => {
      const token = await MenuService.createMenuItem( payload );
      return token;
    },
  };
const mutations = {
    createMenuProduct: async (_: any, payload: menuPayload) => {
      const token = await MenuService.createMenuItem( payload );
      return token;
      },
}

export const resolvers = { queries, mutations}