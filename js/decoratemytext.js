/* Author Anene Terefe */
/* file decoratemytext.js */
window.onload = function(){
    "use strict";
    let myInterval;
    function makebig(){
        let font=document.getElementById("text").style.fontSize;
        // eslint-disable-next-line radix
        let fontnumber=parseInt(font)+2;
        // eslint-disable-next-line require-unicode-regexp
        let type= font.replace(/[0-9]/g, '')
        document.getElementById("text").style.fontSize=fontnumber+type;
        
    }
    document.getElementById("biggerdecoration").onclick = function(){
        myInterval=setInterval(makebig, 1000);
    };

    document.getElementById("stopbiggerdecoration").onclick = function(){
        clearInterval(myInterval);
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
        
        let input= document.getElementById("text").value;
        if(input!==""||input!=="undefined"){
            const vowels=['a','e','i','o','u','A','E','I','O','U'];
            let char=input.charAt(0);
            if(!vowels.includes(char)){
                input=input.substr(1);
                input=input+char+"-ay";
                document.getElementById("text").value=input;
            }else{
                input+="-ay";
                document.getElementById("text").value=input;
            }
        }
    }

    document.getElementById("text").oninput=function(){
        let input= document.getElementById("text").value;
        if(input!==""||input!=="undefined"){
            if(input.length>=5){
                document.getElementById("text").value="Malkovich";
            }else{
                document.getElementById("text").value=input;
            }
        }
    }

    document.getElementById("malk").onclick=function(){
        document.getElementById("text").value="";
    }

}