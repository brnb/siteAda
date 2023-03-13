document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

var nome = document.getElementById("name").value
var email = document.getElementById("email").value
var tel = document.getElementById("tel").value

function validaFormulario (){
  if (nome != "" && email != "" && tel != ""){
      alert("Tudo certo! Você receberá as novidades por email!");
  }else{
    alert("Por favor, preencha os campos nome, email e telefone");
  }
} 