/* eslint-disable */
/* Author Anene */
/* file lab4.js */
"use strict";

$(document).ready(function(){
   
    /*document.getElementById("form1").addEventListener("submit",function(event){
        event.preventDefault();
        console.log("Entered inputs:");
        console.log("email="+document.getElementById("exampleInputEmail1").value);
        console.log("password="+document.getElementById("exampleInputPassword1").value);
        console.log("Url="+document.getElementById("url").value);
        console.log("Checked="+document.getElementById("exampleCheck1").checked);
    });
    
    document.getElementById("form2").addEventListener("submit",function(event){
        event.preventDefault();
        confirm(
            "Entered inputs:\n"+
            "Product Number="+document.getElementById("productNumber").value+"\n"+
            "Name="+document.getElementById("name").value+"\n"+
            "Unit Price="+document.getElementById("unitPrice").value+"\n"+
            "Quantity="+document.getElementById("quantity").value+"\n"+
            "Supplier="+document.getElementById("supplier").value+"\n"+
            "Date Supplied="+document.getElementById("dateSupplied").value+"\n");
    });*/

    $("#form1").submit(function(event){
        event.preventDefault();
        console.log("Entered inputs:");
        console.log("email="+$("#exampleInputEmail1").val());
        console.log("password="+$("#exampleInputPassword1").val());
        console.log("Url="+$("#url").val());
        console.log("Checked="+$("#exampleCheck1").prop("checked"));
    });
    
    $("#form2").submit(function(event){
        event.preventDefault();
        $("#inputdata").html(
            "Entered inputs:<br>"+
            "Product Number="+$("#productNumber").val()+"<br>"+
            "Name="+$("#name").val()+"<br>"+
            "Unit Price="+$("#unitPrice").val()+"<br>"+
            "Quantity="+$("#quantity").val()+"<br>"+
            "Supplier="+$("#supplier").val()+"<br>"+
            "Date Supplied="+$("#dateSupplied").val()+"<br>");
    });

});