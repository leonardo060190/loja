
function logar() {
    // login e senha
    const login = "leonardo@hotmail.com"
    const pass = "leonardo"

    let pegaUsuario = document.getElementById("email").value;
    let pegaSenha = document.getElementById("senha").value;

    if (pegaUsuario == login && pegaSenha == pass) {
        return true;
        // alerta se a senha e o login incorretos
    } else {
        alert("email ou senha incorretos! Tente novamente.");
        return false;
    };
};


function cadastrarProdutos() {

    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    console.log(sexo)



    let produtos = [];

    let codigo = document.getElementById("inCodigo").value;
    let nome = document.getElementById("inNome").value;
    let categoria = document.getElementById("inCategoria").value;
    let preco = document.getElementById("inPreco").value;
    let ativo = document.querySelector('input[name="inAtivo"]:checked').value;
    let tamanhos = ""

    let tamanhoP = document.getElementById("tamanhoP").checked;
    let tamanhoM = document.getElementById("tamanhoM").checked;
    let tamanhoG = document.getElementById("tamanhoG").checked;
    let tamanhoGG = document.getElementById("tamanhoGG").checked;


    if(tamanhoP){
        tamanhos += " P , ";
    }
    if(tamanhoM){
        tamanhos += " M , ";
    }
    if(tamanhoG){
        tamanhos += " G , ";
    }
    if(tamanhoGG){
        tamanhos += " GG ";
    }

    if (sessionStorage.getItem("vetor_produtos")) {
        produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));

    };


    let descricao_do_Produto = {};
    descricao_do_Produto = {
        Codigo: codigo,
        Nome: nome,
        Categoria: categoria,
        Preco_de_Venda: preco,
        Tamanho_Disponivel: tamanhos,
        Ativo: ativo
    };

    produtos.push(descricao_do_Produto);
    sessionStorage.setItem("vetor_produtos", JSON.stringify(produtos));

    return true;


   

};



function listarProdutos() {
    let dados = document.getElementById("colunas");
    let registros = document.getElementsByTagName("tbody")[0];
    let produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));


    for (let i = 0; i < produtos.length; i++) {

        let novaLinha = document.createElement("tr");

        registros.appendChild(novaLinha);

        novaLinha.innerHTML = dados.innerHTML;

        for (let indice in novaLinha.childNodes) {

            let celula = novaLinha.childNodes[indice];

            if (celula.nodeName == "TD") {

                switch (celula.dataset.column) {
                    case "Codigo":
                        celula.innerHTML = produtos[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = produtos[i]["Nome"];
                        break;
                    case "Categoria":
                        celula.innerHTML = produtos[i]["Categoria"]
                        break;
                    case "Preco_de_Venda":
                        celula.innerHTML = produtos[i]["Preco_de_Venda"];
                        break;
                    case "Tamanho_Disponivel":
                        celula.innerHTML = produtos[i]["Tamanho_Disponivel"];
                        break;
                    case "Ativo":
                        celula.innerHTML = produtos[i]["Ativo"];
                        break;

                };
            };
        };
    };
};


function cadastrar_clientes() {

    let clientes = [];

    let codigo = document.getElementById("inCodigo").value;
    let nome = document.getElementById("NomeCliente").value;
    let cpf = document.getElementById("inCPF").value;
    let dataNacimento = document.getElementById("inData_Nascimento").value;
    let telefone = document.getElementById("inTelefone").value;
    let email = document.getElementById("inEmail").value;

    if (sessionStorage.getItem("vetor_Clientes")) {
        clientes = JSON.parse(sessionStorage.getItem("vetor_Clientes"));

    };

    let descricao_do_Cliente = {};
    descricao_do_Cliente = {
        Codigo: codigo,
        Nome: nome,
        CPF: cpf,
        Data_de_Nascimento: dataNacimento,
        Telefone: telefone,
        Email: email

    };

    clientes.push(descricao_do_Cliente);
    sessionStorage.setItem("vetor_Clientes", JSON.stringify(clientes));

    return true;

};

function listarClientes() {

    let dados = document.getElementById("colunas");
    let registros = document.getElementsByTagName("tbody")[0];
    let clientes = JSON.parse(sessionStorage.getItem("vetor_Clientes"));

    for (let i = 0; i < clientes.length; i++) {

        let novaLinha = document.createElement("tr");

        registros.appendChild(novaLinha);

        novaLinha.innerHTML = dados.innerHTML;

        for (let indice in novaLinha.childNodes) {

            let celula = novaLinha.childNodes[indice];

            if (celula.nodeName == "TD") {

                switch (celula.dataset.column) {
                    case "Codigo":
                        celula.innerHTML = clientes[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = clientes[i]["Nome"];
                        break;
                    case "CPF":
                        celula.innerHTML = clientes[i]["CPF"]
                        break;
                    case "Data_de_Nascimento":
                        celula.innerHTML = clientes[i]["Data_de_Nascimento"];
                        break;
                    case "Telefone":
                        celula.innerHTML = clientes[i]["Telefone"];
                        break;
                    case "Email":
                        celula.innerHTML = clientes[i]["Email"];
                        break;
                };
            };
        };
    };
;

}


// Pagina de menu
