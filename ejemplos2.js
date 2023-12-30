"use strict";
const wrapper = document.querySelector("#wrapper"); //tomamos los siguientes elementos del documento
const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const inputnumber = document.querySelector('[type="number"]');

/*console.dir(wrapper);//sirve para mostrar todas las propiedades de un objeto */
/*wrapper.className="container";//con esta propiedad tambien podemosa cambiar el nombre a una clase en este caso pasara a llamarse container */
console.log(wrapper.className);//La propiedad clasname va a  a retornar un string con las clases del nodo en este caso wrapper

/*wrapper.innerHTML = `
<h2> HE SOBREESCRITO DOM   </h2>
` //SOBREESCRIBE EL HTML INTERNO DE WRAPPER ELIMINANDO TODO LO QUE ESTABA ANTERIORMENTE */

// LO QUE HAGO ES LO MISMO QUE EL EJM ANTERIOR PERO AQUI LO QUE PASA ES QUE CONCADENAS ES DECIR NO SE BORRA LO QUE YA ESTABA
/*wrapper.innerHTML += ` 
<h2> HE SOBREESCRITO DOM   </h2> 
`*/
console.log(title.nodeName)//nos retorna el nombre del nodoen este caso un H1 
/*console.log(wrapper.innerHTML);*/// nos retornara todo el html interno del nodo en el cual es llamado
