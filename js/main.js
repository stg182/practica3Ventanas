var interAbre;
var cierraVent;
var nVentanas=3;
/*var contAbrir=0;
var contCerrar=0;
var left=250;
var select1=document.getElementById("ventana1").value;
var select2=document.getElementById("ventana2").value;
var select3=document.getElementById("ventana3").value;*/
function valoresIniciales(){
	arrayVentanas=new Array();
	arrayopA=new Array();
	arrayopC=new Array();
 	contAbrir=0;
 	contCerrar=0;
 	left=250;
 	tiempocierre=0;
 	arraySelect=new Array();
 	arrayindices=new Array();
 	select1=document.getElementById("ventana1").value;
	select2=document.getElementById("ventana2").value;
	select3=document.getElementById("ventana3").value;
}

valoresIniciales();

function ventanas(){
	
	arrayVentanas[contAbrir]=window.open("", "ventana"+contAbrir, "width=250,height=200,left="+left+",top=50,toolbar=yes");
    	/*texto ventana*/
    
	ndoc=arrayVentanas[contAbrir].document;
    ndoc.open();
    midiv=ndoc.createElement("div");
    parrafo=ndoc.createElement("p");
    textoventana=textoVentana();
	texto1=ndoc.createTextNode("Esta es la ventana "+(contAbrir+1)+" "+textoventana);
	parrafo.appendChild(texto1);
	midiv.appendChild(parrafo);
	ndoc.appendChild(midiv);
	/*            */  
	arrayopA[contAbrir]="Abriendo ventana "+(contAbrir+1);
	document.getElementById("mensaje").innerHTML+=arrayopA[contAbrir]+".<br>";
	left+=300;
	contAbrir++;
}

function cierreVentana(){
	
	if(contCerrar==0){
		for(var z in arrayVentanas){
			arrayindices.push(z);	
		}
	}

	for(var x=0;x<arraySelect.length;x++){
		
		if((arraySelect[x]-1)==arrayindices[contCerrar]){
			
			arrayVentanas[x].close();
			indice=parseInt(arrayindices[x])+1;
			op="Cerrando ventana "+indice/*(parseInt(arrayindices[x])+1)*/;
			arrayopC.push(indice);
			document.getElementById("mensaje").innerHTML+=op+".<br>";
		}
	}

	contCerrar++;
	
}

 document.getElementById("iniciar").onclick=function(){
 	document.getElementById("mensaje").innerHTML="";
 	valoresIniciales();
 	arraySelect.push(select1,select2,select3);
 	interAbre=setInterval("ventanas()",3000);
 	setTimeout("clearInterval("+interAbre+")",9000);
 	comienzocierre=setTimeout(function(){
 		interCierra=setInterval("cierreVentana()",3000);
 		setTimeout("clearInterval("+interCierra+")",9000);
 				},14000);
 	
 }

 document.getElementById("reset").onclick=function(){

if(interAbre==undefined || (interAbre!=undefined && contAbrir==0)){
	document.getElementById("mensaje").innerHTML+="El programa no se ha iniciado<br>";
	setTimeout("clearInterval("+interAbre+")",0);
	clearTimeout(comienzocierre);
}else{
	if(contCerrar==0){
	for(var x=0;x<nVentanas;x++){
		if(arrayVentanas[x]!=undefined){
			document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(x+1)+"<br>";
		}else{
			document.getElementById("mensaje").innerHTML+="Falta por abrir la ventana "+(x+1)+"<br>";
		}
	}
	setTimeout("clearInterval("+interAbre+")",0);
	clearTimeout(comienzocierre);
	}
}

if(interCierra!=undefined){
	clearInterval(interCierra);

	for(var x=0;x<contCerrar;x++){
		var indicecierre=arrayopC[x]-1;
		var num=parseInt(arrayindices[indicecierre])+1;
		if(arrayopC[x]==num){
			arrayindices.splice(indicecierre,1);
		}
	}
	arrayindices.forEach(function(element,index){
		document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(parseInt(element)+1)+"<br>";
	});
	/*clearTimeout(comienzocierre);*/
	/*clearInterval(interCierra);*/
}


 	/*if(contAbrir==0 || contAbrir==undefined){
 		document.getElementById("mensaje").innerHTML+="El programa no se ha iniciado<br>";
 		if(contAbrir==0){
 			setInterval("clearInterval("+interAbre+")",0);
 		}
 		//valoresIniciales();
 	}else{
 		if(contAbrir<nVentanas){
 			for(var x=contAbrir;x<nVentanas;x++){
 						
 						document.getElementById("mensaje").innerHTML+="Falta por abrir la ventana "+(x+1)+"<br>";
 			}
 			for(var x=contAbrir;x>0;x--){
 				document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(x)+"<br>";
 				}
 		}else if(contAbrir==nVentanas && contCerrar==0){
 			for(var x=contAbrir;x>0;x--){
 				document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(x)+"<br>";
 				}
 		}
 		else{
 			if(contCerrar>0){
 				for(var x=0;x<arrayindices.length;x++){
 					numvent=parseInt(arrayindices[x])+1;
 					for(var i=0;i<arrayopC;i++){
 						if (numvent==arrayopC[i]) {
 							var abierta=true;
 						}
 					}
 					if(abierta==false){
 						document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+numvent+"<br>";
 					}
 					
 				}
 	*/			/*for(var x=0;x<arrayindices.length;x++){
 					numvent=parseInt(arrayindices[x])+1;
 					if(numvent==arrayopC[x]){
 						delete arrayindices[x];
 					}
 					
 				}*/
 				/*for(var x=0;x<arrayindices.length;x++){
 					numvent=parseInt(arrayindices[x])+1;
 					if(arrayindices[x]!=undefined){
 						document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+numvent+"<br>";
 					}
 					
 				}*/
 					/*arrayopC.forEach(function(element,index){
 					
 						if (element!="Cerrando ventana "+(index+1)) {

 							document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(index+1)+"<br>";
 						
 						}
 						
 						/*if (arrayopC[index]==arrayopC[i]) {
 							operacion=true;
 						}
 						else{
 							document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+arrayopC[i].substring(arrayopC[i].length-1)+"<br>";	
 						}*/
 					/*});*/
 					
 				 		
 			
 				
 				/*for(var x=1;x<contAbrir;x++){
 					for(var x=0;x<arrayopC.length;x++){

 					}*/
 					/*if(arrayopA[x].substring(arrayopA[x].length-1==)
 						
 						document.getElementById("mensaje").innerHTML+="Falta por cerrar la ventana "+(arrayopC[x])+"<br>";*/
 				
 			/*}
 		}
 	}*/
 		/*setInterval("clearInterval("+interAbre+")",0);
 		clearTimeout(cierraVent);*/
 		//valoresIniciales();
 	

 }

function textoVentana(){
/*http://www.javascripter.net/faq/browsern.htm*/

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera 15+, the true version is after "OPR/" 
if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}                    

return browserName+" "+fullVersion+" "+majorVersion;
}


/*crear array que controle las funciones realizadas ej:abrir ventana1*/
