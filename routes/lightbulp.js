var express = require('express');
var router = express.Router();
var url = "mongodb://localhost:27017/";
var getData = require('../database/getData');
var getDataById = require('../database/getDataById');

/* GET pærer page. */
router.get('/', async function(req, res, next) {
  result = await getData.getData();
  res.render('lightbulp', {bulbs: result});
});

router.get('/bulbs', async (req, res) => {
  lightbulbs = await getData.getData();
  res.json(lightbulbs);
});

router.get('/bulbs/:id', async (req, res) => {
  console.log("id'et er : " + id + " før vi henter det"); 
  lightbulb = await getDataById.getDataById(req.params.id);
  console.log("id'et er nu: " + id + " efter det er hentet");
  res.json(lightbulb);
});

router.post('/bulbs', async (req, res) => {
  lightbulps.create(req['body'])
  res.send("Data indsat");

});

module.exports = router;