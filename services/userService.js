const usuarioRepoArray= require("../repositories/usuario-repo-array")

class userService{
    constructor(){
    
        this.usuariosRepo=new usuarioRepoArray();
    };

    adicionar(usuario){
        this.usuariosRepo.adicionar(usuario);
    };

    deletar(email){
      this.usuariosRepo.deletar(email)
    };
        

    alterar(usuario){
        this.usuariosRepo.alterar(usuario)
    };

    buscarTodos(){
        this.usuariosRepo.buscarTodos();
    };
};

module.exports=userService;