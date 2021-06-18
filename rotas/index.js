const express = require("express");
const router = express.Router()
//require ("express").Router()

router.use("/", require("./postagens"))

module.exports = router