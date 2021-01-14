const router = require('express').Router();

// require the controller
const newsCtrl = require('../../controllers/newsAPI');

router.post('/get-news', newsCtrl.getNews);

module.exports = router;