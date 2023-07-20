// function init() {
//   var resultado = document.getElementById("resultado");
//   var uno = documente.getElementById("uno");
//   var dos = document.getElementById("dos");
//   var tres = document.getElementById("tres");
//   var cuatro = document.getElementById("cuatro");
//   var cinco = document.getElementById("cinco");
//   var seie = document.getElementById("seie");
//   var siete = document.getElementById("siete");
//   var ocho = document.getElementById("ocho");
//   var nueve = document.getElementById("nueve");
//   var cero = document.getElementById("cero");
//   var suma = document.getElementById("suma");
//   var resta = document.getElementById("resta");
//   var multi = document.getElementById("multi");
//   var divi = document.getElementById("divi");
//   var expo = document.getElementById("expo");
//   var rcuadrada = document.getElementById("rcuadrada");
//   var punto = document.getElementById("punto");
//   var c = document.getElementById("c");
//   var igual = document.getElementById("igual");
// }

// uno.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "1";
// };
// dos.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "2";
// };
// tres.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "3";
// };
// cuatro.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "4";
// };
// cinco.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "5";
// };
// seis.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "6";
// };
// siete.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "7";
// };
// ocho.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "8";
// };
// nueve.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "9";
// };
// cero.onclick = function (e) {
//   resultado.textContent = resultado.textContent + "0";
// };


const pantalla = document.querySelector (".resultado");
const botones  = document.querySelector (".btn");

botones.forEach( => {
    
});(boton => {
    boton.addEventListener("click",() => {
        console.log (boton.textContent);
    })
    
});