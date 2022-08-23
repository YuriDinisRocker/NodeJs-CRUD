const http = require('http');
const fs= require("fs");
const path= require("node:path");
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

  if(req.url=="/"){
    const file= path.join(__dirname, "public", "home.html");
    fs.readFile(file, "utf-8", (err, data)=>{
        res.end(data)
    });
  }else{
    const home= path.join(__dirname, "public", req.url)
    fs.readFile(home, "utf-8", (err, data)=>{
       res.end(data)
      console.log(req.url)
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});