var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 3,
 host : 'localhost',
     user : 'root',
  database : 'mysql',
  password : 'mysql'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM MEMBER', function(err, rows){
      if(err){
        console.log('err :'+err);
      }
      console.log('rows :'+JSON.stringify(rows));
      /*res.render('index', {title: 'MYSQL 테스트', rows :rows});*/
      connection.release();
    });
  });
  res.render('index', { title: '웹스톰' });
});

module.exports = router;
