
function logar(){
    // login e senha
    const login = "leonardo@hotmail.com"
    const pass = "leonardo"

    let pegaUsuario = document.getElementById("email").value;
    let pegaSenha = document.getElementById("senha").value;

    if (pegaUsuario == login && pegaSenha == pass){
         return true;
        // alerta se a senha e o login incorretos
    }else{
        alert("email ou senha incorretos! Tente novamente.");
            return false;
};
};