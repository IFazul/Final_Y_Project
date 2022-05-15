const express = require("express");

const adminControllers = require("../controllers/admin");

const router = express.Router();

router.route("/add-product").get(adminControllers.getAddProduct).post(adminControllers.postAddProduct);

module.exports = router; 