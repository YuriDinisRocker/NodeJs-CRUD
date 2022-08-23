const fs= require("fs");
const path= require("node:path");

const arq=path.join(__dirname, "public", "home.html");
fs.readFile(arq, "utf8", (err, data)=>{
    if(err){
        console.log(`Ouve um erro no caminho:${err}`)
    };
    console.log(`sucesso ao entrar: ${data}`);
})


