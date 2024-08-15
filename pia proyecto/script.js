document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const code = document.getElementById('code').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simular la verificación del código con múltiples opciones
    if (code === 'maxito' ||code === 'Maxito') {
        window.location.href = 'index2.html'; // Redirigir a otra página
    } else if (code === 'Maxito' ||code === 'papitas') {
        errorMessage.textContent = 'Quizas el código no sea cómida.'; // Redirigir a otra página diferente
    } else if (code === 'max'||code === 'pololo') {
        errorMessage.textContent = 'Casi, pero más específico.'; // Redirigir a otra página aún diferente
    } else {
        errorMessage.textContent = 'Código incorrecto.';
    }
});
