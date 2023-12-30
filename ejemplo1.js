"use strict";
/*const body = document.body;//acceso a los nodos superiores de esta manera solo se puede hacer para body,head,html
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

const body9 = document.body.firstElementChild;//devuelve el primer nodo tipo elemento de manera idependiente de los espacios
console.log(body9);

const body10 = document.body.lastElementChild;//devuelve el ultimo nodo tipo elemento
console.log(body10)

const body11 = document.body.childNodes[0];//devolvera true o false dependiendo de si tiene hijos o no 
console.log(body11.hasChildNodes());

const body12 = document.body.children[0];//primero accedo al div wrappaer, despues accedemos al hijo de este que es otro div,
    //con la funcio nextsibling sabremos en  este caso el hermano del nodo actual en caso de que no tengamos nos devolvera un null
const div = body12.children[1];
console.log(div.nextSibling)

const body13 = document.body.children[0];
const div2 = body13.children[1];//igual que el ejemplo anterior pero nos va a retornar un nodotipo elemento 
console.log(div2.nextElementSibling);

const body14 = document.body.children[0];
const div3 = body14.children[1];
console.log(div3.previousSibling); //me retornara el hermano anterior al nodo actual.Me retorna cualquier tipo de nodo en este caso text porque hay espacios

const body15 = document.body.children[0];
const div4 = body15.children[1]; //igual que el ejemplo anterior pero el nodo que nos va a retornar es tipo elemento es decir no nos va a devolver uno tipo html
console.log(div4.previousElementSibling);

const body16 = document.body.children[0];//accedemos al div wrapper despues accedemos al hijo de este en este caso el div,despues del nodo div accederemos al
const div5 = body16.children[1];      //con parent node acceremos al padre del nodo en el que nos encontremos
const anchor = div.children[0];
console.log(anchor.parentNode);

const body17 = document.body.children[0];//accedemos al div wrapper despues accedemos al hijo de este en este caso el div,despues del nodo div accederemos al
const div6 = body16.children[1];      //con parent node acceremos al padre del nodo en el que nos encontremos
const anchor2 = div.children[0];
console.log(anchor.parentElement);

const body18 = document.getElementById("wrapper");
console.log(body18)//accede a un elemento que contenga el id proporicionado 

const body19 = document.getElementsByClassName("link"); //accedera a los elemento que contengan la clase proporcionada
console.log(body19);

const body20 = document.getElementsByTagName ("div");
console.log(div); //retornara todos los elementos que coincidan con una etiqueta especifica


const body21 = document.getElementsByName("telefono");//va a retornar una lista de nodos con  una lista de nodos que contengan se utiliza normalmnete para inputs
console.log(body21);

const body22 = document.querySelector(".wrapper") //selector css es decir podremos buscar un nodo especifico introduciendo tanto class, tanto como id, como por etiqueta nos va a devolver el primer elemento que encuentre con ello 
console.log(body22);

const body23 = document.querySelectorAll(".link");//a diferencia del ejemplo anterior me va a retornar a todos los elementos que tenga dicha clase, id..
console.log(body23); */