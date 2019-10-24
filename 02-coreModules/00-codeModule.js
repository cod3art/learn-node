const os = require('os')
const path = require('path')

// 获取当前机器的 CPU 信息

const cpuInfo = os.cpus();

console.log(cpuInfo);

// 获取当前机器的内存信息
const memInfo = os.totalmem()

console.log(memInfo)

// 获取路径中扩展名的部分

const extName = path.extname('/User/hang/Desktop/node.js')

console.log(extName)
