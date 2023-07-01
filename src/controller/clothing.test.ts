import * as ClothingRepository from "../repository/clothingRepository";
import ClothingController from "./clothingController";
import type { IClothingPayload } from "../interfaces/IClothingPayload";

const mockClothing = [
    {
        id: 123123,
        name: "uniqlo",
        color: "green",
        category: "shirt"
    },
    {
        id: 456456,
        name: "h&m",
        color: "blue",
        category: "pants"
    }
];

const mockClothingPayload: IClothingPayload = { 
    name: "uniqlo",
    color: "green",
    category: "shirt"
};

afterEach(() => {
    jest.resetAllMocks();
});

describe("ClothingController", () => {
    describe("getClothing", () => {
        test("test no clothing found", async () => {
            const spy = jest.spyOn(ClothingRepository, "getClothing")
                            .mockResolvedValueOnce([]);
            const controller = new ClothingController();
            const clothing = await controller.getClothing();
            expect(clothing).toEqual([]);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("test get clothing success", async () => {
            const spy = jest.spyOn(ClothingRepository, "getClothing")
                            .mockResolvedValueOnce(mockClothing);
            const controller = new ClothingController();
            const clothing = await controller.getClothing();
            expect(clothing).toEqual(mockClothing);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    // TODO: add unhappy case
    describe("addClothing", () => {
        test("test save clothing", async () => {
            const spy = jest.spyOn(ClothingRepository, "addClothing")
                            .mockResolvedValueOnce(mockClothing[0])
            const controller = new ClothingController();
            const clothing = await controller.addClothing(mockClothingPayload);
            expect(clothing).toEqual(mockClothing[0]);
            expect(clothing).toMatchObject(mockClothingPayload);
            expect(spy).toHaveBeenCalledWith(mockClothingPayload);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    })
})
