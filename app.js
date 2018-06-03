const HTTP = require('http');
const PORT = 3000;
const CONTROLLERS = require('./controllers');

const SERVER = HTTP.createServer((req, res) => {
    for (let controller of CONTROLLERS) {
        if (!controller(req, res)) {
            break;
        }
    }
});

SERVER.listen(PORT);

console.log(`Server is listening on port:${PORT}`);