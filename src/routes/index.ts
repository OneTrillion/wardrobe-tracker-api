import express from "express";

const router = express.Router();

router.get("/health", (_req, res) => {
    return res.send("ok");
});

export default router;
