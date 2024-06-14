const express = require('express');
const router = express.Router();

const bongdaController = require('../app/controllers/BongdaController');

router.use('/:slug', bongdaController.show);
router.use('/', bongdaController.index);

module.exports = router;