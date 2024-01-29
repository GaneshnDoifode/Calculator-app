let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btnAc = document.querySelector("#btnAc");
let btnPlusMinus = document.querySelector("#btnPlusMinus");
let btnPerc = document.querySelector("#btnPerc");
let btnDiv = document.querySelector("#btnDiv");
let btnMul = document.querySelector("#btnMul");
let btnMinus = document.querySelector("#btnMinus");
let btnPlus = document.querySelector("#btnPlus");
let btnDot = document.querySelector("#btnDot");
let btnEqualTo = document.querySelector("#btnEqualTo");


let inputDisplay = new String("");
let a; 
let b;
let operation; 

btnEqualTo.addEventListener("click", () => {
    b = inputDisplay;
    b = Number(b);
    if (operation == "subtract") {
        document.querySelector("#inputbox").innerHTML = a - b;
        inputDisplay = a - b;
    } else if (operation == "plus") {
        document.querySelector("#inputbox").innerHTML = a + b;        
        inputDisplay = a + b;
    }else if (operation == "multiple") {
        document.querySelector("#inputbox").innerHTML = a * b;        
        inputDisplay = a * b;
    } else if (operation == "divide") {
        document.querySelector("#inputbox").innerHTML = a / b;        
        inputDisplay = a / b;
    };
    // inputDisplay = "";
    // a = "";
    // b = "" ;
    operation = "";
})

//we have to work on this to make it positive as well
btnPlusMinus.addEventListener("click", () => {
    // inputDisplay = "-" + inputDisplay;
    // document.querySelector("#inputbox").innerHTML = inputDisplay;
    a = inputDisplay;
    a = Number(a);
    if (a < 0) {
        a = a ** 2;
        a = Math.sqrt(a);
        inputDisplay = a;
        document.querySelector("#inputbox").innerHTML = inputDisplay;
    } else {
        inputDisplay = "-" + inputDisplay;
        document.querySelector("#inputbox").innerHTML = inputDisplay;
    }
})

btnPerc.addEventListener("click", () => {
    a = inputDisplay;
    a = Number(a);
    a /= 100;
    document.querySelector("#inputbox").innerHTML = a;
    inputDisplay = a;
})

btnDiv.addEventListener("click", () => {
    a = inputDisplay;
    a = Number(a);
    inputDisplay = "";
    operation = "divide";
})

btnMul.addEventListener("click", () => {
    a = inputDisplay;
    a = Number(a);
    inputDisplay = "";
    operation = "multiple";
})

btnMinus.addEventListener("click", () => {
    a = inputDisplay;
    a = Number(a);
    inputDisplay = "";
    operation = "subtract";
})

btnPlus.addEventListener("click", () => {
    a = inputDisplay;
    a = Number(a);
    inputDisplay = "";
    operation = "plus";
})

btnDot.addEventListener("click", () => {
    inputDisplay += ".";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})

btnAc.addEventListener("click", () => {
    inputDisplay = new String("");
    document.querySelector("#inputbox").innerHTML = 0;
    a = "";
    b = "";
    operation = "";
})

btn0.addEventListener("click", () => {
    inputDisplay += "0";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn1.addEventListener("click", () => {
    inputDisplay += "1";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn2.addEventListener("click", () => {
    inputDisplay += "2";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn3.addEventListener("click", () => {
    inputDisplay += "3";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn4.addEventListener("click", () => {
    inputDisplay += "4";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn5.addEventListener("click", () => {
    inputDisplay += "5";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn6.addEventListener("click", () => {
    inputDisplay += "6";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn7.addEventListener("click", () => {
    inputDisplay += "7";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn8.addEventListener("click", () => {
    inputDisplay += "8";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})
btn9.addEventListener("click", () => {
    inputDisplay += "9";
    document.querySelector("#inputbox").innerHTML = inputDisplay;
})