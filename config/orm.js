//mysql connection
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      arr.push(key + '=' + ob[key]);
    };
    return arr.toString();

  };
// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      var queryString = 'SELECT * FROM ' + tableInput;

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    create: function(table, col, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += col.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
       connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    update: function(table, objColVals, condition, cb){
      var queryString = 'UPDATE ' + table;
      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      console.log(queryString);

      connection.query(queryString, function(err, result){
        if(err) throw err;
        cb(result);
      });
    },
  };
    //export the orm object for the model burger.js
    module.exports = orm;