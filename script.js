document.getElementById("formCalculadora").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do cachê inserido pelo usuário
    var cache = parseFloat(document.getElementById("cache").value);
    var valorCobrado;

    // Verifica se a opção de ISS está marcada
    var iss = document.getElementById("iss").checked;

    // Calcula o valor a ser cobrado
    if (iss) {
        valorCobrado = cache / (1 - (0.21 + 0.05));
    } else {
        valorCobrado = cache / 0.79;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "Valor a ser cobrado: R$ " + valorCobrado.toFixed(2);
});
