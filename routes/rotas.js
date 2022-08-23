const express = require('express');
const app= express();
const router = express.Router();
const user= require("../models/usuario");
const UserService= require("../services/userService");
var userService= new UserService();



/*
Create
Retrieve    
Update
Delete
*/



router.get(`/user`, (req,res)=>{
    res.json(userService.buscarTodos());
});

router.post(`/user`, (req, res)=>{
    let usuario= new user(req.body.nome, req.body.email, req.body.senha);
    userService.adicionar(usuario);
    res.json(usuario)
    console.log(`Request type:${req.method}`)
})

router.put(`/user`, (req,res)=>{
    userService.alterar(req.body);
    res.json("Alterado com sucesso!")
});

router.delete(`/user`, (req, res)=>{
    userService.deletar(req.body.email);
    res.json("Deletado com sucesso!")
})

module.exports=router;