
/*  B"H
*/
const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
    .get("/", (req, res, next) =>{
        res.send(model.GetAll());
    })

    .get("/:user_id", (req, res, next) =>{
        res.send(model.Get(req.params.user_id));
    })

    .post("/login", (req, res, next) =>{
        const user = model.Login(req.body.handle, req.body.password);

        res.send(user);
    })

module.exports = app;