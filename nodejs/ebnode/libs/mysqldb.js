var mysql = require('mysql');
var config = require('../configs/config');

var pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : config.db.development.host,
    user     : config.db.development.user,
    password : config.db.development.password,
    database : config.db.development.database,
    debug    :  false
});

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};