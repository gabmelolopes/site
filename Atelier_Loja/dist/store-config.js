/* Edite esta configuração para personalizar a loja e adicionar os produtos. */
window.STORE = {
  brand: 'ATELIER',
  brandTitle: 'Atelier',
  tagline: 'O essencial, no seu tempo.',
  description: 'Um olhar leve sobre o vestir. Texturas naturais, linhas simples e espaço para ser você.',
  contactEmail: null,
  whatsapp: null,
  instagram: null,
  categories: [
    {
      id: 'novidades',
      label: 'Novidades',
      referenceLabel: 'Novidades',
      description: 'Um novo capítulo para o seu jeito de vestir.'
    },
    {
      id: 'camisas-linho',
      label: 'Camisas Linho Atelier',
      referenceLabel: 'Camisas Linho Sileo',
      description: 'A expressão mais leve de um clássico.'
    },
    {
      id: 'camisa-classica',
      label: 'Camisa Clássica',
      referenceLabel: 'Camisa Clássica',
      description: 'Linhas simples para acompanhar diferentes momentos.'
    },
    {
      id: 'calcas-linho',
      label: 'Calças Linho',
      referenceLabel: 'Calças Linho',
      description: 'Leveza que encontra o seu ritmo.'
    },
    {
      id: 'bermudas-linho',
      label: 'Bermudas Linho',
      referenceLabel: 'Bermudas Linho',
      description: 'Um convite aos dias de sol e às pausas sem pressa.'
    },
    {
      id: 'camisa-polo',
      label: 'Camisa Polo - Atelier',
      referenceLabel: 'Camisa Polo - Sileo',
      description: 'Entre o casual e o clássico, um jeito próprio de vestir.'
    },
    {
      id: 'batas-linho',
      label: 'Batas Linho',
      referenceLabel: 'Batas Linho',
      description: 'Formas livres, presença natural.'
    },
    {
      id: 'jaqueta-linho',
      label: 'Jaqueta Linho',
      referenceLabel: 'Jaqueta Linho',
      description: 'Uma nova leitura das sobreposições.'
    },
    {
      id: 'bordadas',
      label: 'Bordadas - Atelier',
      referenceLabel: 'Bordadas - Sileo',
      description: 'Um olhar mais próximo para os detalhes.'
    },
    {
      id: 'world-cup',
      label: 'World Cup - Atelier',
      referenceLabel: 'World Cup - Sileo',
      description: 'O encontro entre o vestir e a paixão pelo jogo.'
    },
    {
      id: 'sweater',
      label: 'Sweater - Atelier',
      referenceLabel: 'Sweater - Sileo',
      description: 'Para os dias que pedem uma camada a mais.'
    },
    {
      id: 'bones',
      label: 'Bonés',
      referenceLabel: 'Bonés',
      description: 'O detalhe que acompanha o seu dia.'
    },
    {
      id: 'playboy-club',
      label: 'Atelier PlayBoy Club',
      referenceLabel: 'Sileo PlayBoy Club',
      description: 'Um espaço para explorar novas referências.'
    },
    {
      id: 'sports-club',
      label: 'Sports Club Atelier',
      referenceLabel: 'Sports Club Sileo',
      description: 'A energia do esporte em uma leitura cotidiana.',
      children: [
        {
          id: 'sports-calcas',
          label: 'Calças - Sports Club',
          referenceLabel: 'Calças - Sports Club',
          description: 'Um olhar esportivo para os seus dias.'
        },
        {
          id: 'sports-bermudas',
          label: 'Bermudas - Sports Club',
          referenceLabel: 'Bermudas - Sports Club',
          description: 'O espírito casual em movimento.'
        },
        {
          id: 'sports-sweater',
          label: 'Sweater - Sports Club',
          referenceLabel: 'Sweater - Sports Club',
          description: 'Sobreposições com uma inspiração esportiva.'
        },
        {
          id: 'sports-jaqueta',
          label: 'Jaqueta - Sports Club',
          referenceLabel: 'Jaqueta - Sports Club',
          description: 'Uma camada para acompanhar novos caminhos.'
        }
      ]
    },
    {
      id: 'fitness',
      label: 'Fitness - Atelier',
      referenceLabel: 'Fitness - Sileo',
      description: 'Encontre o seu ritmo, no seu tempo.'
    },
    {
      id: 'praia',
      label: 'Praia - Atelier',
      referenceLabel: 'Praia - Sileo',
      description: 'O horizonte como inspiração.'
    },
    {
      id: 'camisetas-pima',
      label: 'Camisetas Pima',
      referenceLabel: 'Camisetas Pima',
      description: 'O essencial visto de perto.'
    },
    {
      id: 'riviera',
      label: 'Riviera - Atelier',
      referenceLabel: 'Riviera - Sileo',
      description: 'Entre o sol, a brisa e o tempo de aproveitar.'
    },
    {
      id: 'feminino',
      label: 'Feminino',
      referenceLabel: 'Feminino',
      description: 'Leveza para vestir a sua própria história.',
      children: [
        {
          id: 'feminino-camisas-linho',
          label: 'Camisas Linho',
          referenceLabel: 'Camisas Linho',
          description: 'Um clássico aberto a novas combinações.'
        },
        {
          id: 'feminino-calca-linho',
          label: 'Calça Linho',
          referenceLabel: 'Calça Linho',
          description: 'Simplicidade que acompanha cada passo.'
        },
        {
          id: 'feminino-shorts-linho',
          label: 'Shorts Linho',
          referenceLabel: 'Shorts Linho',
          description: 'Para viver os dias mais leves.'
        },
        {
          id: 'feminino-vestido-linho',
          label: 'Vestido Linho',
          referenceLabel: 'Vestido Linho',
          description: 'Um gesto simples, uma presença inteira.'
        }
      ]
    },
    {
      id: 'linhos-essenciais',
      label: 'Linhos Essenciais',
      referenceLabel: 'Linhos Essenciais',
      description: 'O ponto de partida para combinações que fazem sentido para você.'
    },
    {
      id: 'toalhas',
      label: 'Toalhas',
      referenceLabel: 'Toalhas',
      description: 'Texturas para os pequenos rituais do dia.'
    },
    {
      id: 'pulseiras',
      label: 'Pulseiras - Atelier',
      referenceLabel: 'Pulseiras - Sileo',
      description: 'Pequenos detalhes, expressão pessoal.'
    },
    {
      id: 'oculos',
      label: 'Óculos - Atelier',
      referenceLabel: 'Óculos - Sileo',
      description: 'Um novo olhar sobre o cotidiano.'
    },
    {
      id: 'rio-brasil-2026',
      label: 'Rio Brasil -2026',
      referenceLabel: 'Rio Brasil -2026',
      description: 'Uma inspiração brasileira para explorar.'
    }
  ],
  infoPages: [
    {
      id: 'guia-de-medidas',
      label: 'Guia de medida',
      title: 'Encontre o seu caimento.',
      eyebrow: 'GUIA DE MEDIDA',
      intro: 'A escolha começa por conhecer as suas medidas. As tabelas específicas acompanharão cada produto quando o catálogo estiver disponível.',
      sections: [
        {
          title: 'Comece por uma peça sua',
          text: 'Escolha uma roupa com um caimento de que você goste. Coloque-a sobre uma superfície plana e use uma fita métrica para registrar as medidas indicadas na futura tabela do produto.'
        },
        {
          title: 'Compare com atenção',
          text: 'Os tamanhos podem variar entre modelos. Consulte sempre as medidas da peça escolhida e observe se a tabela se refere ao corpo ou à roupa.'
        },
        {
          title: 'Tabelas em preparação',
          text: 'As medidas reais e as orientações de cada modelo serão adicionadas junto aos produtos. Ainda não há uma tabela de tamanhos disponível nesta prévia.'
        }
      ]
    },
    {
      id: 'envios',
      label: 'Envios',
      title: 'O caminho até você.',
      eyebrow: 'ENVIOS',
      intro: 'As informações de entrega serão apresentadas aqui antes da abertura das compras.',
      sections: [
        {
          title: 'Destinos e modalidades',
          text: 'A loja está preparando suas modalidades de entrega e regiões atendidas. Esta prévia ainda não calcula frete nem recebe pedidos.'
        },
        {
          title: 'Prazos e acompanhamento',
          text: 'Os prazos de preparação, transporte e as formas de acompanhar uma entrega serão informados na política definitiva de envios.'
        }
      ]
    },
    {
      id: 'sob-medida',
      label: 'Ajustes & Sob Medida',
      title: 'O caimento faz a diferença.',
      eyebrow: 'AJUSTES & SOB MEDIDA',
      intro: 'Um espaço dedicado às possibilidades de personalização e ajuste de cada peça.',
      sections: [
        {
          title: 'Um olhar para cada detalhe',
          text: 'Comprimento, proporção e preferência de caimento fazem parte de uma escolha pessoal. As opções oferecidas pela loja serão descritas nesta página.'
        },
        {
          title: 'Disponibilidade em preparação',
          text: 'Serviços, modelos elegíveis, valores e prazos ainda serão definidos. Nenhuma encomenda sob medida é recebida por esta prévia.'
        }
      ]
    },
    {
      id: 'perguntas',
      label: 'Você tem perguntas para fazer?',
      title: 'Vamos conversar.',
      eyebrow: 'PERGUNTAS FREQUENTES',
      intro: 'Reunimos as primeiras respostas para você conhecer este espaço.',
      sections: [
        {
          title: 'Já posso comprar?',
          text: 'Ainda não. O catálogo está sendo preparado e as compras serão disponibilizadas em uma próxima etapa.'
        },
        {
          title: 'Onde encontro os tamanhos?',
          text: 'Cada produto terá suas próprias medidas e informações de caimento. Você também pode consultar as orientações iniciais no Guia de medida.'
        },
        {
          title: 'Como falar com a loja?',
          text: 'Os canais oficiais de atendimento serão divulgados na página Contato antes da abertura das compras.'
        }
      ]
    },
    {
      id: 'cuidados',
      label: 'Como lavar as peças?',
      title: 'Cuidar também é vestir.',
      eyebrow: 'CUIDADOS COM AS PEÇAS',
      intro: 'Toda peça merece atenção. As orientações específicas de conservação serão disponibilizadas com cada produto.',
      sections: [
        {
          title: 'A etiqueta vem primeiro',
          text: 'Consulte a etiqueta de composição e conservação da sua peça antes de lavar, secar ou passar. Tecidos, acabamentos e detalhes podem exigir cuidados diferentes.'
        },
        {
          title: 'Observe os detalhes',
          text: 'Em caso de dúvida sobre uma instrução, confirme a orientação com a loja antes de realizar o procedimento.'
        },
        {
          title: 'Orientações por produto',
          text: 'As recomendações de lavagem e conservação de cada modelo serão adicionadas ao catálogo. Esta página contém apenas orientações iniciais.'
        }
      ]
    },
    {
      id: 'fidelidade',
      label: 'Fidelidade Atelier',
      title: 'Uma relação que continua.',
      eyebrow: 'FIDELIDADE ATELIER',
      intro: 'Este espaço será dedicado às novidades e às possibilidades de relacionamento da loja com seus clientes.',
      sections: [
        {
          title: 'Programa em preparação',
          text: 'O programa de fidelidade ainda não está ativo. Regras de participação, condições e eventuais benefícios serão divulgados antes do lançamento.'
        },
        {
          title: 'Conheça primeiro',
          text: 'Quando houver novidades, você poderá consultar todos os detalhes nesta página. Esta prévia não acumula pontos nem oferece descontos de fidelidade.'
        }
      ]
    },
    {
      id: 'trocas',
      label: 'Trocas e Devoluções',
      title: 'Clareza em cada etapa.',
      eyebrow: 'TROCAS E DEVOLUÇÕES',
      intro: 'As compras ainda não estão abertas. A política definitiva de trocas e devoluções será publicada antes do início das vendas.',
      sections: [
        {
          title: 'Condições e procedimentos',
          text: 'Esta página receberá os critérios aplicáveis, os canais de solicitação e as orientações para acompanhamento de cada pedido.'
        },
        {
          title: 'Informações em preparação',
          text: 'O conteúdo desta prévia é provisório e não apresenta uma política comercial em vigor. Não há pedidos sendo recebidos por este site.'
        }
      ]
    },
    {
      id: 'contato',
      label: 'Contato',
      title: 'Perto de você.',
      eyebrow: 'CONTATO',
      intro: 'Uma boa conversa também faz parte da experiência.',
      sections: [
        {
          title: 'Atendimento em preparação',
          text: 'Os canais oficiais, os horários de atendimento e as informações da loja serão adicionados antes do lançamento.'
        },
        {
          title: 'Enquanto isso, explore',
          text: 'Conheça as categorias e descubra a proposta deste espaço. Os produtos e as informações de compra chegarão em uma próxima etapa.'
        }
      ]
    },
    {
      id: 'privacidade',
      label: 'Política de Privacidade',
      title: 'Sua privacidade importa.',
      eyebrow: 'PRIVACIDADE',
      intro: 'Esta é uma prévia da loja. A política definitiva de privacidade será disponibilizada antes da abertura dos cadastros e das compras.',
      sections: [
        {
          title: 'Informações que estarão aqui',
          text: 'A versão definitiva identificará a empresa responsável, seus canais de contato e as informações sobre o tratamento de dados na operação da loja.'
        },
        {
          title: 'Conteúdo provisório',
          text: 'Esta página ainda está em preparação e não substitui a política de privacidade da futura operação comercial.'
        }
      ]
    },
    {
      id: 'sobre',
      label: 'Sobre a Atelier',
      title: 'O essencial, no seu tempo.',
      eyebrow: 'NOSSA PROPOSTA',
      intro: 'Uma proposta visual que encontra beleza nas texturas naturais, nas formas simples e nos pequenos detalhes.',
      sections: [
        {
          title: 'Espaço para o que importa',
          text: 'Vestir pode ser um gesto leve. Este espaço convida a explorar combinações, descobrir referências e encontrar um jeito próprio de se expressar.'
        },
        {
          title: 'Um novo capítulo',
          text: 'A história da loja e sua seleção de produtos serão apresentadas aqui em breve. Atelier é o nome provisório desta prévia.'
        }
      ]
    }
  ],
  products: []
};
