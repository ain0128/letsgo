
// document.getElementById("myButton").addEventListener("click", myFunction);

// function myFunction() {
//   // code to execute when button is clicked
//   var buttonValue = document.getElementById("myButton").value;
//   document.getElementById("result").innerHTML = buttonValue;
// }




//const button7 = document.getElementById("myButton");
//const resultArea = document.getElementById("result");

//button7.addEventListener("click", () => {
//  resultArea.innerHTML = button7.textContent;
//});


//const buttons = document.querySelectorAll("button");
//const resultArea = document.getElementById("result");

//buttons.forEach((button) => {
  //button.addEventListener("click", () => {
    //resultArea.innerHTML = button.textContent;
 // });
//});


const resultArea = document.getElementById("result");
let currentText = "";

function appendValue(buttonValue) {
  currentText += buttonValue;
  resultArea.innerHTML = currentText;
}

// add event listeners to all buttons
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", () => {
    appendValue(button.textContent);
    resultArea.textContent = result;
    const result = eval(resultArea);
    
  });
}



// const equalButton = document.getElementById("button");
// const resultArea = document.getElementById("result");

// equalButton.addEventListener("click", () => {
//   const inputText = resultArea.textContent;
//   const result = eval(inputText);
//   resultArea.textContent = result;
// });



