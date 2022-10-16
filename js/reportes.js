function traerReporteStatus(){
    $.ajax({
        url:"http://192.9.244.214:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaStatus(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
    console.log(items);
    let myTable='<table class="title-font font-medium sm:text-4xl text-3xl">';
 
        myTable+="<tr>";
        myTable+='<td>'+items.completed+'</td>';
        myTable+='<td>'+items.cancelled+'</td>';
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function trearReporteFechas(){

}

function traerReporteClientes(){

}