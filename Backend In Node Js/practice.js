const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suraj</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
</body>
</html>`);
res.end();
        
    }
    else if(req.url === '/home'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h2>Welcome to home page...</h2>');
        res.write('</body>');
        res.write('</html>');
    }
    else if(req.url === '/men'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h2>Welcome to men page...</h2>');
        res.write('</body>');
        res.write('</html>');
    }
    else if(req.url === '/women'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h2>Welcome to women page...</h2>');
        res.write('</body>');
        res.write('</html>');
    }
    else if(req.url === '/kids'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h2>Welcome to kids page...</h2>');
        res.write('</body>');
        res.write('</html>');
    }
    else if(req.url === '/cart'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h2>Welcome to your cart page...</h2>');
        res.write('</body>');
        res.write('</html>');
    }
});


const PORT = 3003;
server.listen(PORT, () => {
    console.log(`server run at https://localhost:${PORT}`)
});