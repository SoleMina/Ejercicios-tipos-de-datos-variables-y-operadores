// Escribe aquí tu codigo Javascript
a=parseInt(prompt('Ingresar el primer número:'));
b=parseInt(prompt('Ingresar el segundo número:'));
c=parseInt(prompt('Ingresar el tercer número:'));
d=parseInt(prompt('Ingresar él cuarto número:'));
function determinante(){
 x=a*d;
 y=b*c;
 z=x-y;
}
determinante();
alert('A: ('+a+' '+d+') \n    ('+b+' '+c+')');



