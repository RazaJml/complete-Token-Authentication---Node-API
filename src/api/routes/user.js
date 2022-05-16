const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get("/", (req, res) => {
    User.findAll()
        .then(res_back => {
            res.json(res_back);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post("/", (req, res) => {
    const data = req.body;
    User.create(data)
        .then(res_back => {
            console.log(res_back);
            res.json(res_back)
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(res_back => {
            res.json(res_back);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;
