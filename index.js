//boton que estara oculto por defecto
let btnHidden = document.getElementById("searchBtn");
//input
let input = document.getElementById("searchInput");
//icono que se convertira el x
let btnDefault = document.getElementById("defaultSearchBtnIcon");


input.addEventListener("keyup", () => {
    if(input => 1){
        btnHidden.classList.remove("hidden")
        btnDefault.classList.add("fa-times")
    }else{
        closeAutocompleteSection();
    }
})

function closeAutocompleteSection() {
    btnHidden.classList.add("hidden")
    btnDefault.classList.remove("fa-times")
}