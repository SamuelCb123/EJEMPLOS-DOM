"use strict";
const body = document.body;//acceso a los nodos superiores de esta manera solo se puede hacer para body,head,html
                            //y para doctype
console.log(body);




const body2 = document.body.childNodes;//acede a todos los nodos hijos de un nodo padre en este caso todos son hijos de body
console.log(body2);

const body3 = document.body.childNodes[1];//acede a uno de los nodos hijos de body en concreto
console.log(body3);

const body4 = document.body.childNodes[1];//primero accede a uno de los nodos hijos de body, despues muestra los hijos de ese elemento en concreto
console.log(body4.childNodes);

const body5 = document.body.children;//devuelve nodos de tipo elemento? 
console.log(body5);

const body6 = document.body.firstChild;//primer nodo de un padre
console.log(body6);

const body7 = document.body.childNodes[1];
console.log(body7.firstChild);//esta devolviendo el primer hijo del segundo hijo de body(en este caso el div)
//devolvera text

const body8 = document.body.lastChild;//devuelve el ultimo nodo del padre
console.log(body8);

const body9 = document.body.firstElementChild;
console.log(body9);

const body10 = document.body.lastElementChild;
console.log(body10)
