const http = require('http')


let users = [
    {id:11, name: 'dalong'},
    {id:22, name: 'dalong2'},
    {id:33, name: 'dalong3'},
]
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') //任意域名都可以访问,或者基于我请求头里面的域
    res.setHeader('Access-Control-Allow-Credentials', true)//允许后端发送cookie
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')//允许支持的请求方式
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')//设置请求头格式和类型
    if (req.url == '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }
}).listen(3000, () => {
    console.log('端口启动：3000');
})