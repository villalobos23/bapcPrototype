/* Application Sripts */

function showSearchControl(){
  var searchControl = document.getElementById("nro_solicitud"),
      requestType = this;
  if(this.value == 1){
    searchControl.className = "col-md-6 hidden";
  }else{
    searchControl.className = "col-md-6";
  }
}

$(function () {
  'use strict';
  
  //mostrar campo cuando se quiera editar
  var requestType = document.getElementById("tipo_solicitud");    
  requestType.addEventListener("change",showSearchControl,false);
});