// Espera que o DOM (Document Object Model) esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links dentro da seção com a classe 'links'
    const links = document.querySelectorAll('.links a');

    // Define um atraso base para cada link aparecer
    let delay = 0;

    // Itera sobre cada link encontrado
    links.forEach(function(link, index) {
        // Adiciona a classe 'fade-in' ao link após um certo atraso
        // Isso aciona a transição CSS definida anteriormente
        setTimeout(function() {
            link.classList.add('fade-in');
        }, delay);

        // Aumenta o atraso para o próximo link, criando uma sequência
        delay += 150; // Aumenta o atraso em 150 milissegundos para cada link
    });
});