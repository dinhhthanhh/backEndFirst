import express from "express"
import path from "path";

let configViewEngine = (app) => {
    app.use(express.static(".src/public"));
    app.set("view engine", "ejs");
    app.set("views", path.join("G:", "BE", "views"));
}

export default configViewEngine;