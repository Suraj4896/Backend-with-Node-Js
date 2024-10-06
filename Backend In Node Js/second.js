
//simple node server
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.methods, req.headers);

    //sending responses to client
    if(req.url === '/'){    //home rout
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action=/products method="POST">');
        res.write('<input type="text" id="name" name="name" placeholder="enter your name"><br><br>');
        res.write('<label for="gender">Gender:</label>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        return res.end();
    }else if(req.url === '/products'){  //products rout
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>my product page</title></head>');
        res.write('<body><h2>here are some products to buy....</h2></body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/wishlist'){  //wishlist rout
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>my wishlist page</title></head>');
        res.write('<body><h2>here is my wishlist</h2></body>');
        res.write('</html>');
        return res.end();
    }
    

});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`server run at https://localhost:${PORT}`)
});