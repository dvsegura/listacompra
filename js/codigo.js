window.onload=inicio;
var productos=[];
var c,codigo,dato_ls,dato;


function inicio(){
	c=document.getElementById("campo");
	document.getElementById("btn1").onclick=adicionar;
	c.onkeydown=teclado;
	dato_ls=localStorage.getItem("cadena_ls");

	if(dato_ls!=undefined && dato_ls!=null){   
       obtener_localStorage();
	}
}
function teclado(e){
	codigo=e.keyCode;
	if(codigo==13){
	   adicionar();
	}
}
function adicionar(){
	document.getElementById("error").innerHTML="";
	c.focus();
	dato=c.value.trim();
	if(dato.length!=0){
	   if(productos.indexOf(dato)<0){	
	      productos.push(dato);
	      // document.getElementById("listado").innerHTML+=`<div class="fila_productos"><div class='producto_caja'>${dato}</div><div class='papelera' onclick="eliminar(this)">x</div></div>`;
	      document.getElementById("listado").innerHTML+=`<div class="fila_productos"><div class='producto_caja'>${dato}</div><div class='papelera' onclick="eliminar(this)"><img src='img/cruz.png'></div></div>`;
	      guardar_localStorage();
	    }
	    else{
	    document.getElementById("error").innerHTML="El producto ya se encuentra en la lista";
	    }	    
	}   
	else{
		document.getElementById("error").innerHTML="Debe rellenar el campo";
	}
	c.value="";  
}
function eliminar(p){
    let indice=productos.indexOf(p.previousSibling.innerHTML);   
    productos.splice(indice,1);
    if(productos.length==0){  
	   localStorage.removeItem("cadena_ls");
    }
    else {
      guardar_localStorage();
    }
    p.parentNode.remove();   
}
function guardar_localStorage(){
      let valor=productos.join("///"); 
      localStorage.setItem("cadena_ls",valor);      
}
function obtener_localStorage(){
       productos=localStorage.getItem("cadena_ls").split("///");
       for(i=0;i<productos.length; i++){
       	  document.getElementById("listado").innerHTML+=`<div class="fila_productos"><div class='producto_caja'>${productos[i]}</div><div class='papelera' onclick="eliminar(this)"><img src='img/cruz.png'></div></div>`
       }
}
