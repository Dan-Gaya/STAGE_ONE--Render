const http = require('http');
const app = require('./App');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`local server started at http://localhost:${PORT}`)

});


module.exports = app;