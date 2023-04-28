var angle1 = document.querySelector("#angle1");
// console.log(angle1);
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var button = document.querySelector("#button");
var input = document.querySelector("#input1");

function takeSumofAngles() {
  var angleOne = angle1.value;
//   console.log(typeof(angleOne));
  var angletwo = angle2.value;
  var anglethree = angle3.value;
  var angle = parseInt(angleOne);
  var angle_2 = parseInt(angletwo);
  var angle_3 = parseInt(anglethree);
  if(!angle || !angle_2 || !angle_3||angle<0 ||angle_2<0||angle_3<0){
     alert("please enter valid values");
  }
   else if (angle + angle_2 + angle_3 === 180)
    input.innerText = "Yay!!the angles form a triangle";
  else input.innerText = "Oh Oh!!the angles does not form a triangle";
}
button.addEventListener("click", takeSumofAngles);
