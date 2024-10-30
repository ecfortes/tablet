const express = require("express");
const router = express.Router();
const tabletController = require("../controllers/tabletController");

router.get("/:id", tabletController.tabletZIA);

module.exports = router;
