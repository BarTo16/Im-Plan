let menuVisible = false;
function mostrarOculatMenu(){
    if(menuVisible){
        document.getElementById("nav").classList=""
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible = tr;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
