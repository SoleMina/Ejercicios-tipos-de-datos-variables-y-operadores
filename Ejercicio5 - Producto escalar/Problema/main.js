// Escribe aquí tu codigo Javascript
a=parseInt(prompt('Ingrese primer número 1:'));
b=parseInt(prompt('Ingrese segundo 1:'));
c=parseInt(prompt('Ingrese tercer número 2:'));
d=parseInt(prompt('Ingrese cuarto número 2:'));

function escalar(){
    return ((a*c) + (b*d));
}
console.log('el producto escalar de los vectores '+'('+a+','+b+') y ('+c+','+d+') es:' + ((a*c) + (b*d)));
escalar();

