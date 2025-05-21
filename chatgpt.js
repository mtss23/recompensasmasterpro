// Gerenciador de Chat com ChatGPT (Simulação Local Aprimorada)
const ChatGPTManager = {
    // Propriedades
    messages: [],
    isTyping: false,
    suggestedPrompts: [
        "Fale sobre Love and Deep Space",
        "O que é Mo Dao Zu Shi?",
        "Recomende um dorama",
        "O que faz um enfermeiro?",
        "O que é Manhwa BL?"
    ],
    
    // Inicializa o gerenciador de chat
    initialize: function() {
        console.log("Inicializando gerenciador de chat com ChatGPT (Simulação Local Aprimorada)");
        this.loadMessages();
        this.setupEventListeners();
        this.renderMessages();
        this.updateSuggestions(); // Atualiza as sugestões iniciais
    },
    
    // Carrega as mensagens do localStorage
    loadMessages: function() {
        const savedMessages = localStorage.getItem("msaude_chat_messages_sim"); // Chave diferente para não misturar com a versão anterior
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
            console.log(`${this.messages.length} mensagens carregadas (simulação)`);
        } else {
            this.messages = [];
            console.log("Nenhuma mensagem encontrada (simulação), iniciando com chat vazio");
        }
    },
    
    // Salva as mensagens no localStorage
    saveMessages: function() {
        localStorage.setItem("msaude_chat_messages_sim", JSON.stringify(this.messages));
        console.log(`${this.messages.length} mensagens salvas no localStorage (simulação)`);
    },
    
    // Configura os event listeners
    setupEventListeners: function() {
        // Botão de enviar mensagem
        const sendButton = document.getElementById("sendMessageBtn");
        if (sendButton) {
            sendButton.addEventListener("click", () => {
                this.sendMessage();
            });
            console.log("Event listener adicionado ao botão de enviar");
        } else {
            console.error("Botão de enviar não encontrado");
        }
        
        // Campo de entrada (para enviar com Enter)
        const inputField = document.getElementById("chatInput");
        if (inputField) {
            inputField.addEventListener("keypress", (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
            
            // Ajusta a altura do campo de texto conforme o conteúdo
            inputField.addEventListener("input", () => {
                inputField.style.height = "auto";
                inputField.style.height = (inputField.scrollHeight) + "px";
            });
            console.log("Event listeners adicionados ao campo de entrada");
        } else {
            console.error("Campo de entrada não encontrado");
        }
        
        // Chips de sugestão
        const suggestionChips = document.querySelectorAll(".suggestion-chip");
        if (suggestionChips.length > 0) {
            suggestionChips.forEach(chip => {
                chip.addEventListener("click", () => {
                    const prompt = chip.textContent;
                    const inputField = document.getElementById("chatInput");
                    if (inputField) {
                        inputField.value = prompt;
                        this.sendMessage();
                    }
                });
            });
            console.log(`${suggestionChips.length} chips de sugestão configurados`);
        } else {
            console.warn("Nenhum chip de sugestão encontrado");
            
            // Adiciona listener ao container para delegação de eventos (para chips adicionados dinamicamente)
            const emptyChatState = document.getElementById("emptyChatState");
            if (emptyChatState) {
                emptyChatState.addEventListener("click", (e) => {
                    if (e.target.classList.contains("suggestion-chip")) {
                        const prompt = e.target.textContent;
                        const inputField = document.getElementById("chatInput");
                        if (inputField) {
                            inputField.value = prompt;
                            this.sendMessage();
                        }
                    }
                });
                console.log("Event delegation configurada para chips de sugestão");
            }
        }
    },
    
    // Atualiza os chips de sugestão
    updateSuggestions: function() {
        const suggestionContainer = document.querySelector(".suggestion-chips");
        if (!suggestionContainer) {
            console.error("Container de sugestões não encontrado");
            return;
        }
        
        suggestionContainer.innerHTML = ""; // Limpa sugestões antigas
        this.suggestedPrompts.forEach(prompt => {
            const chip = document.createElement("div");
            chip.className = "suggestion-chip";
            chip.textContent = prompt;
            
            // Adiciona o event listener diretamente ao criar o chip
            chip.addEventListener("click", () => {
                const inputField = document.getElementById("chatInput");
                if (inputField) {
                    inputField.value = prompt;
                    this.sendMessage();
                }
            });
            
            suggestionContainer.appendChild(chip);
        });
        console.log("Sugestões atualizadas com event listeners");
    },

    // Renderiza as mensagens na área de chat
    renderMessages: function() {
        const chatMessages = document.getElementById("chatMessages");
        if (!chatMessages) {
            console.error("Área de mensagens não encontrada");
            return;
        }
        
        chatMessages.innerHTML = "";
        
        if (this.messages.length === 0) {
            const emptyChatState = document.getElementById("emptyChatState");
            if (emptyChatState) {
                emptyChatState.style.display = "flex";
            }
            return;
        } else {
            const emptyChatState = document.getElementById("emptyChatState");
            if (emptyChatState) {
                emptyChatState.style.display = "none";
            }
        }
        
        this.messages.forEach(message => {
            const messageElement = this.createMessageElement(message);
            chatMessages.appendChild(messageElement);
        });
        
        this.scrollToBottom();
    },
    
    // Cria um elemento de mensagem
    createMessageElement: function(message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${message.role}`;
        
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "message-avatar";
        
        if (message.role === "user") {
            avatarDiv.textContent = "U";
        } else {
            const avatarImg = document.createElement("img");
            avatarImg.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg";
            avatarImg.alt = "ChatGPT";
            avatarDiv.appendChild(avatarImg);
        }
        
        const contentDiv = document.createElement("div");
        contentDiv.className = "message-content";
        // Usar innerHTML para renderizar quebras de linha
        contentDiv.innerHTML = message.content.replace(/\n/g, "<br>");
        
        const timeDiv = document.createElement("div");
        timeDiv.className = "message-time";
        timeDiv.textContent = this.formatTime(message.timestamp);
        
        contentDiv.appendChild(timeDiv);
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        return messageDiv;
    },
    
    // Formata o timestamp para exibição
    formatTime: function(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    },
    
    // Envia uma mensagem do usuário
    sendMessage: function() {
        const inputField = document.getElementById("chatInput");
        if (!inputField) {
            console.error("Campo de entrada não encontrado ao enviar mensagem");
            return;
        }
        
        const message = inputField.value.trim();
        console.log("Tentando enviar mensagem:", message);
        
        if (!message || this.isTyping) {
            console.log("Mensagem vazia ou já está digitando, ignorando");
            return;
        }
        
        this.addMessage("user", message);
        inputField.value = "";
        inputField.style.height = "auto";
        this.simulateResponse(message);
    },
    
    // Adiciona uma mensagem ao chat
    addMessage: function(role, content) {
        const message = {
            role: role,
            content: content,
            timestamp: new Date().toISOString()
        };
        
        this.messages.push(message);
        this.saveMessages();
        this.renderMessages();
    },
    
    // Simula a digitação e resposta do ChatGPT
    simulateResponse: function(userMessage) {
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(userMessage);
            this.addMessage("assistant", response);
        }, 1000 + Math.random() * 1500); // Tempo de resposta entre 1 e 2.5 segundos
    },
    
    // Mostra o indicador de digitação
    showTypingIndicator: function() {
        this.isTyping = true;
        const chatMessages = document.getElementById("chatMessages");
        if (!chatMessages) {
            console.error("Área de mensagens não encontrada ao mostrar indicador de digitação");
            return;
        }
        
        const typingIndicator = document.createElement("div");
        typingIndicator.id = "typingIndicator";
        typingIndicator.className = "typing-indicator";
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement("div");
            dot.className = "typing-dot";
            typingIndicator.appendChild(dot);
        }
        chatMessages.appendChild(typingIndicator);
        this.scrollToBottom();
        
        const sendButton = document.getElementById("sendMessageBtn");
        if (sendButton) sendButton.disabled = true;
    },
    
    // Esconde o indicador de digitação
    hideTypingIndicator: function() {
        this.isTyping = false;
        const typingIndicator = document.getElementById("typingIndicator");
        if (typingIndicator) typingIndicator.remove();
        
        const sendButton = document.getElementById("sendMessageBtn");
        if (sendButton) sendButton.disabled = false;
    },

    // Gera uma resposta baseada na mensagem do usuário (EXPANDIDO)
    generateResponse: function(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        // --- Love and Deep Space ---
        if (lowerMessage.includes("love and deep space") || lowerMessage.includes("lads")) {
            const ladsResponses = [
                "Love and Deepspace é um jogo otome 3D de ficção científica e romance! Você joga como uma protagonista que se envolve com três caçadores espaciais incrivelmente charmosos: Xavier, Rafayel e Zayne. O jogo mistura elementos de combate em tempo real, exploração e, claro, muito romance e interação com os personagens. Qual deles te interessa mais?",
                "Ah, Love and Deepspace! É conhecido por seus gráficos 3D impressionantes e interações imersivas. Você pode tirar fotos com os personagens, participar de combates emocionantes usando suas habilidades "Evol" e desbloquear memórias e histórias profundas com cada um dos rapazes. O sistema gacha é para obter "Memories" (cartas) que fortalecem seus personagens e desbloqueiam novas cenas. Já jogou ou tem curiosidade sobre algum aspecto específico?",
                "Em Love and Deepspace, você não apenas namora, mas também luta ao lado dos personagens! Xavier é um caçador misterioso com poderes de luz, Rafayel é um artista apaixonado com poderes de fogo, e Zayne é um cirurgião cardíaco genial com poderes de gelo. Cada um tem uma rota e segredos próprios. A história envolve mistérios sobre os "Wanderers" e o passado da protagonista. Qual personagem você acha mais intrigante?",
                "Love and Deepspace se destaca por permitir uma experiência muito pessoal. Você pode customizar a aparência da sua protagonista e as interações são bem dinâmicas, incluindo até mesmo momentos em primeira pessoa. As cartas (Memories) são essenciais tanto para o combate quanto para aprofundar o relacionamento. É um jogo que realmente investe na imersão romântica e na ação! Quer saber mais sobre o combate ou as interações?"
            ];
            return this.getRandomResponse(ladsResponses);
        }

        // --- Mo Dao Zu Shi (MDZS) ---
        if (lowerMessage.includes("mo dao zu shi") || lowerMessage.includes("mdzs") || lowerMessage.includes("wei wuxian") || lowerMessage.includes("lan wangji") || lowerMessage.includes("the untamed") || lowerMessage.includes("chen qing ling") || lowerMessage.includes("grandmaster of demonic cultivation")) {
            const mdzsResponses = [
                "Mo Dao Zu Shi (O Grão-Mestre da Cultivação Demoníaca) é uma obra incrível! Originalmente uma web novel chinesa de Mo Xiang Tong Xiu (MXTX), ela explora um mundo de fantasia xianxia com cultivadores, clãs, magia e mistério. A história segue Wei Wuxian, um cultivador brilhante e não convencional que morre e reencarna, reencontrando Lan Wangji, um cultivador justo e estóico com quem compartilha um passado complexo e um profundo laço. Você prefere falar sobre a novel, o donghua (anime), o manhua ou o live-action (The Untamed)?",
                "Ah, MDZS! É uma história épica sobre Wei Wuxian, que trilha o caminho da cultivação demoníaca e se torna temido, e Lan Wangji, que sempre busca a justiça. Após sua morte e ressurreição, Wei Wuxian se une a Lan Wangji para desvendar mistérios do passado e do presente, enfrentando conspirações e fantasmas. A relação entre eles (WangXian) é o coração da história, um romance BL (Boys Love) sutil e poderoso. Qual adaptação você mais gosta?",
                "Mo Dao Zu Shi tem várias adaptações aclamadas! O donghua (anime chinês) é conhecido pela animação fluida e fidelidade à novel. O manhua (quadrinho chinês) tem uma arte belíssima e detalhada. E claro, o live-action "The Untamed" (Chen Qing Ling) se tornou um fenômeno global, mesmo adaptando o romance BL de forma mais implícita devido à censura, a química entre os atores Xiao Zhan (Wei Wuxian) e Wang Yibo (Lan Wangji) conquistou muitos fãs. Quer detalhes sobre alguma delas?",
                "O universo de Mo Dao Zu Shi é rico em detalhes: os clãs de cultivadores (como Gusu Lan, Yunmeng Jiang, Lanling Jin, Qishan Wen), as técnicas de cultivação, os instrumentos musicais mágicos (como a guqin de Lan Wangji e a flauta de Wei Wuxian), e os mistérios envolvendo o Tigre de Estígio e a morte de Wei Wuxian. É uma trama cheia de ação, drama, romance e reviravoltas. Qual elemento do mundo de MDZS te fascina mais?"
            ];
            return this.getRandomResponse(mdzsResponses);
        }

        // --- Doramas ---
        if (lowerMessage.includes("dorama") || lowerMessage.includes("drama coreano") || lowerMessage.includes("k-drama") || lowerMessage.includes("c-drama") || lowerMessage.includes("j-drama")) {
            const doramaResponses = [
                "Doramas são séries de televisão asiáticas, muito populares especialmente as da Coreia do Sul (K-dramas), China (C-dramas) e Japão (J-dramas). Eles abrangem uma variedade enorme de gêneros: romance, comédia, ação, suspense, histórico, fantasia, slice-of-life... O formato geralmente tem um número limitado de episódios (16 é comum para K-dramas), com histórias bem desenvolvidas e produção de alta qualidade. Qual gênero de dorama você mais gosta?",
                "Os doramas conquistaram o mundo! K-dramas como \"Pousando no Amor\", \"Goblin\", \"Round 6\" ou \"Vincenzo\" são exemplos de sucessos globais. C-dramas históricos como \"The Untamed\" ou romances modernos como \"Love O2O\" também têm muitos fãs. J-dramas costumam ter histórias mais curtas e focadas, como \"Alice in Borderland\". A variedade é imensa! Você está procurando recomendações ou quer saber sobre algum dorama específico?",
                "O que torna os doramas tão cativantes? Muitos apontam a qualidade da produção, as trilhas sonoras marcantes (OSTs), os roteiros bem amarrados (mesmo com clichês adoráveis!), a atuação talentosa e a exploração de temas culturais específicos. Além disso, a forma como desenvolvem os relacionamentos, sejam românticos, familiares ou de amizade, costuma ser um ponto forte. Qual aspecto dos doramas mais te atrai?",
                "Para assistir doramas, existem várias plataformas de streaming como Netflix, Viki (Rakuten Viki), Kocowa, iQIYI, WeTV... Muitas oferecem legendas em português. A escolha da plataforma pode depender do tipo de dorama que você procura (coreano, chinês, japonês) e se prefere opções gratuitas com anúncios ou assinaturas pagas. Você usa alguma dessas plataformas?"
            ];
            return this.getRandomResponse(doramaResponses);
        }

        // --- Saúde e Enfermagem ---
        if (lowerMessage.includes("saúde") || lowerMessage.includes("enfermagem") || lowerMessage.includes("enfermeiro") || lowerMessage.includes("hospital") || lowerMessage.includes("cuidado") || lowerMessage.includes("paciente")) {
            const healthNursingResponses = [
                "Saúde e Enfermagem são áreas fascinantes e vitais! A enfermagem vai muito além de administrar medicamentos; envolve o cuidado integral do paciente, considerando aspectos físicos, emocionais e sociais. O Processo de Enfermagem (coleta de dados, diagnóstico, planejamento, implementação e avaliação) é a base científica para um cuidado seguro e eficaz. Você tem interesse em alguma área específica da enfermagem, como emergência, pediatria, saúde mental ou saúde pública?",
                "A enfermagem moderna se baseia em evidências científicas. Isso significa que as práticas de cuidado são constantemente atualizadas com base nas melhores pesquisas disponíveis para garantir a segurança e a eficácia do tratamento. Enfermeiros são essenciais na promoção da saúde, prevenção de doenças, tratamento e reabilitação. Qual o papel do enfermeiro que você considera mais importante?",
                "Existem muitas especialidades na enfermagem! Temos enfermeiros intensivistas (UTI), obstetras (parto e pós-parto), pediátricos (crianças), geriátricos (idosos), psiquiátricos (saúde mental), de centro cirúrgico, de saúde da família... Cada área exige conhecimentos e habilidades específicas, mas todas compartilham o foco no cuidado humanizado e na defesa dos direitos do paciente. Você já pensou em seguir carreira na área da saúde?",
                "Além do cuidado direto ao paciente, enfermeiros também atuam em gestão, educação, pesquisa e políticas de saúde. É uma profissão com muitos desafios, como longas jornadas e lidar com situações difíceis, mas também extremamente recompensadora. A tecnologia também está transformando a enfermagem, com prontuários eletrônicos, telemedicina e novos equipamentos. O que mais te interessa sobre o futuro da enfermagem?",
                // Mantendo respostas de bem-estar geral também
                "Falando em saúde, manter hábitos saudáveis é crucial. Isso inclui alimentação balanceada, exercícios regulares, sono reparador e cuidado com a saúde mental. Pequenas mudanças no dia a dia podem fazer uma grande diferença a longo prazo. Qual hábito saudável você está tentando incorporar na sua rotina?",
                "A prevenção é um pilar da saúde. Realizar check-ups regulares, manter as vacinas em dia e adotar um estilo de vida saudável são formas eficazes de evitar muitas doenças. Você costuma fazer exames preventivos anualmente?"
            ];
            return this.getRandomResponse(healthNursingResponses);
        }

        // --- Boy Love (BL) Manhwa ---
        if (lowerMessage.includes("bl manhwa") || lowerMessage.includes("manhwa bl") || lowerMessage.includes("boys love manhwa")) {
            const blManhwaResponses = [
                "Manhwa BL (Boys Love) são quadrinhos sul-coreanos focados em relacionamentos românticos entre personagens masculinos. Assim como os mangás BL japoneses, eles exploram uma variedade de gêneros e temas, mas frequentemente têm um estilo de arte distinto, leitura vertical (otimizada para webtoons) e, às vezes, abordagens culturais diferentes. Você tem algum título favorito ou quer recomendações?",
                "O universo dos Manhwas BL é vasto! Existem obras de fantasia, slice-of-life, comédia romântica, drama intenso, omegaverse... Alguns títulos populares incluem \"Painter of the Night\", \"BJ Alex\", \"Semantic Error\" (que também virou dorama!), \"Killing Stalking\" (mais sombrio), \"Here U Are\". A popularidade cresceu muito com plataformas como Lezhin Comics, Tappytoon, Tapas. Qual gênero de BL você prefere?",
                "Uma característica comum em muitos manhwas (incluindo BLs) é o formato webtoon: painéis longos projetados para rolagem vertical em smartphones. Isso influencia o ritmo da narrativa e o layout das cenas. A arte costuma ser colorida e detalhada. Comparado ao mangá BL, alguns fãs notam diferenças nos tropos ou na intensidade das histórias. Você já leu mangá BL para comparar?",
                "Ao procurar Manhwas BL, é importante usar plataformas oficiais para apoiar os criadores. Lezhin Comics, Tappytoon, Tapas, Manta Comics são algumas das principais que oferecem traduções legais. Muitas têm conteúdo gratuito e opções de assinatura ou compra de capítulos. Você costuma ler em qual plataforma?"
            ];
            return this.getRandomResponse(blManhwaResponses);
        }

        // --- Manhwa (Geral) ---
        if (lowerMessage.includes("manhwa") && !lowerMessage.includes("bl")) { // Evita conflito com BL Manhwa
            const manhwaResponses = [
                "Manhwa (만화) é o termo coreano para quadrinhos e cartoons. Internacionalmente, refere-se especificamente aos quadrinhos da Coreia do Sul. Uma característica marcante é o formato webtoon, otimizado para leitura vertical em dispositivos digitais, e o uso frequente de cores. Você gosta de ler webtoons?",
                "Os gêneros de manhwa são super variados! Temos ação e fantasia com sistemas de níveis e reencarnação (como \"Solo Leveling\", \"Omniscient Reader's Viewpoint\"), romances intensos (como \"True Beauty\", que virou dorama), thrillers psicológicos (como \"Bastard\"), comédias escolares e muito mais. Qual gênero te atrai mais?",
                "Plataformas como Webtoon (da Naver), Tapas, Tappytoon, Lezhin Comics e KakaoPage são as principais portas de entrada para o mundo dos manhwas. Elas popularizaram o formato globalmente, oferecendo traduções oficiais em várias línguas. Muitas obras de sucesso nessas plataformas acabam ganhando adaptações para anime ou dorama. Você acompanha alguma série específica nessas plataformas?",
                "Comparando com mangás (japoneses) e manhuas (chineses), os manhwas se destacam pelo formato webtoon vertical e pelo estilo de arte, que pode variar bastante mas frequentemente incorpora cores vibrantes. As narrativas também podem ter um ritmo diferente devido ao formato de rolagem. Você percebe essas diferenças ao ler quadrinhos de diferentes países?"
            ];
            return this.getRandomResponse(manhwaResponses);
        }

        // --- Respostas Genéricas Aprimoradas (Fallback) ---
        const genericResponses = [
            "Esse é um tema interessante! Me conte mais sobre o que te chama atenção nesse assunto.",
            "Entendo. Você poderia elaborar um pouco mais sobre isso? Gostaria de entender melhor sua perspectiva.",
            "Que interessante! Não tenho informações muito detalhadas sobre isso na minha base atual, mas posso tentar relacionar com os temas que conheço, como bem-estar ou narrativas. O que especificamente te interessa?",
            "Hmm, isso foge um pouco dos temas que foram programados em mim (jogos, animes/doramas específicos, saúde, manhwas). Mas posso tentar oferecer uma resposta geral. O que você gostaria de saber?",
            "Obrigado por trazer esse ponto. Embora meu foco seja em alguns temas específicos, estou sempre aprendendo. Pode me dar mais contexto sobre sua pergunta?",
            "Essa é uma pergunta curiosa! Como sou uma simulação, meu conhecimento é limitado aos dados que me forneceram. Posso não ter a resposta exata, mas podemos conversar sobre temas relacionados!",
            "Interessante! Me fale mais sobre por que esse assunto te interessa.",
            "Compreendo. Você está buscando informações factuais ou uma opinião sobre isso?",
            "Esse tópico é bem específico! Posso tentar conectar com algo que sei, ou você pode tentar reformular a pergunta focando em aspectos de entretenimento, saúde ou cultura pop asiática?",
            "Agradeço a pergunta! Embora eu não seja o ChatGPT completo, posso tentar ajudar com base nos temas que conheço. Qual a sua principal dúvida sobre isso?"
        ];
        return this.getRandomResponse(genericResponses);
    },
    
    // Retorna uma resposta aleatória de um array
    getRandomResponse: function(responsesArray) {
        const randomIndex = Math.floor(Math.random() * responsesArray.length);
        return responsesArray[randomIndex];
    },
    
    // Rola a área de mensagens para o final
    scrollToBottom: function() {
        const chatMessages = document.getElementById("chatMessages");
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    },
    
    // Limpa o histórico de chat (opcional, pode ser chamado por um botão)
    clearChat: function() {
        this.messages = [];
        this.saveMessages();
        this.renderMessages();
    }
};

// Inicializa o gerenciador de chat quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado, verificando aba de chat");
    
    // Inicializa imediatamente se a aba de chat estiver visível
    if (document.getElementById("chatTab") && 
        document.getElementById("chatTab").style.display !== "none") {
        console.log("Aba de chat visível, inicializando imediatamente");
        ChatGPTManager.initialize();
    }
    
    // Adiciona listener para cliques nas abas
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");
            console.log("Clique na aba:", tabId);
            
            if (tabId === "chatTab") {
                console.log("Aba de chat clicada, inicializando");
                setTimeout(() => {
                    ChatGPTManager.initialize();
                }, 100);
            }
        });
    });
});

// Inicialização adicional quando a janela terminar de carregar
window.addEventListener("load", function() {
    console.log("Janela totalmente carregada, verificando aba de chat");
    
    // Verifica se a aba de chat está ativa
    const chatTab = document.querySelector(".tab[data-tab='chatTab']");
    if (chatTab && chatTab.classList.contains("active")) {
        console.log("Aba de chat ativa após carregamento completo, inicializando");
        ChatGPTManager.initialize();
    }
});
