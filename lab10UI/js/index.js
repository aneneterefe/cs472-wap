/*
*@author Anene Terefe
*file index.js
*/ 
"user strict";
$( document ).ready(function() {
    $("#censusForm").submit(function(event){
        event.preventDefault();
        
        const name=$("#fullName").val();
        const citizenId=$("#citizenId").val();
        const state=$("#state").val();
        const ssns=$("#ssn").val();
        const citizen=$('input[name="citizen"]:checked').val();
        $("#data").append("<tr> <td>"+citizenId+"</td><td>"+ssns+"</td><td>"+name+"</td><td>"+state+"</td><td>"+citizen+"</td></tr>");
        $("#divList").css("visibility","visible");
        
    });

});

