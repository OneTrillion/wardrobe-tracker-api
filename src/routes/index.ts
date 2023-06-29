import express from "express";
import ClothingController from "src/controller/clothingController";

const router = express.Router();

router.get("/health", (_req, res) => {
    return res.send("ok");
});

router.get("/api/v1/clothing", async (_req, res) => {
    const controller = new ClothingController();
    const clothing = await controller.getClothing();
    return res.send(clothing);
})

router.post("/api/v1/clothing", async (req, res) => {
    const controller = new ClothingController();
    const clothing = await controller.addClothing(req.body);
    return res.send(clothing);
})

router.delete("/api/v1/clothing/:id", async (req, res) => {
    const controller = new ClothingController();
    const clothing = await controller.removeClothing(req.params.id);
    if (!clothing) res.status(404).send({message: `no clothing with id: ${req.params.id} found`})
    return res.send(clothing);
})


export default router;
