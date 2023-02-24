// login e senha
const login = "leonardo@hotmail.com"
const pass = "leonardo"

// Validação de login
const botao = document.getElementById("entrar");

botao.addEventListener("click", function logar(){
    let pegaUsuario = document.getElementById("email").value;
    let pegaSenha = document.getElementById("senha").value;

    if (pegaUsuario == login && pegaSenha == pass){

        // Se for valido entra na pagina a baixo
        location.href='Lista_de_Produtos.html'
        
        // alerta se a senha e o login incorretos
    }else{
        alert("email e senha incorretos");
}
});