const express = require("express");
const router = express.Router();
const tabletController = require("../controllers/tabletController");

router.get("/", tabletController.inicial);
router.get("/teste", tabletController.tabletZIAteste);
router.get("/:id", tabletController.tabletZIA);

module.exports = router;
