//===========================================EJERCICIO=> con un bucle recorrer las 3 imagenes y asignarles las propiedades necesarias para que cuando situe el ratón sobre ellas se amplíen y cuando se quite disminuya

contenedor= document.getElementById('contenedor');
// console.log(contenedor.children); =>coomo puedo observar me devuelve una colección con 3 elementos ('img')


//-----------------1er modo de hacerlo (usando setAttribute())
// for(let i=0; i<contenedor.children.length; i++){
//     contenedor.children[i].setAttribute('onmouseover', `aumentar(${i})`);
//     contenedor.children[i].setAttribute('onmouseout', `disminuir(${i})`); //le paso la posición de cada hijo a la hora de asignarle la llamada a la función para que la función sepa cual ha de aumentar o disminuir
// }

//-----------------2o modo de hacerlo (usando addEventListener() y con la función entera dentro)
// for(let i=0; i<contenedor.children.length; i++){
//     contenedor.children[i].addEventListener('mouseover', function(){
//         contenedor.children[i].setAttribute('width', '500px'); 
//     }, false);
    
//     contenedor.children[i].addEventListener('mouseout', function(){
//         contenedor.children[i].setAttribute('width', '300px');
//     }, false);
// }

//-----------------3er modo de hacerlo (usando addEventListener() y con la función llamando a la función externa aumentar() o disminuir())
for(let i=0; i<contenedor.children.length; i++){
    contenedor.children[i].addEventListener('mouseover', function(){aumentar(i)}, false);
    
    contenedor.children[i].addEventListener('mouseout', function(){disminuir(i)}, false);
}


function aumentar(numHijo){ //si no le pasase a la función el nº de hijo no sabría cual tendría que aumentar o disminuir
    
    contenedor.children[numHijo].setAttribute('width', '500px'); 
    console.log(numHijo);
}

function disminuir(numHijo){
    contenedor.children[numHijo].setAttribute('width', '300px');
}

//============================================EJERCICIO=> al pulsar el button 'insertar' se insertará una imagen nueva en la web (la cual también deberá apliarse y disminuir en función del cursor)
function crearImagen(){

    //Crear elemento
    let imagen = document.createElement("img");

    //Añadir atributos:
    imagen.src = 'img/moto.jpg';
    imagen.setAttribute("alt", 'Imagen de moto yamaha r1 azul');
    imagen.setAttribute("width", '300px');
    // imagen.setAttribute('onmouseover', `aumentar(${pos})`);
    // imagen.setAttribute('onmouseout', `disminuir(${pos})`);

    //Terminaríamos seleccionado el elemento donde queremos añadir la imagen y lo añadimos
    
    imagen.addEventListener('mouseover', function(){imagen.setAttribute('width','500px')});
    imagen.addEventListener('mouseout', function(){imagen.setAttribute('width','300px')});
    document.getElementById("contenedor").append(imagen);

    //Finalmente añadiré eventos
   // imagen.addEventListener('mouseover', function(){aumentar(document.getElementById("contenedor").children.length-1)}, true); //le pongo -1 ya que contiene 3 elementos (de imagenes) pero las posiciones van de la 0 a la 2 (por tanto cuando inserte la 1a img habrá 4 elementos e irán del 0 al 3)
   // imagen.addEventListener('mouseout', function(){disminuir(document.getElementById("contenedor").children.length-1)}, true);   


    
}

//document.body.append

// la longitud del array en principio es como la de un array normal (por ej long 4= 4 pos)
// 