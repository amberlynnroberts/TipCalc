function tipCal(){

var totalNum = document.getElementById("total").value;
var personNum = document.getElementById("person").value;
var tipNum = document.getElementById("tip").value;
var payNum = (totalNum * tipNum) / personNum;
var total = Math.round(payNum)


if ((totalNum === "" && personNum === "") || (isNaN(totalNum) === true && isNaN(personNum) === true)){
   document.getElementById("warning1").innerHTML = "Please fill number.";
   document.getElementById("warning2").innerHTML = "Please fill number.";
   document.getElementById("total").value = "";
   document.getElementById("person").value = "";
 } 
else if (totalNum === "" || isNaN(totalNum) === true){
   document.getElementById("warning1").innerHTML = "Please fill number.";
   document.getElementById("total").value = "";
 }

else if (personNum === "" || isNaN(personNum) === true){
   document.getElementById("warning2").innerHTML = "Please fill number.";
   document.getElementById("person").value = "";
 } 
  else {
    document.getElementById("total").value = "";
    document.getElementById("person").value = "";
    document.getElementById("warning1").innerHTML = "";
    document.getElementById("warning2").innerHTML = "";
    document.getElementById("result").innerHTML = alert(total + " each person");
 
 }
  
}

