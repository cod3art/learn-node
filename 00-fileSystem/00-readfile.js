const fs = require('fs');

fs.readFile('./readme.txt',function(error,data){
	console.log('data', data)
	console.log('error',error)
	console.log(data.toString())
});


