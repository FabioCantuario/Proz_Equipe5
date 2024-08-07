// ---------- VALIDAÇÃO NAME ---------- //
//captura de elementos
let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");

let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("name-helper");

let userEmailInput = document.getElementById("email");
let userEmailLabel = document.querySelector("label[for='email']");
let userEmailHelper = document.getElementById("email-helper");

let messageTextArea = document.getElementById("mensagem");
let messageLabel = document.querySelector("label[for='mensagem']");
let messageHelper = document.getElementById("mensagem-helper");

// Mostrar popup de campo obrigatório
function mostrarPopUp(input, label){
    input.addEventListener("focus", (e) => {
        label.classList.add("required-popup")
    })
    
    input.addEventListener("blur", ()=> {
        label.classList.remove("required-popup")
    })    
}

function mostrarPopUp1(textarea, label){
    textarea.addEventListener("focus", (e) => {
        label.classList.add("required-popup")
    })
    
    textarea.addEventListener("blur", ()=> {
        label.classList.remove("required-popup")
    })    
}

mostrarPopUp(assuntoInput, assuntoLabel)
mostrarPopUp(usernameInput, usernameLabel)
mostrarPopUp(userEmailInput, userEmailLabel)
mostrarPopUp1(messageTextArea, messageLabel)


// Validar valor do input
//adicionamos um evento do tipo input ao input do assunto e definimos um pararametro para capturar o evento
assuntoInput.addEventListener("input", (e) => {
    //capturamos o valor do ipt através do value e salvamos na variavel valorIpt
    let valotIpt = e.target.value
    //condicional que verifica se a quantidade de caracteres digitados no input é maior que 10
    if(valotIpt.length < 10 ){
        //sendo menos que 10 nos removemos a classe(css) correct do elemento input do assunto
        assuntoInput.classList.remove("correct");
        //adicionamos a classe error ao input do assunto
        assuntoInput.classList.add("error");
        //alteramos o texto do elemento <p> atraves da propriedade innertext
        assuntoHelper.innerText = "Seu assunto deve conter mais de 10 caracters"
        //adicionamos a classe visible ao elemento <p> fazendo a mensagem de ajuda aparecer ao assunto
        assuntoHelper.classList.add("visible");
        //se a quantidade de caracters digitados no input for maior que 10 vai para o else
    } else {
        //removemos a classe error do elemento assuntoInput
        assuntoInput.classList.remove("error");
        //adicionamos a classe correct ao elemento assuntoInput
        assuntoInput.classList.add("correct");
        //removemos a classe visible do elemento assuntoHelper
        assuntoHelper.classList.remove("visible")
    }
})

//adicionamos um evento do tipo input ao input do nome e definimos um pararametro para capturar o evento
usernameInput.addEventListener("input", (e) => {
    //printamos o valor digitado no input
    //console.log(e.target.value)
    //capturamos o valor do ipt através do value e salvamos na variavel valorIpt
    let valotIpt = e.target.value
    //condicional que verifica se a quantidade de caracteres digitados no input é maior que 3
    if(valotIpt.length < 3 ){
        //sendo menos que 3 nos removemos a classe(css) correct do elemento input do username
        usernameInput.classList.remove("correct");
        //adicionamos a classe error ao input do username
        usernameInput.classList.add("error");
        //alteramos o texto do elemento <p> atraves da propriedade innertext
        usernameHelper.innerText = "Seu nome deve ter mais que 3 caracters"
        //adicionamos a classe visible ao elemento <p> fazendo a mensagem de ajuda aparecer ao usuario
        usernameHelper.classList.add("visible");
        //se a quantidade de caracters digitados no input for maior que 3 cai no else
    } else {
        //removemos a classe error do elemento usernameInput
        usernameInput.classList.remove("error");
        //adicionamos a classe correct ao elemento usernameinput
        usernameInput.classList.add("correct");
        //removemos a classe visible do elemento usernameHelper
        usernameHelper.classList.remove("visible")
    }
})

//Aqui foi feito o mesmo processo do username input
userEmailInput.addEventListener("input", (event) => {
    let valor = event.target.value
    let regex =/^\S+@\S+\.\S+$/
    //verificamos com regex
    if(regex.test(valor)){
        userEmailInput.classList.remove("error");
        userEmailHelper.classList.remove("visible");
        userEmailInput.classList.add("correct")
    } else {
        userEmailInput.classList.remove("correct");
        userEmailInput.classList.add("error");
        userEmailHelper.innerText = "E-mail inválido"
        userEmailHelper.classList.add("visible");
}})

//adicionamos um evento do tipo input ao input da mensagem e definimos um pararametro para capturar o evento
messageTextArea.addEventListener("textarea", (e) => {
    //capturamos o valor do ipt através do value e salvamos na variavel valorIpt
    let valorTextArea = e.target.value
    //condicional que verifica se a quantidade de caracteres digitados no input é maior que 20
    if(valorTextArea.length < 20 ){
        //sendo menos que 20 nos removemos a classe(css) correct do elemento input do mensagem
        messageTextArea.classList.remove("correct");
        //adicionamos a classe error ao input do message
        messageTextArea.classList.add("error");
        //alteramos o texto do elemento <p> atraves da propriedade innertext
        messageHelper.innerText = "Sua mensagem deve conter mais de 20 caracters"
        //adicionamos a classe visible ao elemento <p> fazendo a mensagem de ajuda aparecer ao assunto
        messageHelper.classList.add("visible");
        //se a quantidade de caracters digitados no input for maior que 20 vai para o else
    } else {
        //removemos a classe error do elemento messageInput
        messageTextArea.classList.remove("error");
        //adicionamos a classe correct ao elemento messageInput
        messageTextArea.classList.add("correct");
        //removemos a classe visible do elemento messageHelper
        messageHelper.classList.remove("visible")
    }
})