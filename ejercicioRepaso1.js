
//Ejercicio de Repaso Semana 1
/*
Para calcular el promedio de prácticas de un curso
se tomará la calificación de las 4 prácticas que se hicieron,
de estas 4 se va a eliminar la práctica con menor calificación
y se obtendrá el promedio de las 3 prácticas restantes
*/


const practica1 = 8;
const practica2 = 9;
const practica3 = 10;
const practica4 = 7;
var promedio;
var califMenor = practica1;

if (califMenor>practica2) {
    califMenor = practica2;
} else if (califMenor>practica3) {
    califMenor=practica3;
} else if (califMenor>practica4) {
    califMenor=practica4
}
//También se podrían poner más if dentro del bloque de instrucciones

promedio = (practica1+practica2+practica3+practica4-califMenor)/3;
console.log("El promedio es: "+promedio);