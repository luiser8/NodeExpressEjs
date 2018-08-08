var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('product/index', { products: [
      {
        'Id':1,
        'Name': 'Producto 1'
      },{
        'Id':2,
        'Name': 'Producto 2'
    },{
      'Id':3,
      'Name': 'Producto 3'
    }]
  });
});

router.get('/:id', function(req, res, next){
  console.log(req.params.id);
  res.render('product/editar', {'Id': req.params.id});
});

module.exports = router;