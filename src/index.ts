import "reflect-metadata";
import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import Router from "./routes"

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(Router);

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    })
    .catch((error) => console.log(error))
