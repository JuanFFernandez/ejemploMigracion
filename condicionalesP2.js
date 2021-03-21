
//Ejemplo
/*
Dado un número, separarlo en centenas, decenas y unidades,
intercambiar la posición entre las centenas y las unidades
e imprimir el número final.
*/

var numero = 738;

if (numero <= 999 && numero >= 100) {
    var centenas = parseInt(numero/100)
    console.log(centenas);
    /*
    parseInt sirve para transformar números a enteros, pero no los aproxima,
    los deja tal como es el número
    */
   var decenas = parseInt((numero % 100) /10);
   console.log(decenas);
   //OJO con el truco para poder obtener las decenas y las unidades con el Resto.

   var unidades = parseInt (numero %10);
   console.log(unidades);
   
   var numeroFinal = (unidades*100)+(decenas*10)+centenas;
   console.log("El valor final es: "+numeroFinal);

} else {
    console.log("No es un número de tres cifras. Ingresa otro número.");
}



//Condicional Switch
//Sirve para dar instrucciones dependiendo del valor de una variable

var conSwitch = "Luis";
var edad = 18;
switch (conSwitch){
    case 2:
    //case menciona el valor que puede tomar la variable, y pone una serie de instrucciones por ella
        console.log("El valor ingresado es: 2");
        break;
        //break sirve para darle fin al bloque de instrucciones

    case 6:
        console.log("El valor ingresado es: 6");
        break;
    //Sí se podrían añadir más casos
    
    case "Luis":
        console.log("Hola Luis");
        if (edad >= 18) {
            console.log("¡Felicidades, eres mayor de edad!")
        }
        //También podemos añadir if dentro de un  switch
        break;

    default:
    //default establece lo que después viene por defecto en caso de que no se cumpla algún caso
        console.log("El valor ingresado es distinto.");
        break;
}

/*
En swicth también podemos no solo poner una variable, sino una condición,
pero se limita a ser verdadero y falso
*/

