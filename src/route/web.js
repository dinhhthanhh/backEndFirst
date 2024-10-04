import express from "express";
import homeController from "../controllers/homeController.js";

let router = express.Router();

const initWebRoutes = (app) => {
    router.get("/",homeController.getHomePage);

    router.get('/rank', (req, res) => {
        return res.send('Thanh dep trai');
    });

    return app.use("/", router);
}

export default initWebRoutes;