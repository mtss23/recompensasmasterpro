// Arquivo principal do quiz

// Perguntas incorporadas diretamente no arquivo para não depender de arquivos externos
// The Love And Deepspace - Fácil
const theLoveDeepspaceFacil = [
    {
        pergunta: "Qual é o cenário principal de 'The Love And Deepspace'?",
        opcoes: ["Uma estação espacial abandonada", "Uma nave explorando o espaço profundo", "Um planeta alienígena hostil", "Uma colônia lunar"],
        resposta: 1
    },
    {
        pergunta: "Quem é o protagonista principal de 'The Love And Deepspace'?",
        opcoes: ["Capitão Zayne", "Comandante Elara", "Tenente Nova", "Navegador Orion"],
        resposta: 0
    },
    {
        pergunta: "Qual é a missão principal da tripulação em 'The Love And Deepspace'?",
        opcoes: ["Conquistar novos planetas", "Explorar anomalias espaciais desconhecidas", "Fugir de uma ameaça alienígena", "Estabelecer colônias em outros planetas"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome da nave espacial principal em 'The Love And Deepspace'?",
        opcoes: ["Nebulosa", "Estrela Cadente", "Aurora", "Horizonte"],
        resposta: 3
    },
    {
        pergunta: "Qual recurso é essencial para a sobrevivência da tripulação no espaço profundo?",
        opcoes: ["Cristais de energia", "Água purificada", "Oxigênio comprimido", "Alimentos sintéticos"],
        resposta: 0
    },
    {
        pergunta: "Qual é o sistema de relacionamento presente no jogo?",
        opcoes: ["Sistema de amizade simples", "Sistema de romance com múltiplos finais", "Apenas diálogos sem consequências", "Não há sistema de relacionamento"],
        resposta: 1
    },
    {
        pergunta: "Qual é a duração aproximada da história principal de 'The Love And Deepspace'?",
        opcoes: ["5-10 horas", "15-20 horas", "25-30 horas", "Mais de 40 horas"],
        resposta: 2
    },
    {
        pergunta: "Qual é o estilo visual predominante em 'The Love And Deepspace'?",
        opcoes: ["Pixel art retrô", "3D realista", "Anime estilizado", "Arte vetorial minimalista"],
        resposta: 2
    },
    {
        pergunta: "Qual é o sistema de combate presente em 'The Love And Deepspace'?",
        opcoes: ["Combate em tempo real", "Combate baseado em turnos", "Combate estratégico com posicionamento", "Não há sistema de combate"],
        resposta: 1
    },
    {
        pergunta: "Qual é a principal forma de locomoção entre planetas no jogo?",
        opcoes: ["Portais de teletransporte", "Viagens em hiperespaço", "Dobras espaciais", "Túneis de minhoca"],
        resposta: 1
    },
    {
        pergunta: "Qual é a raça alienígena amigável que ajuda a tripulação?",
        opcoes: ["Luminídeos", "Nebulianos", "Astrais", "Celestiais"],
        resposta: 3
    },
    {
        pergunta: "Qual é o principal antagonista em 'The Love And Deepspace'?",
        opcoes: ["Comandante Sombra", "Império Estelar", "Coletivo Void", "Federação Galáctica"],
        resposta: 2
    },
    {
        pergunta: "Qual é a mecânica de exploração planetária no jogo?",
        opcoes: ["Exploração livre em mundo aberto", "Áreas delimitadas por missões", "Exploração em 2D com plataformas", "Pontos de interesse pré-determinados"],
        resposta: 3
    },
    {
        pergunta: "Qual é a trilha sonora característica de 'The Love And Deepspace'?",
        opcoes: ["Rock espacial", "Eletrônica ambiente", "Orquestra sinfônica", "Jazz futurista"],
        resposta: 1
    },
    {
        pergunta: "Qual é o sistema de progressão de personagens no jogo?",
        opcoes: ["Árvore de habilidades", "Aumento de nível por experiência", "Melhoria de equipamentos", "Todos os anteriores"],
        resposta: 3
    }
];

// The Love And Deepspace - Médio
const theLoveDeepspaceMedio = [
    {
        pergunta: "Qual é o fenômeno espacial misterioso que a tripulação investiga?",
        opcoes: ["Buraco Negro Quântico", "Nebulosa Prisma", "Anomalia Temporal Estelar", "Corredor Dimensional"],
        resposta: 2
    },
    {
        pergunta: "Qual é a tecnologia que permite a comunicação instantânea com a Terra?",
        opcoes: ["Transmissor Quântico", "Rede Neural Espacial", "Comunicador Subespacial", "Relé de Dobra"],
        resposta: 0
    },
    {
        pergunta: "Qual é o passado misterioso do Capitão Zayne?",
        opcoes: ["Ex-pirata espacial", "Cientista renegado", "Sobrevivente de uma colônia destruída", "Experimento genético"],
        resposta: 2
    },
    {
        pergunta: "Qual é o sistema político que governa a Terra no universo do jogo?",
        opcoes: ["Confederação Planetária", "União Terrestre", "Conselho Estelar", "Diretório Global"],
        resposta: 1
    },
    {
        pergunta: "Qual é o evento catastrófico que ocorre no meio da história?",
        opcoes: ["Invasão alienígena", "Falha no sistema de suporte vital", "Tempestade solar devastadora", "Motim na tripulação"],
        resposta: 2
    },
    {
        pergunta: "Qual é a especialidade da Dra. Lyra na tripulação?",
        opcoes: ["Xenobiologia", "Astrofísica", "Engenharia Quântica", "Psicologia Espacial"],
        resposta: 0
    },
    {
        pergunta: "Qual é o segredo guardado nos arquivos restritos da nave?",
        opcoes: ["Planos de armas proibidas", "Evidências de vida alienígena inteligente", "Coordenadas de um planeta habitável", "Registros de experimentos ilegais"],
        resposta: 1
    },
    {
        pergunta: "Qual é o dilema moral central da história?",
        opcoes: ["Salvar poucos ou arriscar muitos", "Contato com civilizações primitivas", "Uso de tecnologia perigosa", "Lealdade versus verdade"],
        resposta: 3
    },
    {
        pergunta: "Qual é o sistema de recursos que precisa ser gerenciado no jogo?",
        opcoes: ["Apenas combustível", "Combustível e suprimentos", "Combustível, suprimentos e moral da tripulação", "Não há gerenciamento de recursos"],
        resposta: 2
    },
    {
        pergunta: "Qual é a consequência de falhar em uma missão diplomática no jogo?",
        opcoes: ["Game over imediato", "Perda de recursos apenas", "Alteração na história e relacionamentos", "Não há consequências significativas"],
        resposta: 2
    },
    {
        pergunta: "Qual é o artefato alienígena que causa transformações na tripulação?",
        opcoes: ["Cristal Estelar", "Monolito Etéreo", "Esfera Transcendental", "Fragmento Dimensional"],
        resposta: 2
    },
    {
        pergunta: "Qual é a condição rara que afeta alguns membros da tripulação após exposição ao espaço profundo?",
        opcoes: ["Síndrome do Vácuo", "Psicose Estelar", "Ressonância Cósmica", "Dissonância Espacial"],
        resposta: 3
    },
    {
        pergunta: "Qual é o sistema de romance que diferencia 'The Love And Deepspace' de outros jogos?",
        opcoes: ["Romances baseados em personalidade", "Sistema de compatibilidade dinâmica", "Relacionamentos que afetam a história principal", "Todas as anteriores"],
        resposta: 3
    },
    {
        pergunta: "Qual é a civilização antiga que deixou ruínas por toda a galáxia?",
        opcoes: ["Precursores", "Ancestrais", "Primordiais", "Eternos"],
        resposta: 0
    },
    {
        pergunta: "Qual é o sistema de tomada de decisões no jogo?",
        opcoes: ["Escolhas binárias simples", "Múltiplas opções com consequências imediatas", "Decisões com efeitos em cascata ao longo da história", "Não há sistema de escolhas"],
        resposta: 2
    }
];

// The Love And Deepspace - Difícil
const theLoveDeepspaceDificil = [
    {
        pergunta: "Qual teoria científica real é a base para o sistema de viagem interestelar no jogo?",
        opcoes: ["Teoria das Cordas", "Dobra de Alcubierre", "Buracos de Minhoca Einstein-Rosen", "Condensado de Bose-Einstein"],
        resposta: 1
    },
    {
        pergunta: "Qual é o paradoxo temporal que a tripulação enfrenta no setor Cronos?",
        opcoes: ["Paradoxo do Avô", "Paradoxo do Gêmeos", "Paradoxo da Predestinação", "Paradoxo da Informação"],
        resposta: 2
    },
    {
        pergunta: "Qual é a verdadeira origem do antagonista principal?",
        opcoes: ["IA evoluída de uma civilização extinta", "Versão alternativa do protagonista", "Manifestação física de energia cósmica", "Experimento humano que deu errado"],
        resposta: 0
    },
    {
        pergunta: "Qual é a teoria filosófica explorada na subtrama da Dra. Eliza?",
        opcoes: ["Determinismo", "Existencialismo", "Solipsismo", "Niilismo Cósmico"],
        resposta: 2
    },
    {
        pergunta: "Qual é o significado simbólico da Anomalia Temporal Estelar na narrativa?",
        opcoes: ["Representa o passado que não pode ser mudado", "Simboliza as possibilidades infinitas do futuro", "Metáfora para a natureza cíclica da existência", "Alegoria para a insignificância humana no cosmos"],
        resposta: 2
    },
    {
        pergunta: "Qual é a complexa mecânica de relacionamento que envolve o personagem Orion?",
        opcoes: ["Relacionamento poliamor com consentimento", "Romance proibido por diferenças culturais", "Conexão psíquica involuntária", "Dilema entre dever e sentimentos"],
        resposta: 3
    },
    {
        pergunta: "Qual é a revelação chocante sobre a Terra no final do segundo ato?",
        opcoes: ["Foi destruída anos antes", "É controlada secretamente por alienígenas", "Existe em uma linha temporal alternativa", "Nunca existiu como descrita"],
        resposta: 0
    },
    {
        pergunta: "Qual é a teoria científica ficcional que explica a consciência coletiva dos Celestiais?",
        opcoes: ["Ressonância Quântica Neural", "Entrelamento Psíquico Subespacial", "Campo Morfogenético Galáctico", "Sincronização Telepática Multidimensional"],
        resposta: 2
    },
    {
        pergunta: "Qual é o dilema ético central na missão do planeta Nexus?",
        opcoes: ["Interferir em uma civilização em desenvolvimento", "Sacrificar uma espécie para salvar outra", "Usar tecnologia proibida para prevenir um desastre", "Revelar a verdade que desestabilizaria uma sociedade"],
        resposta: 3
    },
    {
        pergunta: "Qual é a mecânica de jogo que representa o estado mental da tripulação?",
        opcoes: ["Sistema de Sanidade", "Medidor de Estresse Cósmico", "Índice de Coesão Psíquica", "Barômetro de Resiliência"],
        resposta: 1
    }
];

// The Love And Deepspace - Perguntas adicionais
const theLoveDeepspaceExtra = [
    {
        pergunta: "Qual é o sistema de crafting presente em 'The Love And Deepspace'?",
        opcoes: ["Fabricação molecular", "Síntese quântica", "Impressão 3D avançada", "Engenharia de nanomateriais"],
        resposta: 0
    },
    {
        pergunta: "Qual é o minijogo mais popular dentro de 'The Love And Deepspace'?",
        opcoes: ["Corrida de asteroides", "Xadrez dimensional", "Simulação de ecossistemas", "Quebra-cabeças holográficos"],
        resposta: 3
    },
    {
        pergunta: "Qual é o evento sazonal mais aguardado no jogo?",
        opcoes: ["Festival das Estrelas Cadentes", "Convergência Planetária", "Celebração da Primeira Viagem", "Eclipse Galáctico"],
        resposta: 0
    },
    {
        pergunta: "Qual é a bebida favorita consumida pela tripulação em momentos de celebração?",
        opcoes: ["Néctar Estelar", "Whisky Lunar", "Espuma Cósmica", "Destilado de Nebulosa"],
        resposta: 1
    },
    {
        pergunta: "Qual é o sistema de clima espacial que afeta as missões de exploração?",
        opcoes: ["Tempestades iônicas", "Chuvas de meteoros", "Flutuações gravitacionais", "Todos os anteriores"],
        resposta: 3
    },
    {
        pergunta: "Qual é o pet alienígena que pode ser adotado pela tripulação?",
        opcoes: ["Blob luminescente", "Felino de seis patas", "Réptil flutuante", "Criatura metamórfica"],
        resposta: 0
    },
    {
        pergunta: "Qual é o passatempo favorito do Engenheiro Chefe durante as longas viagens?",
        opcoes: ["Coleção de artefatos alienígenas", "Jardinagem em microgravidade", "Composição musical", "Modelismo de naves antigas"],
        resposta: 1
    },
    {
        pergunta: "Qual é o sistema de navegação utilizado para mapear regiões desconhecidas?",
        opcoes: ["Mapeamento Estelar Automático", "Sondas de Reconhecimento", "Triangulação de Pulsar", "Todos os anteriores"],
        resposta: 3
    },
    {
        pergunta: "Qual é a comemoração tradicional após uma missão bem-sucedida?",
        opcoes: ["Banquete com especialidades de diversos planetas", "Cerimônia de medalhas", "Festa com música e dança", "Período de descanso estendido"],
        resposta: 0
    },
    {
        pergunta: "Qual é o sistema de customização da nave no jogo?",
        opcoes: ["Apenas estético", "Funcional com impacto na jogabilidade", "Modular com peças intercambiáveis", "Evolutivo baseado em uso"],
        resposta: 2
    },
    {
        pergunta: "Qual é a forma de arte mais apreciada pela civilização Celestial?",
        opcoes: ["Esculturas de luz", "Música telepática", "Pinturas em quatro dimensões", "Poesia matemática"],
        resposta: 1
    },
    {
        pergunta: "Qual é o ritual de iniciação para novos membros da tripulação?",
        opcoes: ["Simulação de emergência", "Período de isolamento meditativo", "Missão solo de reconhecimento", "Compartilhamento de memórias pessoais"],
        resposta: 3
    },
    {
        pergunta: "Qual é o fenômeno natural mais perigoso no espaço profundo segundo o jogo?",
        opcoes: ["Rajadas de raios gama", "Colapsos gravitacionais", "Bolhas de vácuo quântico", "Tempestades de matéria escura"],
        resposta: 2
    },
    {
        pergunta: "Qual é o sistema de economia presente nas estações espaciais?",
        opcoes: ["Troca de recursos", "Créditos universais", "Combinação de troca e moeda digital", "Economia baseada em reputação"],
        resposta: 2
    },
    {
        pergunta: "Qual é a tecnologia médica revolucionária desenvolvida pela Dra. Lyra?",
        opcoes: ["Regeneração celular acelerada", "Transferência de consciência", "Cura baseada em nanorrobôs", "Suspensão criogênica aprimorada"],
        resposta: 0
    }
];

// Mo Dao Zu Shi - Fácil
const moDaoZuShiFacil = [
    {
        pergunta: "Qual é o nome do protagonista de Mo Dao Zu Shi?",
        opcoes: ["Lan Wangji", "Wei Wuxian", "Jiang Cheng", "Nie Huaisang"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do clã ao qual Wei Wuxian foi adotado quando jovem?",
        opcoes: ["Clã Lan", "Clã Jin", "Clã Jiang", "Clã Nie"],
        resposta: 2
    },
    {
        pergunta: "Qual é a arma característica de Wei Wuxian?",
        opcoes: ["Espada Suibian", "Flauta Chenqing", "Sino de Clareza", "Leque"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do segundo jovem mestre do Clã Lan?",
        opcoes: ["Lan Xichen", "Lan Qiren", "Lan Sizhui", "Lan Wangji"],
        resposta: 3
    },
    {
        pergunta: "Qual é a montanha onde está localada a Reclusão das Nuvens (Cloud Recesses)?",
        opcoes: ["Monte Dafan", "Monte Lushan", "Monte Baling", "Monte Gusu"],
        resposta: 3
    },
    {
        pergunta: "Qual é o apelido dado a Wei Wuxian durante sua juventude?",
        opcoes: ["Patriarca Yiling", "Mestre Demoníaco", "Jovem Mestre Wei", "Lótus Vermelho"],
        resposta: 2
    },
    {
        pergunta: "Qual é a cor das fitas de cabeça usadas pelo Clã Lan?",
        opcoes: ["Vermelhas", "Azuis", "Brancas", "Douradas"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do irmão adotivo de Wei Wuxian?",
        opcoes: ["Jin Guangyao", "Jiang Cheng", "Nie Mingjue", "Lan Xichen"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do corpo no qual Wei Wuxian reencarna?",
        opcoes: ["Mo Xuanyu", "Su She", "Jin Guangyao", "Xue Yang"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da irmã adotiva de Wei Wuxian?",
        opcoes: ["Jiang Yanli", "Wen Qing", "Mianmian", "Luo Qingyang"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da espada de Lan Wangji?",
        opcoes: ["Suibian", "Sandu", "Bichen", "Liebing"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do líder do Clã Wen?",
        opcoes: ["Wen Ruohan", "Wen Chao", "Wen Ning", "Wen Xu"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do local onde Wei Wuxian se escondeu após a Campanha para Derrubar o Sol?",
        opcoes: ["Montanha Dafan", "Colina do Enterro", "Reclusão das Nuvens", "Cidade Yi"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do coelho de estimação de Lan Wangji?",
        opcoes: ["Pequeno Maçã", "Fada", "Branco", "Lan Wangji não tem coelho"],
        resposta: 3
    },
    {
        pergunta: "Qual é a bebida favorita de Wei Wuxian?",
        opcoes: ["Chá", "Suco de lótus", "Vinho de Imperador", "Água"],
        resposta: 2
    }
];

// Mo Dao Zu Shi - Médio
const moDaoZuShiMedio = [
    {
        pergunta: "Qual é o nome do cavalo de Wei Wuxian?",
        opcoes: ["Pequeno Maçã", "Fada", "Jasmine", "Lua Negra"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do discípulo que Wei Wuxian e Lan Wangji encontram primeiro durante a caçada noturna?",
        opcoes: ["Lan Sizhui", "Jin Ling", "Lan Jingyi", "Ouyang Zizhen"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da técnica de cultivo criada por Wei Wuxian?",
        opcoes: ["Cultivo Demoníaco", "Caminho da Retidão", "Cultivo Espiritual", "Cultivo das Trevas"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do irmão de Wen Ning?",
        opcoes: ["Wen Qing", "Wen Chao", "Wen Xu", "Wen Ning não tem irmão"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do pai de Jin Ling?",
        opcoes: ["Jin Guangshan", "Jin Zixuan", "Jin Guangyao", "Jiang Fengmian"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do instrumento musical tocado por Lan Wangji?",
        opcoes: ["Chenqing", "Wangji", "Liebing", "Guqin"],
        resposta: 3
    },
    {
        pergunta: "Qual é o nome da cidade onde ocorre o incidente do Templo Guanyin?",
        opcoes: ["Lanling", "Yunmeng", "Gusu", "Qinghe"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do líder do Clã Nie durante a história principal?",
        opcoes: ["Nie Mingjue", "Nie Huaisang", "Nie Zonghui", "Nie Zhonghui"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome da espada de Jiang Cheng?",
        opcoes: ["Suibian", "Sandu", "Bichen", "Hensheng"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do filho de Jin Zixuan e Jiang Yanli?",
        opcoes: ["Jin Ling", "Jin Rulan", "Ambos estão corretos", "Nenhum dos anteriores"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do cachorro de caça de Jin Ling?",
        opcoes: ["Pequeno Maçã", "Fada", "Jasmine", "Lua Negra"],
        resposta: 1
    },
    {
        pergunta: "Qual é a relação entre Lan Sizhui e Wen Yuan?",
        opcoes: ["São a mesma pessoa", "São irmãos", "São primos", "Não têm relação"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do local onde Wei Wuxian e Lan Wangji ficam presos durante a história?",
        opcoes: ["Montanha Fria", "Tumba do Imperador", "Colina do Enterro", "Caverna da Fênix"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do tio de Lan Wangji?",
        opcoes: ["Lan Qiren", "Lan Xichen", "Lan Yi", "Lan An"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da seita liderada por Jin Guangyao?",
        opcoes: ["Seita Lanling Jin", "Seita Gusu Lan", "Seita Qinghe Nie", "Seita Yunmeng Jiang"],
        resposta: 0
    }
];

// Mo Dao Zu Shi - Difícil
const moDaoZuShiDificil = [
    {
        pergunta: "Qual é o nome verdadeiro de Lan Wangji?",
        opcoes: ["Lan Zhan", "Lan Huan", "Lan Yuan", "Lan Wang"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da mãe de Lan Wangji?",
        opcoes: ["Madam Lan", "Madam Yu", "Cangse Sanren", "Nunca é mencionado"],
        resposta: 0
    },
    {
        pergunta: "Quantas regras existem na Reclusão das Nuvens?",
        opcoes: ["Mais de 3000", "Exatamente 3000", "Menos de 3000", "O número exato nunca é mencionado"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do fundador do Clã Lan?",
        opcoes: ["Lan An", "Lan Yi", "Lan Qiren", "Lan Huan"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da técnica que Lan Wangji usa para suprimir o poder espiritual de Wei Wuxian?",
        opcoes: ["Feitiço de Silêncio", "Selo de Supressão", "Aprisionamento Espiritual", "Canção da Purificação"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome da música que Lan Wangji compôs para Wei Wuxian?",
        opcoes: ["Inquérito", "Canção da Clareza", "Wangxian", "Melodia do Luar"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do pai de Lan Wangji?",
        opcoes: ["Lan Qiren", "Lan Huan", "Qingheng-Jun", "Nunca é mencionado"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome da mãe de Wei Wuxian?",
        opcoes: ["Madam Yu", "Cangse Sanren", "Madam Lan", "Baoshan Sanren"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do discípulo que se torna o braço direito de Jin Guangyao?",
        opcoes: ["Su She", "Xue Yang", "Wen Ning", "Mo Xuanyu"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do artefato que contém as confissões de Jin Guangyao?",
        opcoes: ["Selo do Tigre Estígio", "Sino da Clareza", "Caixa de Empréstimo", "Compasso do Mal"],
        resposta: 2
    }
];

// Mo Dao Zu Shi - Extra
const moDaoZuShiExtra = [
    {
        pergunta: "Qual ator interpreta Wei Wuxian na adaptação em dorama 'The Untamed'?",
        opcoes: ["Wang Yibo", "Xiao Zhan", "Song Jiyang", "Zhu Zanjin"],
        resposta: 1
    },
    {
        pergunta: "Qual ator interpreta Lan Wangji na adaptação em dorama 'The Untamed'?",
        opcoes: ["Wang Yibo", "Xiao Zhan", "Song Jiyang", "Zhu Zanjin"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do dorama live-action baseado em Mo Dao Zu Shi?",
        opcoes: ["The Untamed", "Word of Honor", "Heaven Official's Blessing", "Guardian"],
        resposta: 0
    },
    {
        pergunta: "Quantas temporadas tem a animação de Mo Dao Zu Shi?",
        opcoes: ["Uma", "Duas", "Três", "Quatro"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome da autora de Mo Dao Zu Shi?",
        opcoes: ["MXTX", "Priest", "Meatbun", "Huaishang"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome completo da autora de Mo Dao Zu Shi?",
        opcoes: ["Mo Xiang Tong Xiu", "Mo Xiang Xiu Tong", "Xiu Tong Mo Xiang", "Tong Xiu Mo Xiang"],
        resposta: 0
    },
    {
        pergunta: "Em que ano foi publicado o novel de Mo Dao Zu Shi?",
        opcoes: ["2015", "2016", "2017", "2018"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do estúdio de animação responsável pelo donghua de Mo Dao Zu Shi?",
        opcoes: ["B.CMAY PICTURES", "Tencent Animation", "Bilibili", "Funimation"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome da música tema do dorama 'The Untamed'?",
        opcoes: ["Wuji", "Unrestrained", "Wangxian", "Yearning"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do filme animado que serve como conclusão para a série animada de Mo Dao Zu Shi?",
        opcoes: ["Mo Dao Zu Shi: The Living Dead", "Mo Dao Zu Shi: The Founder of Diabolism", "Mo Dao Zu Shi: Fatal Journey", "Mo Dao Zu Shi: The Wrath of Formidable"],
        resposta: 2
    },
    {
        pergunta: "Qual é a diferença mais significativa entre o novel e o dorama 'The Untamed'?",
        opcoes: ["Os nomes dos personagens", "A relação romântica entre os protagonistas", "O final da história", "A idade dos personagens"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do ator que interpreta Jiang Cheng em 'The Untamed'?",
        opcoes: ["Wang Zhuocheng", "Yu Bin", "Zheng Fanxing", "Cao Yuchen"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do ator que interpreta Jin Ling em 'The Untamed'?",
        opcoes: ["Zheng Fanxing", "Cao Yuchen", "Wang Zhuocheng", "Yu Bin"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do ator que interpreta Lan Xichen em 'The Untamed'?",
        opcoes: ["Liu Haikuan", "Zhu Zanjin", "Wang Haoxuan", "Li Bowen"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do ator que interpreta Nie Huaisang em 'The Untamed'?",
        opcoes: ["Ji Li", "Cao Yuchen", "Zhu Zanjin", "Wang Haoxuan"],
        resposta: 0
    }
];

// Doramas - Fácil
const doramasFacil = [
    {
        pergunta: "O que são doramas?",
        opcoes: ["Filmes de terror japoneses", "Séries de televisão asiáticas", "Desenhos animados chineses", "Peças de teatro coreanas"],
        resposta: 1
    },
    {
        pergunta: "Qual país é conhecido pela produção de K-dramas?",
        opcoes: ["Japão", "China", "Coreia do Sul", "Tailândia"],
        resposta: 2
    },
    {
        pergunta: "Qual é a duração típica de um episódio de dorama coreano?",
        opcoes: ["30 minutos", "60-70 minutos", "90 minutos", "120 minutos"],
        resposta: 1
    },
    {
        pergunta: "Qual destes é um gênero comum de doramas?",
        opcoes: ["Western", "Romance", "Faroeste", "Musical"],
        resposta: 1
    },
    {
        pergunta: "Como são chamados os doramas japoneses?",
        opcoes: ["J-dramas", "Nippon-shows", "Anime live-action", "Tokyo-series"],
        resposta: 0
    },
    {
        pergunta: "Qual plataforma de streaming é conhecida por disponibilizar muitos doramas?",
        opcoes: ["Disney+", "Viki", "HBO Max", "Amazon Prime"],
        resposta: 1
    },
    {
        pergunta: "Qual é o termo para os doramas chineses?",
        opcoes: ["C-dramas", "Sino-shows", "Mandarim-series", "China-dramas"],
        resposta: 0
    },
    {
        pergunta: "Qual é a duração média de um dorama coreano completo?",
        opcoes: ["5-10 episódios", "16-20 episódios", "30-40 episódios", "50-100 episódios"],
        resposta: 1
    },
    {
        pergunta: "O que é um 'web drama'?",
        opcoes: ["Drama sobre internet", "Série produzida exclusivamente para plataformas online", "Drama com muitas cenas de computador", "Série interativa onde espectadores votam no enredo"],
        resposta: 1
    },
    {
        pergunta: "Qual é um tema recorrente em doramas de romance?",
        opcoes: ["Triângulos amorosos", "Viagens espaciais", "Competições esportivas", "Investigações policiais"],
        resposta: 0
    },
    {
        pergunta: "O que é um 'makjang drama'?",
        opcoes: ["Drama histórico", "Drama médico", "Drama com enredos extremos e melodramáticos", "Drama escolar"],
        resposta: 2
    },
    {
        pergunta: "Qual é o termo para os doramas tailandeses?",
        opcoes: ["T-dramas", "Thai-series", "Lakorn", "Bangkok-shows"],
        resposta: 2
    },
    {
        pergunta: "Qual é o formato típico de exibição de doramas na TV asiática?",
        opcoes: ["Diariamente", "Duas vezes por semana", "Semanalmente", "Mensalmente"],
        resposta: 1
    },
    {
        pergunta: "O que é um 'Boys Love' (BL) drama?",
        opcoes: ["Drama sobre amizade masculina", "Drama focado em romance entre homens", "Drama sobre irmandade", "Drama sobre competição entre homens"],
        resposta: 1
    },
    {
        pergunta: "Qual país é conhecido pela produção de lakorns?",
        opcoes: ["Vietnã", "Filipinas", "Tailândia", "Indonésia"],
        resposta: 2
    }
];

// Doramas - Médio
const doramasMedio = [
    {
        pergunta: "Qual dorama coreano é considerado um dos mais assistidos internacionalmente em 2020?",
        opcoes: ["Crash Landing on You", "Goblin", "Boys Over Flowers", "Descendants of the Sun"],
        resposta: 0
    },
    {
        pergunta: "Qual ator coreano ficou famoso pelo papel em 'Goblin'?",
        opcoes: ["Lee Min-ho", "Gong Yoo", "Hyun Bin", "Ji Chang-wook"],
        resposta: 1
    },
    {
        pergunta: "Qual atriz protagonizou 'It's Okay to Not Be Okay'?",
        opcoes: ["Jun Ji-hyun", "Park Shin-hye", "Seo Ye-ji", "Song Hye-kyo"],
        resposta: 2
    },
    {
        pergunta: "Qual dorama japonês é baseado no mangá de mesmo nome sobre culinária?",
        opcoes: ["Midnight Diner", "Gourmet", "Samurai Gourmet", "Solitary Gourmet"],
        resposta: 3
    },
    {
        pergunta: "Qual é o nome do fenômeno que descreve a popularização da cultura coreana globalmente?",
        opcoes: ["K-Wave", "Hallyu", "K-Trend", "Seoul Style"],
        resposta: 1
    },
    {
        pergunta: "Qual dorama chinês de fantasia e romance se tornou um fenômeno em 2017?",
        opcoes: ["The Untamed", "Eternal Love", "Ashes of Love", "Love and Destiny"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome da premiação que reconhece os melhores doramas e atores coreanos?",
        opcoes: ["Seoul Drama Awards", "Baeksang Arts Awards", "Korean Entertainment Awards", "K-Drama Excellence Awards"],
        resposta: 1
    },
    {
        pergunta: "Qual dorama tailandês de BL se tornou um fenômeno internacional em 2020?",
        opcoes: ["2gether: The Series", "TharnType", "Love By Chance", "Dark Blue Kiss"],
        resposta: 0
    },
    {
        pergunta: "Qual ator protagonizou 'Crash Landing on You'?",
        opcoes: ["Park Seo-joon", "Lee Jong-suk", "Hyun Bin", "Kim Soo-hyun"],
        resposta: 2
    },
    {
        pergunta: "Qual é o termo para os doramas ambientados em períodos históricos?",
        opcoes: ["Sageuk", "Jidaigeki", "Historical", "Period"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama coreano de 2019 aborda temas de saúde mental?",
        opcoes: ["Sky Castle", "Hotel Del Luna", "It's Okay to Not Be Okay", "When the Camellia Blooms"],
        resposta: 2
    },
    {
        pergunta: "Qual atriz coreana é conhecida como 'Rainha dos Comerciais'?",
        opcoes: ["Jun Ji-hyun", "Song Hye-kyo", "Park Shin-hye", "IU"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama japonês é conhecido por sua adaptação de um romance de Higashino Keigo?",
        opcoes: ["Galileo", "Legal High", "Hanzawa Naoki", "Doctor-X"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do grupo de atores que frequentemente trabalham juntos em doramas?",
        opcoes: ["Drama Crew", "Acting Pool", "Entertainment Label", "Drama Squad"],
        resposta: 1
    },
    {
        pergunta: "Qual dorama coreano de 2016 conta a história de um soldado e uma médica?",
        opcoes: ["Goblin", "Descendants of the Sun", "Healer", "W: Two Worlds"],
        resposta: 1
    }
];

// Doramas - Difícil
const doramasDificil = [
    {
        pergunta: "Qual diretor coreano é conhecido por seus doramas com temas sociais profundos?",
        opcoes: ["Kim Eun-sook", "Shin Won-ho", "Kim Won-seok", "Lee Eung-bok"],
        resposta: 2
    },
    {
        pergunta: "Qual foi o primeiro dorama coreano a ser transmitido pela Netflix como 'Original Netflix'?",
        opcoes: ["Kingdom", "Love Alarm", "Extracurricular", "My First First Love"],
        resposta: 0
    },
    {
        pergunta: "Qual é o termo japonês para os doramas exibidos no horário nobre?",
        opcoes: ["Golden Time", "Prime Time", "Tanpatsu", "Renzoku"],
        resposta: 0
    },
    {
        pergunta: "Qual escritora coreana é conhecida por seus doramas de romance como 'Goblin' e 'Descendants of the Sun'?",
        opcoes: ["Park Ji-eun", "Kim Eun-sook", "Song Jae-jung", "Park Hye-ryun"],
        resposta: 1
    },
    {
        pergunta: "Qual dorama japonês é considerado um dos mais longos em exibição contínua?",
        opcoes: ["Doctor-X", "Oshin", "Hanzawa Naoki", "Aibou"],
        resposta: 3
    },
    {
        pergunta: "Qual é o sistema de classificação de audiência usado para doramas coreanos?",
        opcoes: ["Nielsen Ratings", "TNmS", "AGB Nielsen", "Ambos B e C estão corretos"],
        resposta: 3
    },
    {
        pergunta: "Qual foi o primeiro dorama coreano a ultrapassar 20% de audiência na tvN, um canal a cabo?",
        opcoes: ["Reply 1988", "Goblin", "Signal", "Crash Landing on You"],
        resposta: 0
    },
    {
        pergunta: "Qual é o termo para os doramas chineses ambientados em dinastias antigas?",
        opcoes: ["Guzhuang", "Xianxia", "Wuxia", "Guoju"],
        resposta: 0
    },
    {
        pergunta: "Qual ator japonês detém o recorde de mais aparições como protagonista em doramas de horário nobre?",
        opcoes: ["Kimura Takuya", "Oguri Shun", "Fukuyama Masaharu", "Takenouchi Yutaka"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do processo onde fãs internacionais legendam doramas voluntariamente?",
        opcoes: ["Subbing", "Fansubbing", "Crowdsub", "Volunteer Translation"],
        resposta: 1
    }
];

// Doramas - Extra
const doramasExtra = [
    {
        pergunta: "Qual dorama coreano de 2020 aborda temas de psicopatia e trauma infantil?",
        opcoes: ["It's Okay to Not Be Okay", "Flower of Evil", "The King: Eternal Monarch", "Hi Bye, Mama!"],
        resposta: 1
    },
    {
        pergunta: "Qual ator tailandês ficou famoso pelo papel em '2gether: The Series'?",
        opcoes: ["Bright Vachirawit", "Win Metawin", "Gulf Kanawut", "Mew Suppasit"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama filipino ganhou popularidade internacional em plataformas de streaming?",
        opcoes: ["Forevermore", "On the Wings of Love", "Pangako Sa 'Yo", "Dolce Amore"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome da prática onde atores de doramas gravam cenas enquanto o drama ainda está sendo escrito?",
        opcoes: ["Live shooting", "Real-time production", "Ongoing filming", "Progressive shooting"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama coreano de 2018 aborda temas de justiça social e corrupção?",
        opcoes: ["Sky Castle", "My Mister", "Life", "Misty"],
        resposta: 1
    },
    {
        pergunta: "Qual atriz coreana protagonizou 'My Love from the Star'?",
        opcoes: ["Jun Ji-hyun", "Park Shin-hye", "Song Hye-kyo", "Gong Hyo-jin"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama chinês é baseado no novel 'Mo Dao Zu Shi'?",
        opcoes: ["The Untamed", "Word of Honor", "Guardian", "Eternal Love"],
        resposta: 0
    },
    {
        pergunta: "Qual é o termo para os doramas chineses de fantasia com elementos de cultivo marcial?",
        opcoes: ["Wuxia", "Xianxia", "Xuanhuan", "Qihuan"],
        resposta: 1
    },
    {
        pergunta: "Qual ator coreano é conhecido pelo papel em 'Coffee Prince'?",
        opcoes: ["Gong Yoo", "Lee Min-ho", "Kim Soo-hyun", "Jo In-sung"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama japonês é conhecido por sua representação realista da vida profissional?",
        opcoes: ["Hanzawa Naoki", "Legal High", "Shinya Shokudo", "Naoki Hanzawa"],
        resposta: 0
    },
    {
        pergunta: "Qual é o nome do fenômeno onde atores de doramas formam casais na vida real após atuarem juntos?",
        opcoes: ["Drama Couple", "Reel to Real", "On-screen Chemistry", "Show Romance"],
        resposta: 1
    },
    {
        pergunta: "Qual dorama coreano de 2016 mistura elementos de fantasia e realidade alternativa?",
        opcoes: ["Goblin", "W: Two Worlds", "Signal", "The K2"],
        resposta: 1
    },
    {
        pergunta: "Qual atriz coreana é conhecida como 'Nation's First Love'?",
        opcoes: ["Suzy Bae", "IU", "Park Shin-hye", "Kim Yoo-jung"],
        resposta: 0
    },
    {
        pergunta: "Qual dorama tailandês de 2019 aborda temas LGBT com foco em relacionamento entre professor e aluno?",
        opcoes: ["2gether", "TharnType", "Theory of Love", "Until We Meet Again"],
        resposta: 1
    },
    {
        pergunta: "Qual é o termo para os doramas que são adaptações de webtoons?",
        opcoes: ["Web Adaptation", "Webtoon Drama", "Digital Adaptation", "Comic Drama"],
        resposta: 1
    }
];

// Enfermagem - Fácil
const enfermagemFacil = [
    {
        pergunta: "Qual é o principal foco da profissão de enfermagem?",
        opcoes: ["Prescrever medicamentos", "Cuidado integral ao paciente", "Realizar cirurgias", "Apenas administrar medicações"],
        resposta: 1
    },
    {
        pergunta: "Qual é o símbolo internacional da enfermagem?",
        opcoes: ["Cruz Vermelha", "Lâmpada", "Estetoscópio", "Seringa"],
        resposta: 1
    },
    {
        pergunta: "Quem é considerada a fundadora da enfermagem moderna?",
        opcoes: ["Marie Curie", "Clara Barton", "Florence Nightingale", "Elizabeth Blackwell"],
        resposta: 2
    },
    {
        pergunta: "Qual é a via de administração mais comum para medicamentos orais?",
        opcoes: ["Sublingual", "Enteral", "Parenteral", "Tópica"],
        resposta: 1
    },
    {
        pergunta: "Qual é o procedimento correto para lavagem das mãos na assistência à saúde?",
        opcoes: ["Lavar apenas com água", "Usar álcool gel sem lavar", "Lavar com água e sabão por pelo menos 20 segundos", "Lavar apenas antes de procedimentos invasivos"],
        resposta: 2
    },
    {
        pergunta: "O que significa o termo 'sinais vitais'?",
        opcoes: ["Apenas a pressão arterial", "Temperatura, pulso, respiração e pressão arterial", "Exames laboratoriais básicos", "Nível de consciência do paciente"],
        resposta: 1
    },
    {
        pergunta: "Qual é a posição recomendada para um paciente com dificuldade respiratória?",
        opcoes: ["Decúbito dorsal (deitado de costas)", "Posição de Trendelenburg", "Posição semi-Fowler ou Fowler", "Decúbito ventral (deitado de bruços)"],
        resposta: 2
    },
    {
        pergunta: "O que é o Processo de Enfermagem?",
        opcoes: ["Apenas a administração de medicamentos", "Método de trabalho para organizar a assistência de enfermagem", "Procedimento cirúrgico realizado por enfermeiros", "Método de contratação de profissionais"],
        resposta: 1
    },
    {
        pergunta: "Qual é a função principal do estetoscópio na prática de enfermagem?",
        opcoes: ["Medir a temperatura", "Auscultar sons corporais", "Verificar reflexos", "Administrar medicamentos"],
        resposta: 1
    },
    {
        pergunta: "O que é a Sistematização da Assistência de Enfermagem (SAE)?",
        opcoes: ["Um medicamento", "Método organizado para prestar cuidados de enfermagem", "Um tipo de curativo", "Um equipamento hospitalar"],
        resposta: 1
    },
    {
        pergunta: "Qual é o objetivo principal da triagem em serviços de emergência?",
        opcoes: ["Reduzir custos hospitalares", "Classificar pacientes por gravidade e prioridade de atendimento", "Dispensar pacientes não graves", "Realizar diagnósticos completos"],
        resposta: 1
    },
    {
        pergunta: "O que significa o termo 'NPO' em prescrições médicas?",
        opcoes: ["Nutrição Parenteral Obrigatória", "Nada Por Oral (jejum)", "Nutrição Pós-Operatória", "Necessidade de Procedimento Operatório"],
        resposta: 1
    },
    {
        pergunta: "Qual é a via de administração de medicamentos diretamente na corrente sanguínea?",
        opcoes: ["Intramuscular", "Subcutânea", "Intravenosa", "Intradérmica"],
        resposta: 2
    },
    {
        pergunta: "Qual é a principal função da oximetria de pulso?",
        opcoes: ["Medir a pressão arterial", "Medir a saturação de oxigênio no sangue", "Medir a temperatura corporal", "Medir a frequência cardíaca apenas"],
        resposta: 1
    },
    {
        pergunta: "O que é precaução padrão na assistência à saúde?",
        opcoes: ["Medidas aplicadas apenas a pacientes com doenças infecciosas", "Medidas básicas para prevenir infecções, aplicadas a todos os pacientes", "Procedimentos exclusivos para UTI", "Protocolos apenas para doenças respiratórias"],
        resposta: 1
    }
];

// Enfermagem - Médio
const enfermagemMedio = [
    {
        pergunta: "Quais são os cinco estágios do Processo de Enfermagem?",
        opcoes: ["Avaliação, Diagnóstico, Planejamento, Implementação e Evolução", "Anamnese, Exame Físico, Prescrição, Evolução e Alta", "Admissão, Tratamento, Cuidados, Medicação e Alta", "Coleta, Análise, Diagnóstico, Tratamento e Avaliação"],
        resposta: 0
    },
    {
        pergunta: "O que é a Escala de Coma de Glasgow?",
        opcoes: ["Escala para avaliar dor", "Escala para avaliar nível de consciência", "Escala para avaliar risco de queda", "Escala para avaliar capacidade respiratória"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre antissepsia e assepsia?",
        opcoes: ["São sinônimos", "Antissepsia é a eliminação de microrganismos da pele; assepsia é a prevenção de contaminação", "Antissepsia usa produtos químicos; assepsia usa apenas água", "Antissepsia é para objetos; assepsia é para pessoas"],
        resposta: 1
    },
    {
        pergunta: "O que é um diagnóstico de enfermagem?",
        opcoes: ["O mesmo que diagnóstico médico", "Julgamento clínico sobre respostas do indivíduo, família ou comunidade a problemas de saúde", "Apenas a identificação de doenças", "Prescrição de medicamentos pelo enfermeiro"],
        resposta: 1
    },
    {
        pergunta: "Qual é a principal complicação da administração incorreta de medicamentos intramusculares?",
        opcoes: ["Apenas dor local", "Lesão nervosa, abscesso ou necrose tecidual", "Apenas reação alérgica", "Não há complicações significativas"],
        resposta: 1
    },
    {
        pergunta: "O que é a Escala de Braden?",
        opcoes: ["Instrumento para avaliar risco de lesão por pressão", "Escala para medir dor", "Método para avaliar estado nutricional", "Escala para avaliar nível de sedação"],
        resposta: 0
    },
    {
        pergunta: "Qual é o objetivo principal da aspiração de vias aéreas?",
        opcoes: ["Administrar medicamentos", "Remover secreções e manter vias aéreas pérvias", "Induzir tosse", "Facilitar a intubação"],
        resposta: 1
    },
    {
        pergunta: "O que é o balanço hídrico?",
        opcoes: ["Medição da pressão arterial", "Controle de líquidos administrados e eliminados", "Avaliação da função renal apenas", "Medição da temperatura corporal"],
        resposta: 1
    },
    {
        pergunta: "Qual é a posição correta para realizar compressões torácicas em RCP?",
        opcoes: ["Paciente em posição lateral", "Paciente em superfície macia", "Paciente em superfície rígida, com compressões no centro do tórax", "Paciente sentado"],
        resposta: 2
    },
    {
        pergunta: "O que é a Escala Visual Analógica (EVA)?",
        opcoes: ["Instrumento para avaliar nível de consciência", "Instrumento para avaliar intensidade da dor", "Método para medir pressão arterial", "Escala para avaliar risco de queda"],
        resposta: 1
    },
    {
        pergunta: "Qual é a principal função da sonda nasogástrica?",
        opcoes: ["Administrar oxigênio", "Drenar urina", "Administrar alimentação ou drenar conteúdo gástrico", "Monitorar pressão intracraniana"],
        resposta: 2
    },
    {
        pergunta: "O que é a Escala de Morse?",
        opcoes: ["Avaliação de risco de queda", "Avaliação de dor", "Avaliação de estado nutricional", "Avaliação de nível de sedação"],
        resposta: 0
    },
    {
        pergunta: "Qual é o principal objetivo da mudança de decúbito em pacientes acamados?",
        opcoes: ["Apenas conforto", "Prevenir lesões por pressão", "Facilitar a alimentação", "Melhorar a aparência do paciente"],
        resposta: 1
    },
    {
        pergunta: "O que é o Código de Ética dos Profissionais de Enfermagem?",
        opcoes: ["Lista de medicamentos que enfermeiros podem prescrever", "Conjunto de normas que orientam a conduta profissional", "Manual de procedimentos técnicos", "Regulamento de salários da categoria"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre esterilização e desinfecção?",
        opcoes: ["São sinônimos", "Esterilização elimina todos os microrganismos; desinfecção reduz o número de patógenos", "Esterilização é para tecidos vivos; desinfecção para objetos", "Não há diferença significativa"],
        resposta: 1
    }
];

// Enfermagem - Difícil
const enfermagemDificil = [
    {
        pergunta: "Qual é a diferença entre acidose respiratória e acidose metabólica?",
        opcoes: ["Não há diferença", "Acidose respiratória é causada por retenção de CO2; acidose metabólica por excesso de ácidos ou perda de bicarbonato", "Acidose respiratória afeta apenas os pulmões; acidose metabólica afeta todo o corpo", "Acidose respiratória é mais grave que a metabólica"],
        resposta: 1
    },
    {
        pergunta: "Quais são os componentes da tríade de Cushing?",
        opcoes: ["Taquicardia, hipotensão e taquipneia", "Bradicardia, hipertensão e alteração do padrão respiratório", "Febre, calafrios e sudorese", "Dor, edema e hiperemia"],
        resposta: 1
    },
    {
        pergunta: "O que é a Teoria Ambientalista de Florence Nightingale?",
        opcoes: ["Teoria sobre preservação ambiental", "Teoria que enfatiza a importância do ambiente na recuperação do paciente", "Teoria sobre controle de infecção apenas", "Teoria sobre administração hospitalar"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre isquemia e infarto?",
        opcoes: ["São sinônimos", "Isquemia é redução do fluxo sanguíneo; infarto é morte tecidual por falta de oxigênio", "Isquemia afeta apenas o coração; infarto afeta qualquer órgão", "Isquemia é reversível; infarto sempre é fatal"],
        resposta: 1
    },
    {
        pergunta: "O que é a Classificação Internacional para a Prática de Enfermagem (CIPE)?",
        opcoes: ["Sistema de classificação de hospitais", "Sistema de classificação de diagnósticos, resultados e intervenções de enfermagem", "Método de avaliação de qualidade hospitalar", "Sistema de remuneração internacional"],
        resposta: 1
    },
    {
        pergunta: "Quais são os principais mecanismos de resistência bacteriana aos antibióticos?",
        opcoes: ["Apenas mutação genética", "Inativação enzimática, alteração do sítio-alvo, impermeabilidade e bombas de efluxo", "Apenas transferência horizontal de genes", "Resistência bacteriana é um mito"],
        resposta: 1
    },
    {
        pergunta: "O que é a Teoria do Autocuidado de Dorothea Orem?",
        opcoes: ["Teoria sobre higiene pessoal", "Teoria que enfatiza a capacidade do indivíduo de cuidar de si mesmo", "Teoria sobre independência do paciente em relação aos profissionais", "Teoria sobre automedicação"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre choque hipovolêmico e choque cardiogênico?",
        opcoes: ["Não há diferença significativa", "Hipovolêmico é causado por perda de volume; cardiogênico por falha na função de bombeamento cardíaco", "Hipovolêmico afeta apenas o sangue; cardiogênico afeta apenas o coração", "Hipovolêmico é mais grave que o cardiogênico"],
        resposta: 1
    },
    {
        pergunta: "O que é a Teoria das Necessidades Humanas Básicas de Wanda Horta?",
        opcoes: ["Teoria sobre necessidades fisiológicas apenas", "Teoria que classifica as necessidades em psicobiológicas, psicossociais e psicoespirituais", "Teoria sobre alimentação adequada", "Teoria sobre condições mínimas de trabalho"],
        resposta: 1
    },
    {
        pergunta: "Quais são os principais componentes avaliados no exame do estado mental?",
        opcoes: ["Apenas orientação e memória", "Aparência, comportamento, cognição, pensamento, percepção e humor", "Apenas capacidade de comunicação", "Apenas nível de consciência"],
        resposta: 1
    }
];

// Enfermagem - Extra
const enfermagemExtra = [
    {
        pergunta: "Qual é a diferença entre epidemia, endemia e pandemia?",
        opcoes: ["São sinônimos", "Epidemia é surto localizado; endemia é presença constante em região; pandemia é epidemia global", "Epidemia afeta apenas países pobres; pandemia afeta países ricos", "Endemia é mais grave que pandemia"],
        resposta: 1
    },
    {
        pergunta: "O que é a Política Nacional de Humanização (PNH) no contexto da saúde brasileira?",
        opcoes: ["Política de contratação de profissionais", "Política que visa valorizar usuários, trabalhadores e gestores no processo de produção de saúde", "Política de distribuição de medicamentos", "Política de construção de hospitais"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre cuidados paliativos e cuidados curativos?",
        opcoes: ["São abordagens opostas e incompatíveis", "Paliativos focam na qualidade de vida e alívio do sofrimento; curativos focam na cura da doença", "Paliativos são apenas para pacientes terminais; curativos para todos os outros", "Não há diferença significativa"],
        resposta: 1
    },
    {
        pergunta: "O que é a Escala de Ramsay?",
        opcoes: ["Escala para avaliar dor", "Escala para avaliar nível de sedação", "Escala para avaliar risco de queda", "Escala para avaliar estado nutricional"],
        resposta: 1
    },
    {
        pergunta: "Qual é o principal objetivo da Rede de Atenção às Urgências (RAU) no SUS?",
        opcoes: ["Apenas atender casos graves", "Organizar o atendimento às urgências de forma integrada", "Substituir o SAMU", "Atender apenas traumas"],
        resposta: 1
    },
    {
        pergunta: "O que é a Teoria Transcultural de Madeleine Leininger?",
        opcoes: ["Teoria sobre tradução de termos médicos", "Teoria que enfatiza a importância da cultura no cuidado de enfermagem", "Teoria sobre migração de profissionais", "Teoria sobre comunicação entre diferentes países"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre sepse, sepse grave e choque séptico?",
        opcoes: ["São sinônimos", "Sepse é infecção com resposta inflamatória sistêmica; sepse grave inclui disfunção orgânica; choque séptico inclui hipotensão refratária", "Sepse afeta apenas o sangue; choque séptico afeta todo o corpo", "Não há diferença clínica relevante"],
        resposta: 1
    },
    {
        pergunta: "O que é a Escala de Aldrete?",
        opcoes: ["Escala para avaliar dor pós-operatória", "Escala para avaliar recuperação pós-anestésica", "Escala para avaliar risco cirúrgico", "Escala para avaliar nível de consciência"],
        resposta: 1
    },
    {
        pergunta: "Qual é o principal objetivo da Sistematização da Assistência de Enfermagem Perioperatória (SAEP)?",
        opcoes: ["Apenas documentar procedimentos", "Proporcionar assistência integral, continuada, participativa, individualizada e documentada ao paciente cirúrgico", "Reduzir custos hospitalares", "Acelerar procedimentos cirúrgicos"],
        resposta: 1
    },
    {
        pergunta: "O que é a Teoria do Cuidado Transpessoal de Jean Watson?",
        opcoes: ["Teoria sobre teleenfermagem", "Teoria que enfatiza a relação de cuidado que transcende o físico e material", "Teoria sobre transferência de pacientes", "Teoria sobre comunicação à distância"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre analgesia, anestesia e sedação?",
        opcoes: ["São sinônimos", "Analgesia alivia dor; anestesia bloqueia sensações; sedação reduz nível de consciência", "Analgesia é mais potente que anestesia", "Sedação é apenas para procedimentos cirúrgicos"],
        resposta: 1
    },
    {
        pergunta: "O que é a Política Nacional de Atenção Básica (PNAB)?",
        opcoes: ["Política de distribuição de medicamentos básicos", "Política que estabelece diretrizes para organização da Atenção Básica no SUS", "Política de vacinação", "Política de contratação de profissionais"],
        resposta: 1
    },
    {
        pergunta: "Qual é o papel do enfermeiro na Estratégia Saúde da Família (ESF)?",
        opcoes: ["Apenas supervisionar técnicos", "Realizar consultas, procedimentos, atividades em grupo, gerenciar equipe e planejar ações", "Apenas realizar visitas domiciliares", "Substituir o médico quando necessário"],
        resposta: 1
    },
    {
        pergunta: "O que é a Escala de Fugulin?",
        opcoes: ["Escala para avaliar dor", "Instrumento para classificação de pacientes segundo grau de dependência da equipe de enfermagem", "Escala para avaliar risco de queda", "Escala para avaliar nível de sedação"],
        resposta: 1
    },
    {
        pergunta: "Qual é a diferença entre prevenção primária, secundária e terciária?",
        opcoes: ["Não há diferença", "Primária evita ocorrência; secundária detecta precocemente; terciária reduz complicações", "Primária é mais importante que as demais", "Terciária é realizada apenas em hospitais"],
        resposta: 1
    }
];

// Dr. Zayne de The Love And Deepspace - Fácil
const zayneTLADFacil = [
    {
        pergunta: "Qual é a profissão do Dr. Zayne em The Love And Deepspace?",
        opcoes: ["Neurologista", "Cirurgião Cardíaco", "Médico Generalista", "Pesquisador Genético"],
        resposta: 1
    },
    {
        pergunta: "Onde o Dr. Zayne trabalha em The Love And Deepspace?",
        opcoes: ["Hospital Central", "Clínica Privada", "Hospital Akso", "Centro de Pesquisa Evol"],
        resposta: 2
    },
    {
        pergunta: "Qual é a cor dos olhos do Dr. Zayne?",
        opcoes: ["Azuis", "Verde-avelã", "Cinzentos", "Castanhos"],
        resposta: 1
    },
    {
        pergunta: "Qual é a idade aproximada do Dr. Zayne no jogo?",
        opcoes: ["22 anos", "27 anos", "32 anos", "35 anos"],
        resposta: 1
    },
    {
        pergunta: "Qual é a característica física marcante nas mãos e braços do Dr. Zayne?",
        opcoes: ["Cicatrizes", "Tatuagens", "Queimaduras", "Manchas de nascença"],
        resposta: 0
    },
    {
        pergunta: "Qual é a relação do Dr. Zayne com a protagonista do jogo?",
        opcoes: ["Apenas médico e paciente", "Amigo de infância", "Parentes distantes", "Colegas de trabalho"],
        resposta: 1
    },
    {
        pergunta: "Qual é a cor do cabelo do Dr. Zayne?",
        opcoes: ["Loiro", "Castanho", "Preto", "Ruivo"],
        resposta: 2
    },
    {
        pergunta: "Qual é o problema de saúde que afeta o Dr. Zayne?",
        opcoes: ["Dores crônicas", "Insônia e pesadelos", "Problemas respiratórios", "Enxaquecas frequentes"],
        resposta: 1
    },
    {
        pergunta: "Qual alimento o Dr. Zayne adora comer?",
        opcoes: ["Comida picante", "Pratos saudáveis", "Doces", "Frutos do mar"],
        resposta: 2
    },
    {
        pergunta: "Qual alimento o Dr. Zayne detesta?",
        opcoes: ["Cenouras", "Pimentões", "Cebolas", "Brócolis"],
        resposta: 0
    },
    {
        pergunta: "Qual é a especialidade médica do Dr. Zayne?",
        opcoes: ["Doenças infecciosas", "Anomalias cardíacas congênitas em recém-nascidos", "Cirurgia plástica", "Neurologia"],
        resposta: 1
    },
    {
        pergunta: "Como é a personalidade do Dr. Zayne na maior parte do tempo?",
        opcoes: ["Extrovertido e falante", "Estoico e profissional", "Impulsivo e temperamental", "Tímido e inseguro"],
        resposta: 1
    },
    {
        pergunta: "Qual prêmio importante o Dr. Zayne recebeu por suas contribuições médicas?",
        opcoes: ["Prêmio Nobel", "Medalha de Honra", "Prêmio Starcatcher", "Troféu Médico do Ano"],
        resposta: 2
    },
    {
        pergunta: "Qual é a descoberta importante feita pelo Dr. Zayne em sua pesquisa?",
        opcoes: ["Cura para o vírus Wanderer", "Genes Evol afetam a taxa de mutação celular no desenvolvimento cardíaco", "Nova técnica cirúrgica", "Vacina contra anomalias genéticas"],
        resposta: 1
    },
    {
        pergunta: "Em qual capítulo do jogo o Dr. Zayne é desbloqueado como interesse amoroso?",
        opcoes: ["Capítulo 1", "Capítulo 2-4", "Capítulo 3", "Capítulo 4-2"],
        resposta: 1
    }
];

// Dr. Zayne de The Love And Deepspace - Médio
const zayneTLADMedio = [
    {
        pergunta: "Qual evento traumático do passado afeta o Dr. Zayne?",
        opcoes: ["Perda dos pais", "Feriu a protagonista com seu Evol quando criança", "Acidente de laboratório", "Falha em salvar um paciente importante"],
        resposta: 1
    },
    {
        pergunta: "Qual é o tipo de Evol que o Dr. Zayne possui?",
        opcoes: ["Fogo", "Eletricidade", "Gelo", "Cura"],
        resposta: 2
    },
    {
        pergunta: "Qual é a relação do Dr. Zayne com Caleb no jogo?",
        opcoes: ["Melhores amigos", "Rivais", "Conhecidos da infância", "Parceiros de pesquisa"],
        resposta: 2
    },
    {
        pergunta: "O que aconteceu com o colega próximo do Dr. Zayne durante uma viagem de pesquisa?",
        opcoes: ["Desapareceu misteriosamente", "Morreu infectado por um Wanderer", "Traiu o Dr. Zayne", "Sofreu um acidente e ficou paralisado"],
        resposta: 1
    },
    {
        pergunta: "Para onde o Dr. Zayne frequentemente viaja para realizar pesquisas?",
        opcoes: ["Deserto", "Floresta tropical", "Ártico", "Montanhas"],
        resposta: 2
    },
    {
        pergunta: "Qual é o fenômeno que conecta o Dr. Zayne com suas outras versões?",
        opcoes: ["Viagens no tempo", "Sonhos e pesadelos", "Portais dimensionais", "Mensagens telepáticas"],
        resposta: 1
    },
    {
        pergunta: "Qual é a data de aniversário do Dr. Zayne?",
        opcoes: ["5 de janeiro", "5 de maio", "5 de setembro", "5 de dezembro"],
        resposta: 2
    },
    {
        pergunta: "Qual é o papel do Dr. Zayne na vida da protagonista além de médico?",
        opcoes: ["Professor", "Protetor", "Rival", "Mentor espiritual"],
        resposta: 1
    },
    {
        pergunta: "O que o Dr. Zayne costuma fazer quando não está trabalhando no hospital?",
        opcoes: ["Praticar esportes", "Assistir dramas médicos", "Pesquisar sobre a condição da protagonista", "Viajar pelo mundo"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do hospital onde o Dr. Zayne trabalha?",
        opcoes: ["Hospital Central de Linkon", "Hospital Memorial", "Hospital Akso", "Centro Médico Evol"],
        resposta: 2
    },
    {
        pergunta: "Qual é a condição médica que a protagonista tem e que o Dr. Zayne trata?",
        opcoes: ["Doença autoimune", "Condição cardíaca rara", "Anomalia genética", "Síndrome neurológica"],
        resposta: 1
    },
    {
        pergunta: "Qual é a reação típica dos estudantes do Dr. Zayne em relação a ele?",
        opcoes: ["Admiração e medo", "Indiferença", "Desprezo", "Competitividade"],
        resposta: 0
    },
    {
        pergunta: "O que acontece quando o Dr. Zayne usa excessivamente seu Evol?",
        opcoes: ["Fica temporariamente cego", "Sofre efeitos físicos severos", "Perde a memória", "Fica emocionalmente instável"],
        resposta: 1
    },
    {
        pergunta: "Qual é a série de pelúcias associada ao Dr. Zayne no minigame da máquina de garra?",
        opcoes: ["Série Gato", "Série Boneco de Neve e Pinguim", "Série Urso", "Série Coelho"],
        resposta: 1
    },
    {
        pergunta: "Qual é o Meowco associado ao Dr. Zayne no minigame Kitty Cards?",
        opcoes: ["Flameco", "Snowco", "Leafco", "Sparkco"],
        resposta: 1
    }
];

// Dr. Zayne de The Love And Deepspace - Difícil
const zayneTLADDificil = [
    {
        pergunta: "Qual é o nome da identidade alternativa do Dr. Zayne que é considerado um assassino em série em uma linha do tempo alternativa?",
        opcoes: ["Nightstalker", "Dawnbreaker", "Icebreaker", "Shadowhunter"],
        resposta: 1
    },
    {
        pergunta: "Qual é o título do Dr. Zayne em seu Mito 'Tower of Secrets'?",
        opcoes: ["O Guardião", "O Profeta", "O Vidente", "O Foreseer"],
        resposta: 3
    },
    {
        pergunta: "Qual é o título do Dr. Zayne em seu Mito 'Snow's Embrace'?",
        opcoes: ["Senhor do Inverno", "Mestre do Destino", "Guardião da Neve", "Protetor do Gelo"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do deus que o Foreseer (versão mítica do Dr. Zayne) serve?",
        opcoes: ["Chronos", "Astra", "Lumina", "Nyx"],
        resposta: 1
    },
    {
        pergunta: "O que o Foreseer dá à versão alternativa da protagonista antes de desaparecer?",
        opcoes: ["Um livro antigo", "Uma flor de jasmim feita de gelo", "Um medalhão", "Uma chave mágica"],
        resposta: 1
    },
    {
        pergunta: "O que o Mestre do Destino pede para a versão alternativa da protagonista criar em 'Snow's Embrace'?",
        opcoes: ["Cem espadas", "Cem guarda-chuvas", "Cem lanternas", "Cem amuletos"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome do livro que o Foreseer frequentemente consulta?",
        opcoes: ["Crônicas do Tempo", "Philos: Floral Inquiry", "Segredos do Destino", "Códice dos Deuses"],
        resposta: 1
    },
    {
        pergunta: "Qual é o significado das flores de jasmim no mito 'Tower of Secrets'?",
        opcoes: ["Representam a pureza", "Representam as versões alternativas da protagonista", "Simbolizam a imortalidade", "São portais para outras dimensões"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome dos animais que seguem o Mestre do Destino em 'Snow's Embrace'?",
        opcoes: ["Lobos Brancos", "Raposas de Neve", "Bai Ze", "Cervos Celestiais"],
        resposta: 2
    },
    {
        pergunta: "O que o Dr. Zayne descobre sobre a protagonista após a explosão de sua casa?",
        opcoes: ["Ela é uma alienígena", "Ela foi sujeito de teste em um projeto secreto sobre Aether Cores", "Ela é imortal", "Ela é uma clone"],
        resposta: 1
    }
];

// Dr. Zayne de The Love And Deepspace - Extra
const zayneTLADExtra = [
    {
        pergunta: "Qual é o tipo de personagem que o Dr. Zayne representa em combate?",
        opcoes: ["Tanque", "Suporte", "DPS", "Controle de multidão"],
        resposta: 1
    },
    {
        pergunta: "Quais são os nomes dos dois conjuntos de Memórias Míticas 5* do Dr. Zayne?",
        opcoes: ["Guardião e Protetor", "Vidente e Oráculo", "Foreseer e Master of Fate", "Médico e Curandeiro"],
        resposta: 2
    },
    {
        pergunta: "Qual é a arma que a protagonista usa quando luta ao lado do Dr. Zayne?",
        opcoes: ["Espada dupla", "Arco e flecha", "Pistolas duplas", "Bastão mágico"],
        resposta: 2
    },
    {
        pergunta: "Qual é o efeito do conjunto de memórias 'Foreseer' do Dr. Zayne?",
        opcoes: ["Aumenta o dano", "Cria barreiras e acumula Preces Divinas", "Acelera o tempo de recarga", "Cura automaticamente"],
        resposta: 1
    },
    {
        pergunta: "Qual é o efeito do conjunto de memórias 'Master of Fate' do Dr. Zayne?",
        opcoes: ["Foco em cura", "Foco em defesa", "Foco em debuffs e dano", "Foco em controle de multidão"],
        resposta: 2
    },
    {
        pergunta: "Quais cores de Memórias Lunares são geralmente recomendadas para o Dr. Zayne?",
        opcoes: ["Verde/Amarelo", "Azul/Vermelho", "Roxo/Laranja", "Branco/Preto"],
        resposta: 1
    },
    {
        pergunta: "O que acontece quando o nível de afinidade do Dr. Zayne atinge 'Crush (1-29)'?",
        opcoes: ["Desbloqueia uma nova roupa", "Ganha a habilidade Protective Skill (nível 1)", "Recebe uma arma especial", "Desbloqueia uma nova área"],
        resposta: 1
    },
    {
        pergunta: "Qual é o bônus de combate total que o Dr. Zayne fornece quando sua afinidade atinge o nível máximo?",
        opcoes: ["5000 HP, 250 Atk, 125 Def", "7000 HP, 350 Atk, 175 Def", "10000 HP, 500 Atk, 250 Def", "3000 HP, 150 Atk, 75 Def"],
        resposta: 1
    },
    {
        pergunta: "Que tipo de opções a protagonista deve escolher para aumentar a afinidade com o Dr. Zayne durante encontros?",
        opcoes: ["Opções sérias e profissionais", "Opções românticas diretas", "Piadas e opções que relembrem memórias de infância", "Opções que demonstrem independência"],
        resposta: 2
    },
    {
        pergunta: "Em qual capítulo o Dr. Zayne revela que seu Evol está transformando seu braço em gelo?",
        opcoes: ["Capítulo 1", "Under Deepspace", "Prologue To Tomorrow", "Homecoming Wings"],
        resposta: 1
    },
    {
        pergunta: "Qual é a descoberta do Dr. Zayne que contribuiu para reduzir a prevalência de defeitos cardíacos congênitos?",
        opcoes: ["Nova técnica cirúrgica", "Medicamento revolucionário", "Genes Evol afetam a taxa de mutação celular", "Terapia genética"],
        resposta: 2
    },
    {
        pergunta: "O que o Dr. Zayne faz com mais frequência do que se alimentar, segundo sua descrição?",
        opcoes: ["Estudar", "Realizar cirurgias", "Pesquisar", "Dormir"],
        resposta: 1
    },
    {
        pergunta: "Qual é a principal razão pela qual o Dr. Zayne escolheu sua carreira médica?",
        opcoes: ["Tradição familiar", "Para ganhar dinheiro", "Na esperança de salvar sua amiga de infância", "Por pressão social"],
        resposta: 2
    },
    {
        pergunta: "Como o Dr. Zayne trata pacientes muito jovens ou muito idosos?",
        opcoes: ["Com indiferença", "Com impaciência", "Com atenção especial", "Delega para outros médicos"],
        resposta: 2
    },
    {
        pergunta: "Qual é a atitude do Dr. Zayne em relação a Caleb quando discute a infância da protagonista?",
        opcoes: ["Fala mal dele abertamente", "Ignora sua existência", "Elogia sua influência", "Prefere falar sobre a avó da protagonista"],
        resposta: 3
    }
];

// Objeto principal do quiz
const Quiz = {
    // Propriedades
    todasPerguntas: {
        facil: [
            ...theLoveDeepspaceFacil,
            ...moDaoZuShiFacil,
            ...doramasFacil,
            ...enfermagemFacil,
            ...zayneTLADFacil
        ],
        medio: [
            ...theLoveDeepspaceMedio,
            ...moDaoZuShiMedio,
            ...doramasMedio,
            ...enfermagemMedio,
            ...zayneTLADMedio
        ],
        dificil: [
            ...theLoveDeepspaceDificil,
            ...moDaoZuShiDificil,
            ...doramasDificil,
            ...enfermagemDificil,
            ...zayneTLADDificil
        ]
    },
    perguntaAtual: null,
    pontuacao: 0,
    tentativasHoje: 0,
    limiteDiario: 30,
    respostasCorretas: 0,
    respostasIncorretas: 0,
    perguntasRespondidas: 0,
    temporizador: null,
    tempoRestante: 25, // Tempo em segundos para responder
    clockSoundInterval: null, // Intervalo para o som de relógio
    
    // Inicializa o quiz
    inicializar: function() {
        console.log("Quiz.inicializar() chamado");
        
        // Carrega dados salvos
        this.carregarDados();
        
        // Atualiza interface
        this.atualizarInterface();
        
        // Adiciona event listeners
        this.adicionarEventListeners();
        
        // Adiciona os elementos de áudio ao DOM se ainda não existirem
        if (!document.getElementById('sound-positive')) {
            const soundPositive = document.createElement('audio');
            soundPositive.id = 'sound-positive';
            soundPositive.src = 'https://assets.mixkit.co/active_storage/sfx/2001/2001-preview.mp3';
            document.body.appendChild(soundPositive);
        }
        
        if (!document.getElementById('sound-negative')) {
            const soundNegative = document.createElement('audio');
            soundNegative.id = 'sound-negative';
            soundNegative.src = 'https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3';
            document.body.appendChild(soundNegative);
        }
        
        // Adiciona os novos sons para o temporizador
        if (!document.getElementById('sound-clock')) {
            const soundClock = document.createElement('audio');
            soundClock.id = 'sound-clock';
            soundClock.src = 'audio/clock-tick.mp3';
            document.body.appendChild(soundClock);
        }
        
        if (!document.getElementById('sound-timeout')) {
            const soundTimeout = document.createElement('audio');
            soundTimeout.id = 'sound-timeout';
            soundTimeout.src = 'audio/error.mp3';
            document.body.appendChild(soundTimeout);
        }
    },
    
    // Adiciona todos os event listeners necessários
    adicionarEventListeners: function() {
        // Adiciona event listener para o botão iniciar quiz
        const btnIniciarQuiz = document.getElementById('iniciar-quiz');
        if (btnIniciarQuiz) {
            // Remove qualquer listener anterior para evitar duplicação
            const novoBtn = btnIniciarQuiz.cloneNode(true);
            btnIniciarQuiz.parentNode.replaceChild(novoBtn, btnIniciarQuiz);
            
            novoBtn.addEventListener('click', () => {
                console.log("Botão iniciar quiz clicado");
                this.iniciarQuiz();
            });
        } else {
            console.error("Elemento 'iniciar-quiz' não encontrado");
        }
        
        // Adiciona event listener para o select de dificuldade
        const selectDificuldade = document.getElementById('selecionar-dificuldade');
        if (selectDificuldade) {
            // Remove qualquer listener anterior para evitar duplicação
            const novoSelect = selectDificuldade.cloneNode(true);
            selectDificuldade.parentNode.replaceChild(novoSelect, selectDificuldade);
            
            novoSelect.addEventListener('change', () => {
                console.log("Select de dificuldade alterado");
                this.atualizarInfoDificuldade();
            });
        } else {
            console.error("Elemento 'selecionar-dificuldade' não encontrado");
        }
    },
    
    // Atualiza as informações de dificuldade na interface
    atualizarInfoDificuldade: function() {
        console.log("atualizarInfoDificuldade chamado");
        
        const dificuldadeSelecionada = document.getElementById('selecionar-dificuldade').value;
        const dificuldadeBadge = document.getElementById('dificuldade-badge');
        const pontosPorQuestao = document.getElementById('pontos-por-questao');
        
        console.log("Dificuldade selecionada:", dificuldadeSelecionada);
        
        // Atualiza o texto do badge de dificuldade
        const dificuldadeTexto = dificuldadeSelecionada === 'facil' ? 'fácil' : 
                                dificuldadeSelecionada === 'medio' ? 'médio' : 'difícil';
        
        dificuldadeBadge.className = `dificuldade-badge ${dificuldadeSelecionada}`;
        dificuldadeBadge.textContent = `Nível ${dificuldadeTexto}`;
        
        // Atualiza os pontos por questão
        let pontos = 1.0;
        switch (dificuldadeSelecionada) {
            case 'facil':
                pontos = 1.0;
                break;
            case 'medio':
                pontos = 2;
                break;
            case 'dificil':
                pontos = 3;
                break;
        }
        
        pontosPorQuestao.textContent = pontos.toFixed(1);
        console.log("Pontos atualizados para:", pontos.toFixed(1));
    },
    
    // Carrega dados salvos do localStorage
    carregarDados: function() {
        const dadosSalvos = localStorage.getItem('msaude_quiz');
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            
            // Verifica se os dados são do mesmo dia
            const ultimaData = new Date(dados.data);
            const hoje = new Date();
            
            if (ultimaData.toDateString() === hoje.toDateString()) {
                // Mesmo dia, carrega tentativas
                this.tentativasHoje = dados.tentativas || 0;
            } else {
                // Novo dia, reseta tentativas
                this.tentativasHoje = 0;
            }
            
            // Carrega estatísticas gerais
            this.respostasCorretas = dados.respostasCorretas || 0;
            this.respostasIncorretas = dados.respostasIncorretas || 0;
            this.perguntasRespondidas = dados.perguntasRespondidas || 0;
            this.pontuacao = dados.pontuacao || 0;
        }
    },
    
    // Salva dados no localStorage
    salvarDados: function() {
        const dados = {
            tentativas: this.tentativasHoje,
            data: new Date().toISOString(),
            respostasCorretas: this.respostasCorretas,
            respostasIncorretas: this.respostasIncorretas,
            perguntasRespondidas: this.perguntasRespondidas,
            pontuacao: this.pontuacao
        };
        
        localStorage.setItem('msaude_quiz', JSON.stringify(dados));
    },
    
    // Atualiza a interface com os dados atuais
    atualizarInterface: function() {
        // Atualiza contador de tentativas
        document.getElementById('tentativas-restantes').textContent = Math.max(0, this.limiteDiario - this.tentativasHoje);
        
        // Atualiza estatísticas
        document.getElementById('perguntas-respondidas').textContent = this.perguntasRespondidas;
        document.getElementById('pontuacao-total').textContent = this.pontuacao.toFixed(1);
        
        // Verifica se atingiu o limite diário
        if (this.tentativasHoje >= this.limiteDiario) {
            document.getElementById('iniciar-quiz').disabled = true;
            document.getElementById('limite-atingido').style.display = 'block';
        } else {
            document.getElementById('iniciar-quiz').disabled = false;
            document.getElementById('limite-atingido').style.display = 'none';
        }
        
        // Atualiza informações de dificuldade
        this.atualizarInfoDificuldade();
    },
    
    // Inicia o quiz
    iniciarQuiz: function() {
        console.log("iniciarQuiz chamado");
        
        // Verifica se não atingiu o limite diário
        if (this.tentativasHoje >= this.limiteDiario) {
            return;
        }
        
        // Incrementa contador de tentativas
        this.tentativasHoje++;
        this.salvarDados();
        
        // Atualiza interface
        this.atualizarInterface();
        
        // Seleciona uma pergunta baseada na dificuldade escolhida
        const dificuldadeSelecionada = document.getElementById('selecionar-dificuldade').value;
        this.selecionarPergunta(dificuldadeSelecionada);
        
        // Exibe a pergunta
        this.exibirPergunta();
        
        // Mostra a seção de pergunta e esconde a seção inicial
        document.getElementById('secao-inicial').style.display = 'none';
        document.getElementById('secao-pergunta').style.display = 'block';
        
        // Inicia o temporizador
        this.iniciarTemporizador();
    },
    
    // Inicia o temporizador de 25 segundos
    iniciarTemporizador: function() {
        // Reseta o tempo
        this.tempoRestante = 25;
        
        // Limpa temporizadores anteriores se existirem
        if (this.temporizador) {
            clearInterval(this.temporizador);
        }
        if (this.clockSoundInterval) {
            clearInterval(this.clockSoundInterval);
        }
        
        // Cria elementos do temporizador se não existirem
        if (!document.getElementById('timer-container')) {
            const timerContainer = document.createElement('div');
            timerContainer.id = 'timer-container';
            timerContainer.className = 'timer-container';
            
            const timerHeader = document.createElement('div');
            timerHeader.className = 'timer-header';
            
            const timerLabel = document.createElement('div');
            timerLabel.className = 'timer-label';
            timerLabel.textContent = 'Tempo Restante:';
            
            const timerValue = document.createElement('div');
            timerValue.id = 'timer-value';
            timerValue.className = 'timer-value';
            timerValue.textContent = `${this.tempoRestante}s`;
            
            timerHeader.appendChild(timerLabel);
            timerHeader.appendChild(timerValue);
            
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            
            const progressFill = document.createElement('div');
            progressFill.id = 'progress-fill';
            progressFill.className = 'progress-fill';
            progressFill.style.width = '100%';
            
            progressBar.appendChild(progressFill);
            
            timerContainer.appendChild(timerHeader);
            timerContainer.appendChild(progressBar);
            
            // Insere o temporizador antes do container de opções
            const opcoesContainer = document.getElementById('opcoes-container');
            opcoesContainer.parentNode.insertBefore(timerContainer, opcoesContainer);
        }
        
        // Atualiza o temporizador a cada segundo
        this.temporizador = setInterval(() => {
            this.tempoRestante--;
            
            // Atualiza o display do temporizador
            const timerValue = document.getElementById('timer-value');
            const progressFill = document.getElementById('progress-fill');
            
            timerValue.textContent = `${this.tempoRestante}s`;
            progressFill.style.width = `${(this.tempoRestante / 25) * 100}%`;
            
            // Adiciona classe de perigo quando o tempo estiver acabando
            if (this.tempoRestante <= 5) {
                timerValue.classList.add('danger');
                progressFill.classList.add('danger');
                
                // Inicia o som de relógio nos últimos 5 segundos se ainda não estiver tocando
                if (!this.clockSoundInterval) {
                    const clockSound = document.getElementById('sound-clock');
                    this.clockSoundInterval = setInterval(() => {
                        clockSound.currentTime = 0;
                        clockSound.play();
                    }, 1000);
                }
            }
            
            // Verifica se o tempo acabou
            if (this.tempoRestante <= 0) {
                clearInterval(this.temporizador);
                clearInterval(this.clockSoundInterval);
                this.clockSoundInterval = null;
                
                // Toca o som de erro quando o tempo acabar
                document.getElementById('sound-timeout').play();
                
                // Incrementa contador de perguntas respondidas e respostas incorretas
                this.perguntasRespondidas++;
                this.respostasIncorretas++;
                this.salvarDados();
                
                // Exibe feedback de tempo esgotado
                this.exibirFeedbackTempoEsgotado();
            }
        }, 1000);
    },
    
    // Exibe feedback quando o tempo se esgota
    exibirFeedbackTempoEsgotado: function() {
        // Esconde a seção de pergunta
        document.getElementById('secao-pergunta').style.display = 'none';
        
        // Configura e exibe a seção de feedback
        const secaoFeedback = document.getElementById('secao-feedback');
        const mensagemFeedback = document.getElementById('mensagem-feedback');
        const pontosFeedback = document.getElementById('pontos-feedback');
        
        secaoFeedback.className = 'feedback incorreto';
        mensagemFeedback.textContent = 'Tempo Esgotado!';
        pontosFeedback.textContent = 'Sem pontos';
        
        // Exibe a resposta correta
        const respostaCorreta = document.getElementById('resposta-correta');
        respostaCorreta.textContent = this.perguntaAtual.opcoes[this.perguntaAtual.resposta];
        
        // Exibe a seção de feedback
        secaoFeedback.style.display = 'block';
        
        // Atualiza pontuação total
        document.getElementById('pontuacao-feedback').textContent = this.pontuacao.toFixed(1);
        
        // Exibe contadores de respostas corretas e incorretas
        const estatisticasElement = document.createElement('div');
        estatisticasElement.className = 'estatisticas-quiz';
        estatisticasElement.innerHTML = `
            <div class="estatistica-item">
                <span class="estatistica-label">Respostas Corretas:</span>
                <span class="estatistica-valor corretas">${this.respostasCorretas}</span>
            </div>
            <div class="estatistica-item">
                <span class="estatistica-label">Respostas Incorretas:</span>
                <span class="estatistica-valor incorretas">${this.respostasIncorretas}</span>
            </div>
        `;
        
        // Adiciona as estatísticas ao feedback se ainda não existirem
        if (!document.querySelector('.estatisticas-quiz')) {
            secaoFeedback.appendChild(estatisticasElement);
        } else {
            // Atualiza os valores se já existirem
            document.querySelector('.estatistica-valor.corretas').textContent = this.respostasCorretas;
            document.querySelector('.estatistica-valor.incorretas').textContent = this.respostasIncorretas;
        }
        
        // Adiciona event listener para o botão continuar
        const botaoContinuar = document.getElementById('botao-continuar');
        // Remove qualquer listener anterior para evitar duplicação
        const novoBotao = botaoContinuar.cloneNode(true);
        botaoContinuar.parentNode.replaceChild(novoBotao, botaoContinuar);
        
        novoBotao.addEventListener('click', () => this.continuarQuiz());
    },
    
    // Seleciona uma pergunta aleatória da dificuldade escolhida
    selecionarPergunta: function(dificuldade) {
        const perguntas = this.todasPerguntas[dificuldade];
        const indice = Math.floor(Math.random() * perguntas.length);
        this.perguntaAtual = {
            ...perguntas[indice],
            dificuldade: dificuldade
        };
    },
    
    // Exibe a pergunta atual na interface
    exibirPergunta: function() {
        // Determina o tema atual com base na pergunta (case-insensitive)
        let temaSelecionado = "Geral"; // Default theme if no specific match
        const perguntaLower = this.perguntaAtual.pergunta.toLowerCase();

        if (perguntaLower.includes("the love and deepspace") ||
            (perguntaLower.includes("zayne") && perguntaLower.includes("tlad"))) {
            temaSelecionado = "The Love And Deepspace";
        } else if (perguntaLower.includes("mo dao zu shi") ||
                   perguntaLower.includes("wei wuxian") ||
                   perguntaLower.includes("lan wangji")) {
            temaSelecionado = "Mo Dao Zu Shi";
        } else if (perguntaLower.includes("dorama") ||
                   perguntaLower.includes("k-drama") ||
                   perguntaLower.includes("the untamed")) {
            temaSelecionado = "Doramas";
        } else if (perguntaLower.includes("enfermagem") ||
                   perguntaLower.includes("paciente") ||
                   perguntaLower.includes("hospitalar")) {
            temaSelecionado = "Enfermagem";
        } else if (perguntaLower.includes("dr. zayne") && !perguntaLower.includes("tlad")) {
             // Assuming "Dr. Zayne" questions without TLAD are still related
            temaSelecionado = "Dr. Zayne (TLAD)";
        }
        // If none match, temaSelecionado remains "Geral"

        // Exibe o tema atual com estilo melhorado
        const themeDisplayElement = document.getElementById('quiz-theme-display');
        // Using innerHTML to add structure and styling elements
        themeDisplayElement.innerHTML = `<span class="theme-icon">🏷️</span> Tema: <strong class="theme-name">${temaSelecionado}</strong>`;

        // Exibe o texto da pergunta
        document.getElementById('texto-pergunta').textContent = this.perguntaAtual.pergunta;

        // Atualiza a badge de dificuldade
        const dificuldadeTexto = this.perguntaAtual.dificuldade === 'facil' ? 'fácil' :
                                this.perguntaAtual.dificuldade === 'medio' ? 'médio' : 'difícil';

        document.getElementById('dificuldade-badge-pergunta').className = `dificuldade-badge ${this.perguntaAtual.dificuldade}`;
        document.getElementById('dificuldade-badge-pergunta').textContent = `Nível ${dificuldadeTexto}`;

        // Limpa opções anteriores
        const containerOpcoes = document.getElementById('opcoes-container');
        containerOpcoes.innerHTML = '';
        
        // Embaralhar as opções mantendo o índice da resposta correta
        const respostaCorreta = this.perguntaAtual.opcoes[this.perguntaAtual.resposta];
        const opcoesEmbaralhadas = [...this.perguntaAtual.opcoes];
        
        // Função para embaralhar array
        const embaralhar = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
        
        // Embaralhar as opções
        embaralhar(opcoesEmbaralhadas);
        
        // Encontrar o novo índice da resposta correta
        const novoIndiceRespostaCorreta = opcoesEmbaralhadas.indexOf(respostaCorreta);
        
        // Cria botões para cada opção
        opcoesEmbaralhadas.forEach((opcao, index) => {
            const botao = document.createElement('button');
            botao.className = 'opcao-quiz';
            botao.textContent = opcao;
            botao.dataset.indice = index;
            botao.addEventListener('click', (e) => {
                // Para o temporizador quando uma resposta for selecionada
                if (this.temporizador) {
                    clearInterval(this.temporizador);
                }
                if (this.clockSoundInterval) {
                    clearInterval(this.clockSoundInterval);
                    this.clockSoundInterval = null;
                }
                this.verificarResposta(parseInt(e.target.dataset.indice), novoIndiceRespostaCorreta);
            });
            containerOpcoes.appendChild(botao);
        });
    },
    
    // Verifica se a resposta selecionada está correta
    verificarResposta: function(indiceResposta, indiceRespostaCorreta) {
        const estaCorreta = indiceResposta === indiceRespostaCorreta;
        
        // Incrementa contador de perguntas respondidas
        this.perguntasRespondidas++;
        
        // Atualiza contadores de respostas corretas/incorretas
        if (estaCorreta) {
            this.respostasCorretas++;
            // Tocar efeito sonoro positivo
            document.getElementById('sound-positive').play();
        } else {
            this.respostasIncorretas++;
            // Tocar efeito sonoro negativo
            document.getElementById('sound-negative').play();
        }
        
        // Calcula pontos baseado na dificuldade
        let pontos = 0;
        if (estaCorreta) {
            switch (this.perguntaAtual.dificuldade) {
                case 'facil':
                    pontos = 100.0;
                    break;
                case 'medio':
                    pontos = 2;
                    break;
                case 'dificil':
                    pontos = 3;
                    break;
            }
            
            // Adiciona pontos à pontuação total do quiz
            this.pontuacao += pontos;
            
            // Adiciona pontos ao sistema principal, preservando os pontos existentes
            const pontosPrincipais = parseInt(localStorage.getItem('msaude_pontos') || '0');
            localStorage.setItem('msaude_pontos', (pontosPrincipais + pontos).toString());
            
            // Atualiza o display de pontos principal se estiver disponível
            const pointsDisplay = document.getElementById('pointsDisplay');
            if (pointsDisplay) {
                pointsDisplay.textContent = `${pontosPrincipais + pontos} pontos`;
            }
            
            this.salvarDados();
        }
        
        // Exibe feedback
        this.exibirFeedback(estaCorreta, pontos, indiceRespostaCorreta);
    },
    
    // Exibe feedback após resposta
    exibirFeedback: function(estaCorreta, pontos, indiceRespostaCorreta) {
        // Esconde a seção de pergunta
        document.getElementById('secao-pergunta').style.display = 'none';
        
        // Configura e exibe a seção de feedback
        const secaoFeedback = document.getElementById('secao-feedback');
        const mensagemFeedback = document.getElementById('mensagem-feedback');
        const pontosFeedback = document.getElementById('pontos-feedback');
        
        if (estaCorreta) {
            secaoFeedback.className = 'feedback correto';
            mensagemFeedback.textContent = 'Resposta Correta!';
            pontosFeedback.textContent = `+${pontos.toFixed(1)} pontos`;
        } else {
            secaoFeedback.className = 'feedback incorreto';
            mensagemFeedback.textContent = 'Resposta Incorreta!';
            pontosFeedback.textContent = 'Sem pontos';
        }
        
        // Exibe a resposta correta
        const respostaCorreta = document.getElementById('resposta-correta');
        const opcoesEmbaralhadas = Array.from(document.querySelectorAll('.opcao-quiz')).map(btn => btn.textContent);
        respostaCorreta.textContent = opcoesEmbaralhadas[indiceRespostaCorreta];
        
        // Exibe a seção de feedback
        secaoFeedback.style.display = 'block';
        
        // Atualiza pontuação total
        document.getElementById('pontuacao-feedback').textContent = this.pontuacao.toFixed(1);
        
        // Exibe contadores de respostas corretas e incorretas
        const estatisticasElement = document.createElement('div');
        estatisticasElement.className = 'estatisticas-quiz';
        estatisticasElement.innerHTML = `
            <div class="estatistica-item">
                <span class="estatistica-label">Respostas Corretas:</span>
                <span class="estatistica-valor corretas">${this.respostasCorretas}</span>
            </div>
            <div class="estatistica-item">
                <span class="estatistica-label">Respostas Incorretas:</span>
                <span class="estatistica-valor incorretas">${this.respostasIncorretas}</span>
            </div>
        `;
        
        // Adiciona as estatísticas ao feedback se ainda não existirem
        if (!document.querySelector('.estatisticas-quiz')) {
            secaoFeedback.appendChild(estatisticasElement);
        } else {
            // Atualiza os valores se já existirem
            document.querySelector('.estatistica-valor.corretas').textContent = this.respostasCorretas;
            document.querySelector('.estatistica-valor.incorretas').textContent = this.respostasIncorretas;
        }
        
        // Adiciona event listener para o botão continuar
        const botaoContinuar = document.getElementById('botao-continuar');
        // Remove qualquer listener anterior para evitar duplicação
        const novoBotao = botaoContinuar.cloneNode(true);
        botaoContinuar.parentNode.replaceChild(novoBotao, botaoContinuar);
        
        novoBotao.addEventListener('click', () => this.continuarQuiz());
    },
    
    // Continua o quiz após feedback
    continuarQuiz: function() {
        // Esconde a seção de feedback
        document.getElementById('secao-feedback').style.display = 'none';
        
        // Mostra a seção inicial
        document.getElementById('secao-inicial').style.display = 'block';
        
        // Atualiza interface
        this.atualizarInterface();
    }
};

// Inicializa o quiz quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded disparado, inicializando Quiz");
    Quiz.inicializar();
});
