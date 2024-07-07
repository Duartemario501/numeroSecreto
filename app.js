let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo =10;
let maximoIntentos =3;
let numerosSecretosGuardados =[];

function insertarTexto(elemento, mensaje){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= mensaje;
    return;
}

function numeroAleatorio(){
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)+1);

    if (numerosSecretosGuardados.length == numeroMaximo) {
        insertarTexto("p",`Ya se sortearon todos los numero posibles ${numeroMaximo}`);

        
    } else {
        
    }
    //Este if sirve para verificar si el numero generado no estava guardado
    //Includes sirve para poder recorrer el array y lo compara con una variable
    if (numerosSecretosGuardados.includes(numeroGenerado)) {
        //Recursividad en funciones
        return numeroAleatorio();
        
    } else {
        //guardamos el numero generado en el array
        numerosSecretosGuardados.push(numeroGenerado);
        //regresamos el numero generado
        return numeroGenerado;
        
    }
}

function validarIntento() {
    //Se obtiene el valor de input
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //Compara el numero ingresado con el numero secreto generado
    if(numeroDeUsuario === numeroSecreto){
        //Muestra en pantalla en caso de que se acierte el numero secreto
        insertarTexto("p",`Acertaste el numero en ${intentos} ${intentos> 1 ? "veces" : "vez"}`);
        //Activa el boton de reiniciar para jugar de nuevo
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{

        if (intentos==maximoIntentos) {
            insertarTexto("p",`Lo sentimos, Suerte a la proxima`);
            limpiarCaja();
            document.getElementById("reiniciar").removeAttribute("disabled")
            
            
        } else {
             // si es mayor el numero del usuario le dicemos que es menor
         if (numeroDeUsuario > numeroSecreto) {
            insertarTexto("p","El numero es menor");
         }
            // si es menor el numero del usuario le dicemos que es mayor
         else{
            insertarTexto("p","El numero es mayor");
            }
            // Se incrementa la variable intento 
            intentos++;
            // se limpia el input 
            limpiarCaja();
            
        }
       
    }

    return;

    
}
// Funcion para limpiar el input 
function limpiarCaja() {
    // Se le asigna el valor en blanco al input
    document.querySelector("#valorUsuario").value="";    
}
//Funcion para jugar de nuevo
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales(); 
}
//funcion para las condiciones del juego 
function condicionesIniciales() {
    insertarTexto("H1","Juego del numero secreto!");
    insertarTexto("p",`Ingresa un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto =numeroAleatorio();
    intentos =1;
    document.getElementById("reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();




