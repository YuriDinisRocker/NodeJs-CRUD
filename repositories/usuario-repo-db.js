const mongoose = require('mongoose');
const Usuario= require("../models/usuario");

//Definindo o modelo (estrutura da collection)
const UsuarioSchema= mongoose.Schema(
    {
        name:String, 
        email:String, 
        senha:String,
        dataCadastro:Date
    }
);
//Objeto que contém os dados
UsuarioSchema.loadClass(Usuario);

module.export= mongoose.module("Usuario", UsuarioSchema);