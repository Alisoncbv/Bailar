let esqueleto = "off";
let esqueletoquieto = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("C:/Users/Public/Documents/JavaScript/proyecto5/sound/botonbailar.mp3");
let botonMusica = new Audio ("C:/Users/Public/Documents/JavaScript/proyecto5/sound/audio.mp3")

function bailar(){
    if(esqueleto == "off"){
        esqueleto = "on";
        esqueletoquieto.classList.add("on");
        esqueletoquieto.addEventListener('click', () =>{
            botonSonido.play();
        })

        esqueletoquieto.addEventListener('click', () =>{
            botonMusica.play();
        })

        console.log("on");
    }else{
        esqueleto = "off";
        esqueletoquieto.classList.remove("on");
        esqueletoquieto.addEventListener('click', () =>{
            botonMusica.pause();
        })
        console.log("off");
    }
}