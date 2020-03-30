function submitForm1(){
    console.log("Entered inputs:");
    console.log("email="+document.getElementById("exampleInputEmail1").value);
    console.log("password="+document.getElementById("exampleInputPassword1").value);
    console.log("Url="+document.getElementById("url").value);
    console.log("Checked="+document.getElementById("exampleCheck1").checked);
}

function popmessage(){
    confirm(
        "Entered inputs:\n"+
        "Product Number="+document.getElementById("productNumber").value+"\n"+
        "Name="+document.getElementById("name").value+"\n"+
        "Unit Price="+document.getElementById("unitPrice").value+"\n"+
        "Quantity="+document.getElementById("quantity").value+"\n"+
        "Supplier="+document.getElementById("supplier").value+"\n"+
        "Date Supplied="+document.getElementById("dateSupplied").value+"\n"
    );
}