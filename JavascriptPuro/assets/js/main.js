// const input = document.getElementById("entradaTexto")
// const parrafo = document.getElementById("textoDinamico")

// input.oninput = function() {
//    let texto = input.value 
//    parrafo.textContent = texto
// }

//ejercicio 2
const boton = document.getElementById("mostrarBtn")
const divMensaje = document.getElementById("mensaje")
const botonCerrar = document.getElementById("cerrarBtn")


boton.onclick = function() {
    divMensaje.style.display = "Block"
    boton.style.backgroundColor = "red"
}

botonCerrar.ondblclick = function() {
    divMensaje.style.display = "none"
    boton.style.backgroundColor = "blue"
}

botonCerrar.onclick = function() {
    boton.style.backgroundColor = "green"
}