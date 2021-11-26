var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Olá Nodemon!');
});

router.get('/newusers', function (req, res, next) {
  res.send('Novo(a) aqui? Seja bem vindo(a)!');
});

module.exports = router;
