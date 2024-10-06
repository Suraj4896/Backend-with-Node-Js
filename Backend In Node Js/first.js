
//simple node server
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(res);
    console.log("hello suraj");
    process.exit();  //close event loop
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server run at https://localhost:${PORT}`)
});