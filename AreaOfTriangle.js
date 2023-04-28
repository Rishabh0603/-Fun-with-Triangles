var input1 = document.querySelector("#firstSide");
var input2 = document.querySelector("#secondSide");
var input3 = document.querySelector("#thirdSide");
var button = document.querySelector("#button");
var output= document.querySelector("#output");

function find_semiPerimeter(){
    var inputone = input1.value;
    var inputtwo = input2.value;
    var inputthree = input3.value;
    inputone = parseFloat(inputone);
    inputtwo = parseFloat(inputtwo);
    inputthree = parseFloat(inputthree);
    var sum = (inputone + inputtwo + inputthree)/2;
    return sum;
}
function find_Area(){

    var a = parseFloat(input1.value);
    var b = parseFloat(input2.value);
    var c = parseFloat(input3.value);
    var s = find_semiPerimeter();
    
    if(s>a && s>b && s>c){
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;}
    else
    return -1;

}

function EventListener(){

var area = find_Area();
area = area.toFixed(3);
if(area != -1){
output.innerText ="Area of triangle using heron's formula is  "+area+" units";}
else
alert("Please enter valid sides");

   }

button.addEventListener("click",EventListener);