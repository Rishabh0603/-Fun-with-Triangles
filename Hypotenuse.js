var base = document.querySelector("#base");
var height = document.querySelector("#height")
var button1 = document.querySelector("#button");
var output = document.querySelector("#output");


function controlEventListener(){
    
    var base_value = base.value;
    var height_value = height.value;
    base_value = parseFloat(base_value);
     height_value = parseFloat(height_value);
     if(base_value>0 && height_value >0){
    var hypotenuse = Math.sqrt(Math.pow(base_value,2) + Math.pow(height_value,2)).toFixed(2);
    output.innerText = "The length of hypotenuse is " + hypotenuse+" units";}
    else
    alert("Please enter correct value");

}
button.addEventListener("click",controlEventListener);