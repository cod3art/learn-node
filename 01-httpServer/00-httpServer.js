const http = require('http');

const server = http.createServer();

server.on("request", function(req, res){
	var productList = [
			{
				name: "苹果",
				price: 8.8
			},			
			{
				name: "香蕉",
				price: 18.8
			},			
			{
				name: "柚子",
				price: 29.4
			},
		]
	switch(req.url) {

		case '/product':
			res.end(JSON.stringify(productList))
			break;
		case '/login':
			res.end('登陆页')
			break;
		case "/":
			res.end("首页")
			break;
		default:
			res.end("404 Not Found!")
	}
})


// 3.监听端口号

server.listen("8080",function() {
	console.log("服务器启动成功，可以访问了")
})
