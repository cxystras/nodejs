var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'test-tls.c18pllkhniya.eu-west-1.rds.amazonaws.com',
  user     : '',
  password : '',
  database : 'test'
});

connection.connect();
connection.query('set autocommit=0',function(err,rows,fields){
  if (!err)
    console.log(rows);
  else
    console.log('Error setting autocommit off');
});

connection.query('show variables like "autocommit"',function(err,rows,fields){
  if (!err)
    console.log(rows);
  else
    console.log('Error showing autocommit status');
});

for (var i=0; i<10;i++){
connection.query('show variables like "%ssl%"', function(err, rows, fields) {
  if (!err)
    console.log()+
    console.log(rows)+
    console.log();
  else
    console.log('Error while performing Query.');
});
};

setTimeout(function() {console.log('Sleeping for 3 sec');},3000);

connection.query('set autocommit=1',function(err,rows,fields){
  if (!err)
    console.log(rows);
  else
    console.log('Error setting autocommit on');
});

connection.query('show variables like "autocommit"',function(err,rows,fields){
  if (!err)
    console.log(rows);
  else
    console.log('Error showing autocommit status');
});

connection.query('show status like "%ssl%"', function(err,rows,fields) {
  if (!err)
    console.log()+
    console.log(rows);
   // console.log();
  else
    console.log('Error while performing Query 2.');
});

connection.end();
