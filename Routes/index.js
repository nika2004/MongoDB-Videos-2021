const express = require("express");
const router = new express.Router(); //instantiate express router\
const shopController = require("../Controllers/shopController");

router.get("/", shopController.getShops);
router.post("/add", shopController.createShop);
module.exports = router;
