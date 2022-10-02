// const express  = require("express");
// const app = express();
const fs = require("fs");
const http = require("http");
const path = require("path")


const server = http.createServer(function(reg,res){
    var filePath = '.'+reg.url;

    if(filePath == './'){
        filePath = './index.html';
    }
    var extrname = path.extname(filePath);
    var contentType = 'text/html';
    switch(extrname){
        case '.css':
            contentType = 'text/css';
            break;
        case '.css':
            contentType = 'text/javascript';
            break;
    }
    {
        fs.readFile(filePath,function(err,pgRes){
            if(err){
                res.writeHead(404);
                res.write("Eror");
            }
            else{
                res.writeHead(200,{'Content-Type':contentType});
                res.write(pgRes,'utf-8');
            }
            res.end();
        });
    }
})
server.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
// app.use(express.static("assets"));

// app.get('/',function(req,res){
//     res.render("index.ejs")
    
// });
// app.get('/project1',function(req,res){

// });


// app.listen(3000,() => console.log("is running on 80"));