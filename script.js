// Espera que o DOM (Document Object Model) esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // --- Efeito de Fade-In para Links ---
    // Seleciona todos os links dentro da seção com a classe 'links'
    const links = document.querySelectorAll('.links a');

    // Define um atraso base para cada link aparecer
    let delay = 0;

    // Itera sobre cada link encontrado
    links.forEach(function(link) { // Removido 'index' pois não é usado aqui
        setTimeout(function() {
            link.classList.add('fade-in');
        }, delay);

        // Aumenta o atraso para o próximo link, criando uma sequência
        delay += 150; // Aumenta o atraso em 150 milissegundos para cada link
    });

    // --- Animação do Personagem Fixo e Balão de Fala ---

    // Lista de imagens do personagem (com diferentes expressões)
    // IMPORTANTÍSSIMO: VERIFIQUE E AJUSTE ESTES CAMINHOS E NOMES
    // Eles devem corresponder EXATAMENTE aos arquivos na sua pasta 'imagens'
    const characterImages = [
        'imagens/neutro.png',   // Ex: Imagem 1 (neutro)
        'imagens/feliz.png',    // Ex: Imagem 2 (feliz)
        'imagens/pensando.png', // Ex: Imagem 3 (pensando)
        'imagens/surpreso.png', // Ex: Imagem 4 (surpreso)
        // Adicione mais caminhos para suas imagens de expressões aqui
    ];

    // Lista de textos para o balão de fala, correspondendo às imagens
    // CERTIFIQUE-SE QUE ESTES TEXTOS CORRESPONDEM À SUA SEQUÊNCIA DE IMAGENS
    const characterSpeechTexts = [
        "Olá! Seja bem-vindo(a) ao meu portfólio!",
        "Espero que goste dos meus projetos e ideias.",
        "Estou sempre aprendendo e criando coisas novas.",
        "Vamos conversar sobre o próximo projeto?",
        // Adicione mais textos correspondentes às expressões
    ];

    let currentCharacterIndex = 0;
    const characterImage = document.getElementById('characterImage');
    const speechBubble = document.getElementById('speechBubble');

    // Função para atualizar a imagem do personagem e o texto do balão
    function updateCharacterAndSpeech() {
        // Primeiro, esconde o balão suavemente antes de mudar o conteúdo
        speechBubble.classList.remove('show-bubble');

        // Um pequeno atraso para o balão sumir antes de aparecer com novo conteúdo
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
    // Ajuste este tempo conforme a duração desejada para cada fala/expressão
    setInterval(updateCharacterAndSpeech, 5000); // Exemplo: 5 segundos

    // --- Validação Básica do Formulário de Contato ---
    const contactForm = document.getElementById('contactForm');

    // Adiciona um "listener" para o evento de submissão do formulário
    contactForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
        event.preventDefault();

        // Limpa mensagens de erro anteriores
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove()); // Remove todos os elementos de erro existentes

        let isValid = true; // Flag para verificar se o formulário é válido

        // Validação do campo Nome
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') { // .trim() remove espaços em branco antes e depois do texto
            displayError(nameInput, 'Por favor, preencha seu nome.');
            isValid = false;
        }

        // Validação do campo Email
        const emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'Por favor, preencha seu email.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) { // Valida formato do email
            displayError(emailInput, 'Por favor, insira um email válido.');
            isValid = false;
        }

        // Validação do campo Mensagem
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Por favor, preencha sua mensagem.');
            isValid = false;
        }

        // Se o formulário for válido, podemos "simular" o envio
        if (isValid) {
            alert('Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)');
            contactForm.reset(); // Limpa o formulário
            // Futuramente, aqui você adicionaria o código para realmente enviar o formulário (ex: Fetch API para um backend)
        }
    });

    // Função auxiliar para exibir mensagens de erro
    function displayError(inputElement, message) {
        const errorMessage = document.createElement('p'); // Cria um novo parágrafo
        errorMessage.classList.add('error-message');     // Adiciona a classe de erro
        errorMessage.textContent = message;              // Define o texto da mensagem

        // Insere a mensagem de erro logo abaixo do input
        inputElement.parentNode.appendChild(errorMessage);
        errorMessage.style.display = 'block'; // Garante que a mensagem seja visível
    }

    // Função auxiliar para validar o formato do email (simples)
    function isValidEmail(email) {
        // Regex simples para validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});