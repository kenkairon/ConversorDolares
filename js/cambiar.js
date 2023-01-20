/* Se obtiene el valor en Dolares de  <input type="number"  placeholder="Monto en Dolares" id="dolar" required>  */
const dolares=document.getElementById("dolar");
/*Se crea una Constante para El mensaje  */
var mensaje=document.getElementById("mensajeAlert");
/*  Valor del Dólar*/
var dolar=745;
function cambiar(){
    totales=((dolares.value *dolar).toFixed(0))
    mensaje.classList.add('container','alert','alert-success');
    mensaje.innerHTML= (dolares.value + " dólares son " + totales + " Pesos Chilenos");
}