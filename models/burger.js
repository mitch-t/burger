// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {

  selectAll: function(callback){
    orm.selectAll(function(result){
      callback(result);
    });
  },

  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(result){
      callback(result);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(result){
      callback(result);
    });
  }
};

module.exports = burger;
