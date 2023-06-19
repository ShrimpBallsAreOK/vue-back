const http = require('http')


let users = [
    {id:1, name: 'dalong'},
    {id:2, name: 'dalong2'}
]
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url == '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }
}).listen(3000, () => {
    console.log('端口启动：3000');
})