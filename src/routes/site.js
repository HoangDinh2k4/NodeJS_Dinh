const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search-hoangdinh', siteController.show);
router.use('/', siteController.home);

module.exports = router;