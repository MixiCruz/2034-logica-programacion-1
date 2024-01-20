 alert('Bienvenidos al juego del número secreto');
// variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraveces = 'vez';
let maximosintentos = 3;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt('Elige un número entre 1 y 10')
    
    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraveces}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');     
        }
        intentos++;
        palabraveces = 'veces';
        if (intentos > maximosintentos ) {
            alert(`Llegaste al número máximo de ${maximosintentos} intentos permitidos`);
            break;
        }
    }
 }



