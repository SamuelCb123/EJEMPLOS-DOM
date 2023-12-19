"use strict";
const body = document.body;//acceso a los nodos superiores de esta manera solo se puede hacer para body,head,html
                            //y para doctype
console.log(body);

const body2 = document.body.childNodes;//esta propiedad retorna todos los nodos hijos directo de un nodo padre en este caso body
console.log(body2);


const body3 = document.body.childNodes[1];//retorna el nodo de la posicion elegifa y los hijos de esta
console.log(body3.childNodes);

const body4 = document.body.children;//me imprime nodos tipo elemento?? 
console.log(body4);

const body5 = document.body.firstChild; //devuelve el primer nodo de body
console.log(body5);
