// Espera que o DOM (Document Object Model) esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // --- Efeito de Fade-In para Links ---
    // Seleciona todos os links dentro da seção com a classe 'links'
    const links = document.querySelectorAll('.links a');

    // Define um atraso base para cada link aparecer
    let delay = 3;

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

    // --- Animação do Personagem Fixo e Balão de Fala ---

  // Lista de imagens do personagem (com diferentes expressões, se tiver)
// CERTIFIQUE-SE QUE ESTES CAMINHOS E NOMES CORRESPONDEM ÀS SUAS IMAGENS NA PASTA 'imagens'
const characterImages = [
    'imagens/neutro.png',   // Corrigido para caminho relativo
    'imagens/feliz.png',    // Corrigido para caminho relativo
    'imagens/pensando.png', // Corrigido para caminho relativo
    'imagens/surpreso.png', // Corrigido para caminho relativo
    // Adicione mais caminhos para suas imagens de expressões aqui
];
    // Lista de textos para o balão de fala, correspondendo às imagens
    // CERTIFIQUE-SE QUE ESTES TEXTOS CORRESPONDEM À SUA SEQUÊNCIA DE IMAGENS
    const characterSpeechTexts = [
        "Olá! Seja bem-vindo(a) ao meu portfólio!",
        "Espero que goste dos meus projetos e ideias.",
        "Estou sempre aprendendo e criando coisas novas.",
        "Vamos conversar sobre o seu próximo projeto?",
        // Adicione mais textos correspondentes às expressões
    ];

    let currentCharacterIndex = 0;
    const characterImage = document.getElementById('characterImage'); // Seleciona a imagem do personagem pelo ID
    const speechBubble = document.getElementById('speechBubble');     // Seleciona o balão de fala pelo ID

    // Função para atualizar a imagem do personagem e o texto do balão
    function updateCharacterAndSpeech() {
        // Primeiro, esconde o balão suavemente antes de mudar o conteúdo
        speechBubble.classList.remove('show-bubble');

        // Um pequeno atraso para o balão sumir antes de aparecer com novo conteúdo
        // Isso sincroniza com a transição CSS de fade-out do balão
        setTimeout(() => {
            // Altera a imagem do personagem
            characterImage.src = characterImages[currentCharacterIndex];

            // Altera o texto do balão
            speechBubble.textContent = characterSpeechTexts[currentCharacterIndex];

            // Mostra o balão com o novo conteúdo
            speechBubble.classList.add('show-bubble');

            // Incrementa o índice para a próxima imagem/texto
            currentCharacterIndex++;

            // Se o índice for maior ou igual ao número de imagens, volta para a primeira
            if (currentCharacterIndex >= characterImages.length) {
                currentCharacterIndex = 0;
            }
        }, 300); // Espera 300ms para a transição de sumir do balão (ajuste se a transição for mais longa)
    }

    // Chama a função pela primeira vez para definir a imagem e texto inicial
    updateCharacterAndSpeech();

    // Define um intervalo para trocar a imagem e o texto a cada X segundos (em milissegundos)
    // Você pode ajustar este tempo conforme a duração desejada para cada fala/expressão
    setInterval(updateCharacterAndSpeech, 5000); // Exemplo: 5 segundos
});