const h1=document.getElementById("h1");
let imagen1,imagen2;
function modifica(event){
    imagen1.style.width='100%';
    imagen1.style.height='100%';
}

function original(event){
    imagen1.style.width='50%';
    imagen1.style.height='50%';
}

function seg(num){
        min = tiempo.toString().substring(0,2);
        
        return Number(min)*60;
}

function calculo(event){
    let gas=125-sobrante;
    tiempo_total= seg()+Number(tiempo.toString().substring(3,5));
    TOTAL=(tiempo_total*125)/gas;
    console.log("Segundos: " +tiempo_total );

    console.log("Puedes hacer: " + TOTAL)
    conversion();
   // console.log("Puedes hacer: " + conversion() + " minutos");

}
let TOTAL;
//convertir a minutos
function conversion(){
   // let parseFloat(TOTAL.toString().substring(0,6));
    min = Math.trunc(TOTAL/60);
    segund = Math.trunc(TOTAL);
    console.log("DSfgasdfas" + segund);
   console.log("***Minutos " +min);
   console.log("***" +(segund-(min*60)) +" seg");
   //document.write("Puedes Rodar: " + min + " : " +(segund-(min*60))+"seg")
   document.getElementById("sol").textContent=("Puedes Rodar: " + min + " : " +(segund-(min*60))+"seg");
    
}

let tiempo=0,tiempo_seg=0;;
let sobrante=0;
window.onload=function mover(){
    imagen1=document.getElementById("imagen1"); 
   
    console.log( document.getElementsByTagName('img').length)
    imagen2=document.getElementById("imagen1");
    document.getElementsByTagName('img')[0].addEventListener('mouseover',modifica,false);
   // document.getElementByTagName('img').addEventListener('mouseover',modifica,false);
   //function(){document.getElementsByTagName('img')[0].style.width='30%'}
    imagen1.addEventListener('mouseout',original,false);
    imagen2.addEventListener('mouseout',original);
   
    document.getElementById("tiempo").addEventListener('change',function(){tiempo=document.getElementById("tiempo").value; calculo()})
    document.getElementById("sobrante").addEventListener('change',function(){sobrante=document.getElementById("sobrante").value;
    calculo();
     console.log(sobrante)})
}