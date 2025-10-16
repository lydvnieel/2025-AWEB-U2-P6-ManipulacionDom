const inputValorCuadrado = document.getElementById('inputValorCuadrado');
const inputResultado = document.getElementById('inputResultado');
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', 
    
    function() {
    let valor = parseFloat(inputValorCuadrado.value);

    if (valor <= 0 || valor == "") {
        inputResultado.textContent = "Error: Tienes que ingresar un número positivo";
        inputResultado.className = "mensaje-error";

        
 
    } else {
        const area = valor * valor;
        inputResultado.textContent = `El área del cuadrado es: ${area}`;
        inputResultado.className = "mensaje-correcto";
     }
    }


);
