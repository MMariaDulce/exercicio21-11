function validaFormulario() {

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementsByClassName("senha").value;

    console.log(senha)
}

// validacão de campos vazios
if (nome === '' || email === '' || senha === '') {
    alert("preencha o campo vazio!")
}

//validar campos de email
const emailRegex = /^[^\s@]+@[^s@]=\.[^\s@]+$/
if (emailRegex.test(email)) {
    alert("Digite a um e-mail válido")
}

//verificar o tamanho da senha
if (senha.length > 8) {
    alert("A senha tem a quantidade caracteres a mais")
} if (senha == confirmarsenha) {
    alert("cadastro foi realizado com sucesso!")
}
function modoNoturno() {
    const pagina = document.body

    pagina.classList.toggle("modoNoturno")

    const botao = document.querySelector("button")

    const isDarkMode = document.body.classList.contains("modoNoturno");

    if (isDarkMode == true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}


