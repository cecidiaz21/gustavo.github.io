
function calcularPeso() {
    const pesoInput = document.getElementById("peso");
    const resultadoElement = document.getElementById("resultado");

    const peso = parseFloat(pesoInput.value);

    if (isNaN(peso)) {
        resultadoElement.textContent = "Por favor, ingresa un peso válido.";
    } else {
        const resultado = peso * 0.75;
        resultadoElement.textContent = `${resultado.toFixed(2)} `;
    }
}
