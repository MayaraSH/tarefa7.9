document.querySelector('.form-number').addEventListener('submit', function(event) {
    event.preventDefault();

    let numeroA = parseFloat(document.getElementById('numeroA').value);
    let numeroB = parseFloat(document.getElementById('numeroB').value);
    let mensagem = document.getElementById('mensagem');

    if (numeroB > numeroA) {
        mensagem.textContent = 'Formulário válido! Número B é maior que Número A.';
        mensagem.className = 'mensagem mensagem-positiva';
    } else {
        mensagem.textContent = 'Formulário inválido! Número B deve ser maior que Número A.';
        mensagem.className = 'mensagem mensagem-negativa';
    }
});
