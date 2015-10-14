var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '10.3.9.10',
	user: 'enbacdev',
	password: 'UK1XD2yclgtxOAkgiDg2uX',
	database: 'enbac'
});
connection.connect();
connection.query("SELECT * FROM app_contacts limit 10",function(err,rows,fields){
	if(!err)
		console.log("The solution is: ", rows);
	else
		console.log("Error when performing query");
	
});
connection.end();
