$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});

$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
});

$(document).ready(function(){
    $('#cep').mask('00000-000');
});

function validarForm() {
var nome = document.getElementById("nome").value.trim();
var email = document.getElementById("email").value.trim();
var telefone = document.getElementById("telefone").value.trim();
var rua = document.getElementById("rua").value.trim();
var numero = document.getElementById("numero").value.trim();
var complemento = document.getElementById("complemento").value.trim();
var bairro = document.getElementById("bairro").value.trim();
var cidade = document.getElementById("cidade").value.trim();
var estado = document.getElementById("estado").value.trim();
var cep = document.getElementById("cep").value.trim();
var dataNascimento = document.getElementById("dataNascimento").value;
var genero = document.getElementById("genero").value;
var cpf = document.getElementById("cpf").value.trim();
var senha = document.getElementById("senha").value;
var confirmarSenha = document.getElementById("confirmarSenha").value;
var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/;
var regexNome = /^[a-zA-Z\s]+$/;
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!regexNome.test(nome)) {
    alert("Por favor, insira um nome válido (somente letras e espaços).");
    return false;
}

if (!regexEmail.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
}

if (senha.length < 8 || senha.length > 50) {
    alert("A senha deve ter entre 8 e 50 caracteres.");
    return false;
}

if (senha !== confirmarSenha) {
    alert("As senhas digitadas não coincidem.");
    return false;
}

if (!regexSenha.test(senha)) {
    alert("A senha deve ter pelo menos 8 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
    return false;
}

if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
    alert("Por favor, preencha todos os campos do endereço.");
    return false;
}

if (rua.length > 100 || numero.length > 10 || complemento.length > 50 || bairro.length > 50 || cidade.length > 50 || estado.length > 2 || cep.length > 9) {
    alert("Os campos do endereço devem ter no máximo: Rua (100), Número (10), Complemento (50), Bairro (50), Cidade (50), Estado (2) e CEP (9) caracteres.");
    return false;
}

if (!dataNascimento) {
    alert("Por favor, insira a data de nascimento.");
    return false;
}

if (!genero) {
    alert("Por favor, selecione o gênero.");
    return false;
}

alert("Usuário cadastrado com sucesso!");
return true;
}
