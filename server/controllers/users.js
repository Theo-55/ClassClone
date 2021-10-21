const express = require("express");

const app = express.Router();

app

    .get("/", (req, res, next) =>{
        res.send([{name: "Theo"} ]);
    })

    module.exports = app;