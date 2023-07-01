import { IClothingPayload } from "src/interfaces/IClothingPayload";
import { Get, Route, Tags, Post, Delete, Body, Path } from "tsoa";
import { Clothing } from "../entity/clothing";
import { getClothing, addClothing, removeClothing } from "../repository/clothingRepository";

@Route("clothing")
@Tags("Clothing")
export default class ClothingController {

  @Get("/api/v1/clothing")
  public async getClothing(): Promise<Array<Clothing>> {
    return getClothing();
  }

  @Post("/api/v1/clothing")
  public async addClothing(@Body() body: IClothingPayload): Promise<Clothing> {
    return addClothing(body);
  }

  @Delete("/api/v1/clothing/:id")
  public async removeClothing(@Path() id: string): Promise<Clothing | null> {
    return removeClothing(Number(id));
  }
}
