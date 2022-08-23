class usuarioRepoArray{
    constructor(){
    
        this.usuarios=[];
    };

    adicionar(usuario){
        this.usuarios.push(usuario);
    };

    deletar(email){
      this.usuarios.findIndex((o)=>{
        if (o.email!==email){
            console.log("Email diferente!")
        }else if(o.email===email){
            console.log("email igual")
            var identificador= this.usuarios.findIndex((o)=>o.email==email)
            this.usuarios.splice(identificador, 1)
        }
      })
    };
        

    alterar(usuario){
        this.usuarios.forEach((o)=>{
            if(usuario.email==o.email){
                /*if(usuario.senha){
                    o.senha=usuario.senha
                }

                if(usuario.nome){
                    o.nome=usuario.nome
                }*/
                o.senha=usuario.senha ? usuario.senha: o.senha;
                o.nome=usuario.nome ? usuario.nome: o.nome;
            }
        })

    };

    buscarTodos(){
        return this.usuarios;
    };
};

module.exports= usuarioRepoArray;