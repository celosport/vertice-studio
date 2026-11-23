/**
 * Todo o conteúdo do site está aqui. Para publicar, preencha os links e o WhatsApp; o resto da página se ajusta sozinho
 * (botão sem link não aparece).
 */

export interface Produto {
  nome: string;
  descricao: string;
  etiqueta: string;
  /** Endereço do sistema no ar. */
  site?: string;
  /** Demonstração para o visitante testar (de preferência com dados fictícios). */
  demo?: string;
  /** Repositório de código aberto. */
  codigo?: string;
}

export interface Servico {
  titulo: string;
  dor: string;
  descricao: string;
}

export const site = {
  nome: 'Vértice',
  sufixo: 'Studio',
  /** Só números, com país e DDD. Ex.: 5511999998888. Vazio = o botão leva ao bloco de contato. */
  whatsapp: '5521997323765',
  mensagemWhatsapp: 'Olá! Quero agendar um diagnóstico gratuito.',
  email: '',

  hero: {
    selo: 'Software house e automação',
    titulo: ['Engenharia de software e automação ', 'sob medida', ' para escalar operações.'],
    subtitulo:
      'Desenvolvemos sistemas próprios e automações inteligentes que eliminam trabalho manual e aumentam a receita da sua empresa.',
    chamada: 'Agendar diagnóstico gratuito',
  },

  produtos: [
    {
      nome: 'AgentDesk',
      descricao: 'Controle de custos e acompanhamento ao vivo de agentes de IA, com escritório animado.',
      etiqueta: 'IA · global',
      site: 'https://agent-desk.up.railway.app/',
    },
    {
      nome: 'SafetyWorkControl',
      descricao: 'Gestão de EPIs e conformidade com a NR-6 para empresas.',
      etiqueta: 'Segurança do trabalho',
      site: 'https://safetyworkcontrol.com/',
    },
    {
      nome: 'PulseFit',
      descricao: 'Gestão, treinos e cobrança recorrente por Pix para personal trainers e estúdios.',
      etiqueta: 'Fitness',
      site: 'https://pulsefitapp.up.railway.app/',
    },
    {
      nome: 'Zena',
      descricao: 'Agendamento automático e CRM para salões e clínicas de estética.',
      etiqueta: 'Beleza e estética',
      site: 'https://zena.up.railway.app/',
    },
  ] as Produto[],

  servicos: [
    {
      titulo: 'Atendimento que não espera',
      dor: 'Cliente demora a ser respondido.',
      descricao: 'Respostas e agendamentos automáticos no WhatsApp, com passagem para uma pessoa quando precisa.',
    },
    {
      titulo: 'Rotinas no piloto automático',
      dor: 'Planilhas e tarefas repetidas todo dia.',
      descricao: 'Relatórios, cobranças e avisos que rodam sozinhos e chegam prontos.',
    },
    {
      titulo: 'Sistema feito para você',
      dor: 'Dados espalhados e processos soltos.',
      descricao: 'Um sistema próprio, do desenho à entrega, que reúne tudo num só lugar.',
    },
  ] as Servico[],

  prova: {
    nome: 'Marcelo Moreira de Lima',
    cargo: 'Analista de Sistemas',
    resumo: 'Cria sistemas completos, do banco de dados ao aplicativo instalável no celular.',
    pontos: [
      'Backend em .NET e PostgreSQL, aplicativos em Angular.',
      'Testes automatizados de ponta a ponta.',
      'Projetos publicados e código aberto no GitHub.',
    ],
    github: 'https://github.com/celosport',
    linkedin: 'https://www.linkedin.com/in/marcelo-moreira-de-lima-b9044441',
  },
};
