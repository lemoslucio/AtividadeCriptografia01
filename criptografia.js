function criptografar() {
    var mensagem = document.getElementById("mensagem").value;
    var mensagemCriptografada = btoa(mensagem);
    document.getElementById("mensagemCriptografada").value = mensagemCriptografada;
}

function descriptografar() {
    var mensagemCriptografada = document.getElementById("mensagemCriptografada").value;
    var mensagem = atob(mensagemCriptografada);
    document.getElementById("mensagem").value = mensagem;
}
