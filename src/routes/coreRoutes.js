const express = require('express');
const router = express.Router();
console.log("rotuer", router, express);
const CoreManager = new (require('./../managers/coreManager'))();

router.get('/init', CoreManager.initApp);

module.exports = router;