// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){
      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }
};

module.exports = burger;