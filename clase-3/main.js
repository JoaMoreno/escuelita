screen = document.getElementById("screen");
screen.innerText = "0"

var numero = "";
var parametro1 = "";
var parametro1 = "";
var operacion;

contenedor = document.getElementById("content")
contenedor.addEventListener('click', (event) => {
    const isButton = event.target.tagName === 'BUTTON';
    if (! isButton) {
        return;
    }
    inputVar = event.target.innerText
    // if(isNaN(numero)){
    //     console.log("Letra");
    // }else{
    //     console.log("Numbero");
    // }
    if (inputVar >= 0 && inputVar <= 9) { // console.log("Es number");
        if (parametro1 === "") {
            numero = numero + inputVar;
            screen.innerText = numero;
        } else {
            numero = numero + inputVar;
            screen.innerText = numero;
            parametro2 = numero;
        }

    } else if (inputVar === "=") { // console.log("es string");
        num1 = parseInt(parametro1)
        num2 = parseInt(parametro2)
        switch (operacion) {
            case "+":
                screen.innerText = sumar(num1, num2);
                break;
            case "-":
                screen.innerText = restar(num1, num2)
                break;
            case "/":
                screen.innerText = divid(num1, num2)
                break;
            case "x":
                screen.innerText = mult(num1, num2)
                break;
        }

    } else if (inputVar === "Clear"){
        numero = "";
        parametro1 ="";
        parametro2 ="";
        operacion="";
        screen.innerText = "";
    }else {
        parametro1 = numero;
        operacion = inputVar;
        numero = "";
    }
});

sumar = (num1, num2) => num1 + num2;
restar = (num1, num2) => num1 - num2;
mult = (num1, num2) => num1 * num2;
divid = (num1, num2) => num1 / num2;