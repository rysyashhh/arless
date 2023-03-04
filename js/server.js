const http = require('http');

// Формируем запрос
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};


// ОТправляем запрос

const req = http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk;
    });

    /// Завершаем запрос

    res.on('end', ()=> {
        console.log('Body:', JSON.parsel(date))
    })

    .on('erorr', (err) => {
        console.log('Error:',err)
    }).end();
});


// const host = 'localhost';

// htt://localhost:8000

//const requestListener = function (req, res) {
//    res.writeHead(200);
//    res.end("hello, server working well!");
//};

// onst server = http.createServer(requestListener);
// server.listenerCount(port,host, () => {
//    console.log(`Сервер запущен на http//${host}:${port}`)
// });