const fs = require('fs');

fs.writeFile('./hello.txt', '你好，Node.js!', function(error){
	if(error) {
	   console.log('写入文件失败！')
	}else {
	   console.log('写入文件成功！')
	}

})
