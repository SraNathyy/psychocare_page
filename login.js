function logar(){ // FUNÇÃO LOGAR
    // VARIAVEIS
    var login = document.getElementById('email').value // VARIAVEL LOGIN RECEBE O QUE FOR DIGITADO NO INPUT LOGIN
    var senha = document.getElementById('password').value // VARIAVEL LOGIN QUE RECEBE O QUE FOR DIGITADO  NO INPUT SENHA
    // VALIDAÇÃO DO USUÁRIO E SENHA

    if(login == "senai" && senha == "141223") {
        alert('Login efetuado com sucesso!'); // MOSTRA MENSAGEM

        location.href = "inicio.html"; // CHAMA A PÁGINA "HOME"
    }

    else{
        alert('Usuário ou senha incorretos.'); // MOSTRA MENSAGEM
        document.getElementById('email').value=''; // LIMPA O CAMPO
        document.getElementById('password').value=''; // LIMPA O CAMPO
        document.getElementById('email').autofocus=''; // POSICIONA O CURSOR NO INPUT DE LOGIN
    }
}