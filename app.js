 alert('Bienvenidos al juego del número secreto'); 
 
// variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosintentos = 5;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Elige un número entre 1 y ${numeroMaximo}, por favor`));

console.log(typeof(numeroUsuario));
    
    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');     
        }
        intentos++;
        if (intentos > maximosintentos ) {
            alert(`Llegaste al número máximo de ${maximosintentos} intentos permitidos`);
            break;
        }
    }
 } 