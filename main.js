document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
    var successMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');

    if (campoB > campoA) {
        successMessage.textContent = 'Formulário válido. Sua mensagem foi enviada com sucesso!';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        // Limpar os campos de entrada após o envio bem-sucedido
        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    } else {
        errorMessage.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
