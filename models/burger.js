//import the orm to create functions that will interact with the database
var orm = require("../config/orm.js");



var burgers = {
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('burgers', col, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

// var burgers = {
//     all: function(cb) {
//         orm.all("burgers", function(res) {
//             cb(res);
//         });
//     }, 
//     //the variables cols and vals are arrays
//     create: function(col, vals, cb) {
//         orm.create("burgers", col, vals, function(res) {
//             cb(res);
//         });
//     },
//     update: function(objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     }
// };

//export the database functions for the controller 
module.exports = burgers;





