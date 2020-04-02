/* Author Anene Terefe */
/* file decoratemytext.js */
window.onload = function(){
    "use strict";
    
    function makebig(){
        let font=document.getElementById("text").style.fontSize;
        // eslint-disable-next-line radix
        let fontnumber=parseInt(font)+2;
        // eslint-disable-next-line require-unicode-regexp
        let type= font.replace(/[0-9]/g, '')
        document.getElementById("text").style.fontSize=fontnumber+type;
        
    }
    document.getElementById("biggerdecoration").onclick = function(){
        setInterval(function() {
            makebig()
        }, 500);
    };

    document.getElementById("bling").onchange=function(){
        let checked=document.getElementById("bling").checked;
        let text=document.getElementById("text");
        if(checked===true){
            text.style.fontWeight="bold";
            text.style.color="green";
            text.style.textDecoration="underline";
            document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
            
        }else{
            text.style.fontWeight="normal";
            text.style.color="black";
            text.style.textDecoration="none";
            document.body.style.backgroundImage="url()";
            
        }
    };

    document.getElementById("converter").onclick=function(){
        
        let input= document.getElementById("letter").value;
        if(input!==""||input!=="undefined"){
            const vowels=['a','e','i','o','u','A','E','I','O','U'];
            let char=input.charAt(0);
            if(!vowels.includes(char)){
                input=input.substr(1);
                input=input+char+"-ay";
                document.getElementById("output").innerHTML=input;
            }else{
                input+="-ay";
                document.getElementById("output").innerHTML=input;
            }
        }
    }

    document.getElementById("letter2").oninput=function(){
        let input= document.getElementById("letter2").value;
        if(input!==""||input!=="undefined"){
            if(input.length>=5){
                document.getElementById("letter2").value="Malkovich";
            }else{
                document.getElementById("letter2").value=input;
            }
        }
    }

    document.getElementById("malk").onclick=function(){
        document.getElementById("letter2").value="";
    }

}