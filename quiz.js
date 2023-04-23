var button = document.querySelector("#button");
var output = document.querySelector("#output");
var forms = document.querySelector("#forms");

var correctAnswers=["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","85°","40°","a + b + c","two","45°"];

function calculateScore(){
   let score = 0;
   let index =0;
   let formresult = new FormData(forms);
  for(let value of formresult.values()){
    console.log(value);
    if(value === correctAnswers[index])
     score += 1;
    index = index+1;
  }
  output.innerText = "Final score is "+score;
  
   
}

button.addEventListener("click",calculateScore);