document.getElementById("formCalculadora").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do cachê inserido pelo usuário
    var cache = parseFloat(document.getElementById("cache").value);

    // Calcula o valor a ser cobrado
    var valorCobrado = cache / 0.79;

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "Valor a ser cobrado: R$ " + valorCobrado.toFixed(2);
});
