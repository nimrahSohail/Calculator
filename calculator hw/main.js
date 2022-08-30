var input1=parseInt(prompt("ENTER FIRST NUMBER:"));
var input2=parseInt(prompt("ENTER SECOND NUMBER:"));

// PRINTING ON CONSOLE
console.log("FIRST NUMBER IS:",input1);
console.log("SECOND NUMBER IS:",input2);

// "OPERATIONS PRINTING ON CONSOLE"
console.log("Addition of two numbers is:", input1 + input2);
console.log("Subtraction of two numbers is:", input1 - input2);
console.log("Multiplication of two numbers is:", input1 * input2);
console.log("Division of two numbers is:", input1 / input2);
console.log("Remainder of two numbers is:", input1 % input2);

// PRINTING ON SCREEN
document.getElementById("add").innerHTML= input1 + input2;
document.getElementById("sub").innerHTML= input1 - input2;
document.getElementById("mult").innerHTML= input1 * input2;
document.getElementById("div").innerHTML= input1 / input2;
document.getElementById("ren").innerHTML= input1 % input2;

alert("Thankyou for using our app 💖")


