const express = require('express');
const router = express.Router();
const tabletController = require('../controllers/tabletController');

router.get('/', tabletController.tabletZIA);

module.exports = router;