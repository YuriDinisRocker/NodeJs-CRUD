const express= require("express");
const app=express();
const bolas=process.env.PORT || 3000;
const hostname= "localhost";
const path= require("node:path");
const Routes= require("./routes/rotas")
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yuri:bumbumloco@cluster0.yyygxfq.mongodb.net/?retryWrites=true&w=majority');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());


app.use(Routes);


app.listen(bolas, (err, data)=>{
    console.log(`Server aberto em > http://${hostname}:${bolas}/`)
    if(err){
        console.log(`Erro ao abrir o server`)
    }
})