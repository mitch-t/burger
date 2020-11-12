var mysql = require("mysql");
var connection;
//JAWSDB_URL='mysql://vp2681doft4pi9b5:arz16nedukrzqnii@nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ydyz362rfmlkfice'
// For Heroku Deployment vs. Local MySQL Database
//if(process.env.JAWSDB_URL){
 // connection = mysql.createConnection(process.env.JAWSDB_URL);
//}
//else{
  connection = mysql.createConnection({
    host     : "nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user     : "vp2681doft4pi9b5",
    password : "arz16nedukrzqnii", 
    database : "ydyz362rfmlkfice" 
  });



// Export the Connection
module.exports = connection;