const express = require("express");

const usersController = require("../controllers/shops");

const router = express.Router();

router.get("/",usersController.getIndex);

module.exports = router;