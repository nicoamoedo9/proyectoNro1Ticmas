/*BOTONES DE INFORMACION DE CONTACTO*/
    document.getElementById("boton1").onmousemove = function mostrarTelefono() {
    document.getElementById("info1") .style.display="block"
}

document.getElementById("boton1").onmouseout = function ocultarTelefono() {
    document.getElementById("info1").style.display="none"
}

document.getElementById("boton2").onmousemove = function mostrarMail() {
    document.getElementById("info2") .style.display="block"
}

document.getElementById("boton2").onmouseout = function ocultarMail() {
    document.getElementById("info2").style.display="none"
}

document.getElementById("boton3").onmousemove = function mostrarFecha() {
    document.getElementById("info3") .style.display="block"
}

document.getElementById("boton3").onmouseout = function ocultarFecha() {
    document.getElementById("info3").style.display="none"
}

document.getElementById("boton4").onmousemove = function mostrarDireccion() {
    document.getElementById("info4") .style.display="block"
}

document.getElementById("boton4").onmouseout = function ocultarDireccion() {
    document.getElementById("info4").style.display="none"
}
/**BOTONES DE INFORMACION LABORAL/ESTUDIOS/EXPERIENCIAS */
document.getElementById("botones1").onclick = function mostrarEspecializaciones() {
    document.getElementById("informacion1") .style.display="block";
}

document.getElementById("ocultar").onclick = function ocultarEspecializaciones() {
    document.getElementById("informacion1").style.display="none"
}

document.getElementById("botones2").onclick = function mostrarExperiencia() {
    document.getElementById("informacion2") .style.display="block"
}

document.getElementById("ocultar2").onclick = function ocultarExperiencia() {
    document.getElementById("informacion2").style.display="none"
}

document.getElementById("botones3").onclick = function mostrarHistorial() {
    document.getElementById("informacion3") .style.display="block"
}

document.getElementById("ocultar3").onclick = function ocultarHistorial() {
    document.getElementById("informacion3").style.display="none"
}

