//Ejercicio 1
/*
Cada vez que una persona ingrese una hora del día
se mostrará un  mensaje que diga el deporte que se está realizando
en la cancha
*/

/*
Para ingresar datos con prompt sync se ingresan los siguientes comandos:
npm install npm@latest -g
npm install prompt-sync
*/


const PromptSync = require("prompt-sync")();
//TEMA NUEVO Entrada de datos con promptsync

var horaDia = PromptSync ("Ingresa la hora del día: ");
//Se define la variable con prompt-swync


if (horaDia<3) {
    console.log("El equipo de fútbol está entrenando.")
} else if (horaDia>=3 && horaDia<6) {
    console.log("El equipo ded fútbol americano está entrenando.")
} else if (horaDia>=6 && horaDia<9) {
    console.log("El equipo de atletismo está entrenando")
} else {
    console.log("Ningún equipo está entrenando.")
}

/*
Quité el caso de switch ya que no sabemos a ciencia cierta si la hora
que se va a ingresar sea en punto, por lo que hacer el ejercicio con if
es más preciso
*/


/*
switch (horaDia) {
    case 7:
        console.log("Se realiza fútbol");
        break;
    case 8:
        console.log("Se realiza fútbol");
        break;
    case 9:
        console.log("Se realiza básquetbol");
        break;
    case 10:
        console.log("Se realiza básquetbol");
        break;
    case 11:
        console.log("Se realiza básquetbol")
        break;
    case 15:
        console.log("Se realiza tennis")
        break;
    case 16:
        console.log("Se realiza tennis")
        break;
    case 17:
        console.log("Se realiza natación")
        break;
    case 18:
        console.log("Se realiza natación")
        break;
    default:
        console.log("En esta hora no se puede realizar algún deporte")
        break;
}
*/

/*
En swicth también podemos no solo poner una variable, sino una condición,
pero se limita a ser verdadero y falso.
Este podría ser otro ejemplo de Switch

switch (horaDia<3) {
    case true:
        console.log("Se realiza fútbol");
        break;
    case false:
        console.log("Se realiza otro deporte");
        break;
*/

var deporte = PromptSync("Ingresa el deporte que harás: ");

switch (deporte) {
    case "futbol":
        console.log("Tu horario de entrenamiento es de 3 a 6 p.m.")
        break;
    case "americano":
        console.log("Tu horario de entranamiento es de 6 a 9 p.m.")
        break;
    case "natación":
        console.log("Tu horario de entranamiento es de 6 a 9 p.m.")
        break;
}


