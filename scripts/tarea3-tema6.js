var elemento, elemento2, elemento3,elemento4,elemento5,pes;

//Oculta el primer párrafo
function modifica(event) {
    
    pes = document.getElementsByTagName("p");
    console.log(pes[0]);
   // console.log(pes);
   // console.log("***");
    pes[0].setAttribute("style", "display:none")

}
document.addEventListener("load", function(){
    document.getElementById('boton1').addEventListener("click", modifica, false);
});
//Además añade un link al final del párrafo
function mostrar(event){
    if (pes!=null){
     pes[0].setAttribute("style","display:inline");
    // style="color:#FF0000"
    pes[0].setAttribute("style", "color:#FF0000");
     pes[0].innerHTML= pes[0].innerHTML +"<a href=http://google.com> enlace </a>";
     console.log(pes[0]);
    }

}


//cuenta el número de palabras de un párrafo
function contar(){
    pes = document.getElementsByTagName("p");
    console.log(pes[0].textContent);
    let tam=pes[0].textContent.split(" ");
    document.write("El numero de palabras es: " + tam.length);
}

function modificar_tabla(){
    tabla = document.getElementsByTagName("tbody"); //Esta es una forma, se llaman tbody en el DOM
    console.log(tabla[0].textContent);
}

//Añade un párrafo nuevo 
function anadir(){
    pes = document.getElementsByTagName("p");
    pes[0].innerHTML+="<br> Esto es otro párrafo nuevo";
}
function modifica_celda(){
    console.log("Click en celda");
    ele_li=document.createElement("li");
    ele_li.textContent="NUEVO";
    document.body.insertBefore(ele_li,document.getElementById("ele1"));
}

window.onload = function cargar() {
    let tabla=document.getElementById("tabla");
    document.body.removeChild(document.getElementById("tabla"));

    //celda.setAttribute("onclick",modifica_celda());
   
    
    elemento = document.createElement("button");
    elemento.type='button';
        var texto = document.createTextNode("boton de prueba");
    elemento.setAttribute("id","boton1");
   elemento.setAttribute("onclick","modifica()");
    elemento.textContent="ocultar";
    //imagen=document.getElementById("imagen1"); 
    document.body.appendChild(elemento);
    document.body.innerHTML+="  ";

    elemento2 = document.createElement("button");
    elemento2.type='button';
    elemento2.textContent="mostrar";
    elemento2.setAttribute("id","boton2");
    elemento2.setAttribute("onclick","mostrar()");
    document.body.appendChild(elemento2);
    document.body.innerHTML+="  ";

    elemento3 = document.createElement("button");
    elemento3.setAttribute("id", "boton3");
    elemento3.setAttribute("onclick", "anadir()");
    elemento3.textContent="Añadir";
 //   document.body.appendChild(elemento3);

 //---------- Añadimos un nodo done queramos --------- (nodo a insertar, posicion)
    document.body.insertBefore(elemento3,document.getElementById("boton1"));

    document.body.innerHTML+="  ";
    elemento4 = document.createElement("button");
    elemento4.setAttribute("id", "boton4");
    elemento4.setAttribute("onclick", "contar()");
    elemento4.textContent="Contar palabras";
    document.body.appendChild(elemento4);   


    //Añadimos la tabla al final de los nodos
    document.body.innerHTML+="<br><br><br><br>";
    
   document.body.appendChild(tabla);
    document.getElementById('celda1').setAttribute("onclick", "modifica_celda()");
   //No funciona ASÍ document.getElementById('celda1').addEventListener('mouseover',modifica_celda,false);


    document.body.innerHTML+="  ";
    elemento5 = document.createElement("button");
    elemento5.setAttribute("id", "boton5");
    elemento5.setAttribute("onclick", "modificar_tabla()");
    elemento5.textContent="modificar tabla";
    document.body.appendChild(elemento5);   
    console.log("***");
    // document.addEventListener('mouseout',original,false);
}