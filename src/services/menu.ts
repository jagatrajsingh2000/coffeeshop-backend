import PrismaClient from "../lib/db";

export interface menuPayload {
  name: string;
  description: string;
  price: number;
  mood: any;
  size: any;
  sugar: string;
  ice: string;
  categoryId: string;
}
export interface categoryPayload {
  name: string;
}

class MenuService {
  public static async createMenuItem(payload: menuPayload) {
    const { name, description, price, mood, size, sugar, ice, categoryId } =
      payload;
      return PrismaClient.menuItem.create({
        data: {
          name,
          description,
          price,
          mood,
          size,
          sugar,
          ice,
          categoryId,
        },
      });
  }
 
  // private static async getUserByEmail(email: string){
  //     return PrismaClient.user.findUnique({where: {email}})
  // }
  // public static async getUserToken(payload:categoryPayload){

  // }
}
export default MenuService;
