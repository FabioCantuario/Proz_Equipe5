// imagem
const perfil1 = document.getElementById("perfil1");
const perfil2 = document.getElementById("perfil2");
const perfil3 = document.getElementById("perfil3");
const perfil4 = document.getElementById("perfil4");
const perfil5 = document.getElementById("perfil5");
// h3
const nomeperfil1 = document.getElementById("nome_perfil1");
const nomeperfil2 = document.getElementById("nome_perfil2");
const nomeperfil3 = document.getElementById("nome_perfil3");
const nomeperfil4 = document.getElementById("nome_perfil4");
const nomeperfil5 = document.getElementById("nome_perfil5");


window.addEventListener("mouseover",  (e) => {
    if(e.target.tagName === "IMG"){
        if(perfil1.id === "perfil1"){
            nomeperfil1.style.color = "#394A20"
            nomeperfil2.style.color = "#B43A75"
            nomeperfil3.style.color = "#B43A75"
            nomeperfil4.style.color = "#B43A75"
            nomeperfil5.style.color = "#B43A75"
        } else if (perfil2.id === "perfil2"){
            nomeperfil2.style.color = "#394A20"
            nomeperfil1.style.color = "#B43A75"
            nomeperfil3.style.color = "#B43A75"
            nomeperfil4.style.color = "#B43A75"
            nomeperfil5.style.color = "#B43A75"
        } else if (perfil3.id === "perfil3"){
            nomeperfil3.style.color = "#394A20"
            nomeperfil1.style.color = "#B43A75"
            nomeperfil2.style.color = "#B43A75"
            nomeperfil4.style.color = "#B43A75"
            nomeperfil5.style.color = "#B43A75"
        } else if (perfil4.id === "perfil4"){
            nomeperfil4.style.color = "#394A20"
            nomeperfil1.style.color = "#B43A75"
            nomeperfil2.style.color = "#B43A75"
            nomeperfil3.style.color = "#B43A75"
            nomeperfil5.style.color = "#B43A75"
        } else if (perfil5.id === "perfil5"){
            nomeperfil5.style.color = "#394A20"
            nomeperfil1.style.color = "#B43A75"
            nomeperfil2.style.color = "#B43A75"
            nomeperfil3.style.color = "#B43A75"
            nomeperfil4.style.color = "#B43A75"
        }
    }else{
        nomeperfil1.style.color = "#B43A75"
        nomeperfil2.style.color = "#B43A75"
        nomeperfil3.style.color = "#B43A75"
        nomeperfil4.style.color = "#B43A75"
        nomeperfil5.style.color = "#B43A75"
    }                    
});

/*
window.addEventListener("mouseover",  (e) => {
    if(e.target.tagName === "IMG" && perfil1.id === "perfil1"){
        nomeperfil1.style.color = "#394A20"
    } else if (e.target.tagName === "IMG" && perfil2.id === "perfil2"){
        nomeperfil2.style.color = "#394A20"
    } else if (e.target.tagName === "IMG" && perfil3.id === "perfil3"){
        nomeperfil3.style.color = "#394A20"
    } else if (e.target.tagName === "IMG" && perfil4.id === "perfil4"){
        nomeperfil4.style.color = "#394A20"
    } else if (e.target.tagName === "IMG" && perfil5.id === "perfil5"){
        nomeperfil5.style.color = "#394A20"
    } else{
        nomeperfil1.style.color = "#B43A75"
        nomeperfil2.style.color = "#B43A75"
        nomeperfil3.style.color = "#B43A75"
        nomeperfil4.style.color = "#B43A75"
        nomeperfil5.style.color = "#B43A75"
    }                    
});
*/
/*
addEventListener("contextmenu", (e) => {
  e.preventDefault() // previne o menu de contexto
  console.log("Botao direito do mouse clicaldo")
})
  */