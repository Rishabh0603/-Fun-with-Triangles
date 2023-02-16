var button = document.querySelector("#button");
var finalanswer = document.querySelector("#answer");
var answer = document.querySelector("#answer1");

function EventHandler(){
    var d =answer.value;
    if(d === "90°")
    console.log(answer.value);
    else
    console.log("try something new")
}
button.addEventListener("click",EventHandler);