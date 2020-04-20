alert("opening!!")

document.getElementById("displayValue").innerHTML = "0.0";
var operand1 = "";
var operand2 = "";
var operator = "";
var first = true;

const digitsClicked = document.querySelectorAll(".digit")
digitsClicked.forEach(d => {
    d.addEventListener("click", e => {
        console.log("you clicked on ", d.innerText);
        var x = d.innerText;
        if(first === true) {
            operand1 += x;
            updateDisplay(operand1);
        } else {
            operand2 += x;
            updateDisplay(operand2);
        }
    })
})

const operatorsClicked = document.querySelectorAll(".operator")
operatorsClicked.forEach(o => {
    o.addEventListener("click", e => {
        console.log("you clicked on ", o.innerText);
        operator = o.innerText;
        updateDisplay("");
        first = false;
    })
})

const clearBtnClicked = document.querySelector(".clear")
clearBtnClicked.addEventListener("click", e => {
    console.log("you clicked on ", clearBtnClicked.innerText);
    updateDisplay("");
    first = true;
    operand1="";
    operand2="";
})

const equalBtnClicked = document.querySelector(".equal")
equalBtnClicked.addEventListener("click", e => {
    console.log("you clicked on ", equalBtnClicked.innerText);
    var result;
    switch(operator){
        case '+':
            result = Number(operand1) + Number(operand2);
            break;
        case '-':
            result = Number(operand1) - Number(operand2);
            break;
        case '×':
            result = Number(operand1) * Number(operand2);
            break;
        case '÷':
            result = Number(operand1) / Number(operand2);
            break;
    }
    updateDisplay(result);
    first = true;
    operand1="";
    operand2="";
})

function updateDisplay(value) {
    if(value === "") {
        document.getElementById("displayValue").innerHTML = "0.0";
    } else {
        document.getElementById("displayValue").innerHTML = value;
    }
}
