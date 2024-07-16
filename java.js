
var turno = Math.floor(Math.random() * 2); // numero random
let tablero = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]; //array con posiciones
const jugadorTurno = document.querySelector(".turno");
var partidaEnJuego = true;

function gano() { //Se fija si el jugador gano o empataron

    if (tablero[0] == tablero[1] && tablero[0] == tablero[2]) {
        return true;
    }
    else if (tablero[3] == tablero[4] && tablero[3] == tablero[5]) {
        return true;
    }
    else if (tablero[7] == tablero[6] && tablero[6] == tablero[8]) {
        return true;
    }
    else if (tablero[0] == tablero[3] && tablero[0] == tablero[6]) {
        return true;
    }
    else if (tablero[1] == tablero[4] && tablero[1] == tablero[7]) {
        return true;
    }
    else if (tablero[2] == tablero[5] && tablero[2] == tablero[8]) {
        return true;
    }
    else if (tablero[0] == tablero[4] && tablero[0] == tablero[8]) {
        return true;
    }
    else if (tablero[2] == tablero[4] && tablero[2] == tablero[6]) {
        return true;
    }
    else {
        return false;
    }
}

function reset(){
    tablero = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    turno = 0;
    document.querySelectorAll(".casillero").forEach((casillero) => casillero.style.backgroundColor="white");
}

const botonPulsado = (evento, posicion) => {
    // console.log("toco el boton");

    //guarda el color en una variable llamada color dependiendo si es par o impar
   
    const color = turno % 2 ? "red" : "blue"; //si es par lo pinta de rojo y si es impar de azul
    turno++;
    

    if (turno % 2) {
        jugadorTurno.textContent = "Va el jugador Rojo";
    } else {
        jugadorTurno.textContent = "Va el jugador Azul";
        
    }

    // console.log(posicion);
    // console.log(turno);


        const i=0;
        console.log(tablero[i]);
        if (gano()) { //se fija si la partida termino
            alert("la partida ya termino");
        }
        else {
            if ((tablero[posicion] == "red") || (tablero[posicion] == "blue")) { //se fija si el casillero esta pintado
                console.log("ya esta pintado");
                alert("el casillero ya esta pintado")
                turno--;
            }
            else { //sino esta pintado, lo pinta
                const boton = evento.target;
                boton.style.backgroundColor = color;
                tablero[posicion] = color;

            }
        }

    }

    if (gano() && partidaEnJuego == true) { // Se fija si gano y si la partida sigue en juego
        alert("gano el jugador " + color);
        console.log(tablero);
        partidaEnJuego = false;
    }
    else if (turno == 9) {
        alert("empataron")
    }
    
    // if (empate()){
    //     alert("empatoron");
    // }

    //prueba empate
    // if ((tablero[posicion] == "red") || (tablero[posicion] == "blue")){
    //    console.log("ya esta pintado");
    // }




// function empate(){
//     for (i = 0; i < 9; i++) { //recorre el array
//         if (tablero[i] != i) { //se fija si es diferente de el numero de la posicion
//             var num = 0;
//             num++;
//             console.log(num);
//             if (num==9) {
//                 log("empataron")
//                 return true;
//             }
//         }  
//     }
// }


//document.querySelectorAll(".casillero").forEach(casillero => casillero.addEventListener("click", botonPulsado)) 
document.querySelectorAll(".casillero").forEach((casillero, posicion) => casillero.addEventListener("click", (evento) => botonPulsado(evento, posicion)))
//selecciona los botones casillero  y a cada uno le añande el evento click y guarda la posicion

