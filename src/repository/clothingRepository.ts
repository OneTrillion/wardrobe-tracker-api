import { Clothing } from "../entity/clothing";
import { AppDataSource } from "../data-source";
import { IClothingPayload } from "src/interfaces/IClothingPayload";

export const getClothing = async () :Promise<Array<Clothing>> => {
    const clothingRepository = AppDataSource.getRepository(Clothing);
    return clothingRepository.find();
}

export const addClothing = async (payload: IClothingPayload) :Promise<Clothing> => {
    const clothingRepository = AppDataSource.getRepository(Clothing);
    const clothing = new Clothing;
    return clothingRepository.save({
        ...clothing,
        ...payload
    });
}

export const removeClothing = async (id: number) :Promise<Clothing | null> => {
    const clothingRepository = AppDataSource.getRepository(Clothing);

    const clothingToRemove = await clothingRepository.findOneBy({
        id: id,
    });

    if (!clothingToRemove) return null;
 
    return clothingRepository.remove(clothingToRemove);
}
