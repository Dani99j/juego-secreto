let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];  //Declarar lista
let numeroMaximo = 3;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
}
function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        if (numeroDeUsuario === numeroSecreto){
                asignarTextoElemento('p',`Acertaste el número en ${intentos}${(intentos === 1) ?' vez' : ' veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
                //El usuario no acerto
                if(numeroDeUsuario > numeroSecreto){
                        asignarTextoElemento('p','El número secreto es menor');
                }else{
                        asignarTextoElemento('p','El número secreto es mayor');
                }
                intentos++;
                limpiarCaja();
        }
        return;
}
function limpiarCaja(){
      document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        //Si ya sorteamos todos los numeros
        if(listaNumerosSorteados.length == numeroMaximo){
                asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        } else{
                //Si el número generado esta incluido en la lista
                if(listaNumerosSorteados.includes(numeroGenerado)){
                        //Recursividad: que la función se llame asi misma
                        return generarNumeroSecreto();
                }else{
                        listaNumerosSorteados.push(numeroGenerado);
                        return numeroGenerado;
                }
}
}
function condicionesIniciales(){
        asignarTextoElemento('h1', 'Juego del número secreto');
        asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
}
function reiniciarJuego(){
        //Limpiar la caja 
        limpiarCaja();
        //Indicar mensaje de intervalo de numeros
        //Generar un nuevo numero aleatorio
        //Incializar el número de intentos
        condicionesIniciales();
        //deshabilitar bóton de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();



