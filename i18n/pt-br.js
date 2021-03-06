export default function () {
  return {
    SetYourStatus: 'Defina seu status',
    LogOut: 'Sair',
    SigningIn: 'Entrar',
    SessionExpired:
      "Sua sessão expirou. <a href='#' onClick='window.location.reload()'>Clique aqui para fazer login novamente</a>",
    NoTasksTitle: 'Status',
    NoTasks: 'Sem tarefas ativas',
    NoTasksHintNotAvailable:
      'Altere o estado da atividade para começar a receber tarefas. ',
    NoTasksHintAvailable: 'Você está pronto para começar a receber tarefas. ',
    NoCRMConfigured: 'Sem CRM configurado',
    NoCRMConfiguredAction: 'COMO CONFIGURAR',
    NoCRMTitle: 'Configuração do CRM',
    NoCRMHint: 'Nossos documentos podem ajudá-lo a começar. ',
    LoginUsername: 'Nome de usuário',
    LoginPassword: 'Senha',
    LoginLoading: 'Carregando... ',
    LoginWelcome: 'Olá, bem-vindo ao Flex!” ',
    LoginLogin: 'LOGIN',
    LoginContinue: 'Continuar assim mesmo',
    LoginAgain: 'Login novamente',
    LoginLaunch: 'Lançar',
    LoginTitle: 'Twilio Flex',
    LoginErrorDomain: 'Opa! Seu domínio de tempo de execução está incorreto. ',
    LoginErrorDomainDetails:
      "Encontre seu domínio de tempo de execução <a href='https://www.twilio.com/console/runtime/overview'>aqui</a>",
    LoginErrorSso: 'Hmm, o logon único não foi configurado. ',
    LoginErrorSsoDetails:
      "Saiba como configurar o Single Sign-On <a href='https://www.twilio.com/console/flex/users/single-sign-on'>aqui</a>",
    LoginErrorPopupBlocked: 'Desculpe, pop-ups estão bloqueados. ',
    LoginErrorPopupBlockedDetails:
      "<a href='https://support.google.com/chrome/answer/95472'> Descubra como ativar pop-ups no seu navegador</a>",
    LoginErrorUntrustedDomain:
      'O Login Confiável não foi habilitado para este domínio. ',
    LoginErrorUntrustedDomainDetails:
      "Saiba como configurar o Single Sign-On <a href='https://www.twilio.com/docs/flex/configuring-single-sign-and-identity-provider-integration#how-do-i-login-to-a-self-hosted-domain' target='_blank'>aqui</a>",
    LoginErrorInvalidCertificate: 'Configurações de SSO inválidas',
    LoginErrorInvalidCertificateDetails:
      "Isto pode ser causado por URLs mal formados ou certificados ausentados/inválidos. <br><br>Reconfigure as <a href='https://www.twilio.com/docs/api/errors/70251' target='_blank'>configurações de SSO</a> e tente novamente. ",
    LoginErrorGeneric:
      'Opa! Bem, isso não funcionou: (Por favor, verifique novamente sua configuração. ',
    LoginIsAdmin: 'Administrador Flex?” ',
    LoginWithTwilio: 'Entrar com Twilio. ',
    TaskHeaderLeaveCall: 'DEIXAR CHAMADA',
    TaskHeaderEndCall: 'DESLIGAR',
    TaskHeaderWrapup: 'ENCERRAR',
    TaskHeaderComplete: 'COMPLETO',
    TaskHeaderEndChat: 'ENCERRAR O BATE-PAPO',
    TaskHeaderStatusPending: '',
    TaskHeaderStatusAccepted: 'Live | {{helper.DurationSinceUpdate}}',
    TaskHeaderWebChatStatusAccepted:
      "{{#if helper.chat.isCustomerOnline}} {{icon name='GreenIndicator'}}} {{else}} {{icon name='greyIndicator'}}} {{/if}} Ao vivo | {{helper.DurationSinceUpdate}}",
    TaskHeaderGroupCallAccepted:
      "Live | {{helper.DurationSinceUpdate}} | {{icon name='Participant'}}} {{task.conference.liveParticipantCount}}",
    TaskHeaderStatusWrapup: 'Encerrar | {{helper.DurationSinceUpdate}}',
    TaskHeaderStatusCompleted: 'Concluído | {{helper.DurationSinceUpdate}}',
    SideNavTaskView: 'Área de trabalho do agente',
    SideNavTeamsView: 'Equipes',
    SideNavAgentDashboard: 'Painel de controle do agente',
    SideNavSupervisorInspections: 'Inspeções da Autoridade',
    SideNavSupervisorDashboard: 'Painel de controle do supervisor',
    SideNavSupervisorReports: 'Relatórios de Supervisão',
    SideNavSettings: 'Configurações',
    SideNavQueuesStatsView: 'Estatísticas da Fila',
    TaskHeaderLine: '{{task.defaultFrom}}',
    TaskLineCallIncomingTitle: 'Chamada recebida',
    TaskLineCallTransferTitle: 'Pedido de transferência',
    TaskLineCallEndedTitle: 'Chamada encerrada',
    TaskLineQueue: 'Fila: {{task.queueName}}',
    TaskLineCallDuration: '{{helper.DurationSinceUpdate}}',
    TaskLineCallReserved: 'Chamada recebida da fila {{task.queueName}}',
    TaskLineCallAssigned: 'Live | {{helper.DurationSinceUpdate}}',
    TaskLineCallWrapup: 'Encerrar | {{helper.DurationSinceUpdate}}',
    TaskLineGroupCallAssigned:
      "Live | {{helper.DurationSinceUpdate}} | {{icon name='Participant'}}} {{task.conference.liveParticipantCount}}",
    TaskLineCallTransferWorker:
      'Solicitação de {{task.incomingTransferObject.worker.fullName}} (direct)',
    TaskLineCallTransferWorkerDetail:
      'De: {{task.incomingTransferObject.worker.fullName}} (direct)<br />Fila: {{task.queueName}}',
    TaskLineCallTransferQueue:
      'Solicitação de {{task.incomingTransferObject.worker.fullName}} ({{task.IncomingTransferObject.queue.name}})',
    TaskLineCallTransferQueueDetail:
      'De: {{task.incomingTransferObject.worker.fullName}}<br />Fila: {{task.queueName}}',
    TaskLineChatReserved: 'Pedido de bate-papo recebido',
    TaskLineChatLineReserved: 'Pedido de linha de entrada',
    TaskLineChatMessengerReserved: 'Pedido do Messenger de entrada',
    TaskLineChatWhatsAppReserved: 'Pedido WhatsApp recebido',
    TaskLineSmsReserved: 'Pedido de SMS de entrada',
    TaskLineTitle: '',
    TaskReserved: 'Reservado',
    TaskAssigned: 'Atribuído',
    TaskWrapup: 'Em finalizar',
    TaskCompleted: 'Concluído',
    TaskCanceled: 'Cancelado',
    TaskFilterAll: 'TODAS AS TAREFAS',
    TaskFilterActive: 'TAREFAS ACTIVAS',
    TaskFilterWrapping: 'TAREFAS EM FINALIZAR',
    ColumnHeaderAgent: 'AGENTE',
    ColumnHeaderCalls: 'CHAMADAS',
    ColumnHeaderTasks: 'OUTRAS TAREFAS',
    SupervisorUserCardFirstLine: '{{worker.fullName}}',
    SupervisorUserCardSecondLine:
      '{{worker.actividityName}} | {{worker.actividityDuration}}',
    SupervisorTaskViewContentHeader:
      '{{worker.fullName}}, {{task.defaultFrom}}',
    SupervisorTaskHeaderLine: '{{task.defaultFrom}}',
    SupervisorTaskLive: '{{helper.DurationSinceUpdateShort}}',
    SupervisorTaskGroupCall:
      '{{helper.DurationSinceUpdateShort}} | ({{task.Conference.LiveParticipantCount}})',
    SupervisorTaskWrapUp: 'Encerrar | {{helper.DurationSinceUpdateShort}}',
    SupervisorTaskCompleted: 'Concluído | {{helper.DurationSinceUpdateShort}}',
    SupervisorTaskCardHeader: '{{task.defaultFrom}}',
    LiveCommsMonitoringMessage:
      'Você está ouvindo uma chamada com {{task.defaultFrom}} e {{worker.fullName}}',
    LiveCommsMonitoringMessageMoreWorkers:
      'Você está ouvindo uma chamada com {{task.defaultFrom}} e {{workers.length}} workers',
    LiveCommsMonitoringMessageNoWorkers:
      'Você está ouvindo uma chamada com {{task.defaultFrom}}',
    LiveCommsOngoingCallMessage:
      'Você está em uma chamada com {{task.defaultFrom}}',
    LiveCommsIncomingCallMessage: 'Chamada recebida de {{task.defaultFrom}}',
    LiveCommsBarAccept: 'aceitar',
    LiveCommsBarDeny: 'rejeitar',
    LiveCommsBarReturnToCall: 'RETORNO',
    LiveCommsBarStopListening: 'PARE DE OUVIR',
    LiveCommsBarHold: 'SEGURAR',
    LiveCommsBarUnHold: 'DESPRENDER',
    WorkerDirectoryTitle: 'Transferência',
    WorkerDirectoryItemFirstLine: '{{worker.fullName}}',
    WorkerDirectoryItemSecondLine: '{{worker.actividityName}}',
    WorkerDirectoryAgentsTabLabel: 'AGENTES',
    WorkerDirectoryQueuesTabLabel: 'FILAS',
    WorkerDirectoryQueueItemText: '{{queue.name}}',
    WorkerDirectorySearchPlaceholder: 'Pesquisar',
    ChatInputDisabledText: 'A conversa terminou',
    WorkerCanvasHeader: 'Perfil',
    WorkerCanvasDetailsHeader: 'Detalhes do Agente',
    WorkerCanvasSkillsHeader: 'Habilidades',
    WorkerSkillLevelInvalid:
      'Selecione um nível de habilidade entre {{min}} - {{max}}',
    WorkerSkillPleaseSelect: 'Adicionar habilidade',
    WorkerSkillsNoSkills: 'Sem competências atribuídas',
    WorkerSkillsSchemaMismatch:
      'Incompatibilidade do esquema de competências do trabalhador',
    WorkerSkillsSaved: 'Alterações salvas com sucesso',
    WorkerSkillsError: 'Falha ao salvar as alterações',
    WorkerSkillsReverted: 'Alterações revertidas',
    ChatWelcomeText: 'A conversa começou com o cliente',
    UiVersionDeprecated: '{{message}}',
    RuntimeLoginLabel: 'Domínio de tempo de execução',
    RuntimeLoginPlaceholder: 'Seu domínio de tempo de execução',
    RuntimeLoginLaunch: 'Lançar',
    RuntimeLoginWithTwilio: 'Entrar com Twilio. ',
    RuntimeLoginIsAdmin: 'Administrador Flex?” ',
    RuntimeLoginErrorDomain:
      'Opa! Bem, isso não funcionou: (Verifique seu <b>domínio</b>. ',
    RuntimeLoginErrorSso:
      'Opa! Bem, isso não funcionou: (Verifique sua configuração <b>SSO</b> . ',
    TransferFailedNotification: 'Agente indisponível',
    TaskCannotBeTransferredNotification: 'Tarefa não pode ser transferida',
    SupervisorTaskCanvasHeader: 'DETALHES DA TAREFA',
    TaskTabAgentIncomingLabel: 'Recebendo',
    TaskTabAgentCallLabel: 'Ligar',
    TaskTabAgentChatLabel: 'Conversar',
    TaskTabAgentInfoLabel: 'Informações',
    TaskTabSupervisorOverviewLabel: 'Visão geral',
    TaskTabSupervisorCallLabel: 'Ligar',
    TaskTabSupervisorChatLabel: 'Conversar',
    TaskTabSupervisorInfoLabel: 'Informações',
    MicNotAvailableNotification:
      'Não é possível acessar o microfone, verifique as configurações do navegador. ',
    BrowserVoiceDisabledNotification:
      'A chamada não pode ser aceita. O SDK do Twilio Voice foi desativado. ',
    MessageSizeExceeded:
      'O número do caractere inserido excede o limite - {{currentCharCount}}/{{maxCharCount}}',
    UserControlWorkerSecondLine:
      '{{worker.actividityName}} | {{worker.actividityDuration}}',
    UserLoggedOutSuccess: 'Você desconectou com sucesso!” ',
    CannotChangeOtherWorkerActivity:
      'Você não pode alterar a atividade de um agente enquanto ele tem uma tarefa/reserva pendente. ',
    CallCanvasWorkerOnHold: 'Você está em espera',
    CallCanvasUnholdWorker: 'Dessegurar',
    CallParticipantStatusOnHold: 'Em espera',
    CallParticipantStatusLive: 'Ao vivo',
    CallParticipantStatusConnecting: 'Chamando... ',
    CallParticipantStatusLeft: 'Chamada esquerda',
    CallParticipantStatusTransferFailed: 'Sem Resposta',
    CallParticipantStatusKickConfirmation: 'Remover da chamada?” ',
    LiveCommsIncomingDirectCallTransfer:
      'Solicitação de {{task.incomingTransferObject.worker.fullName}} (direct)',
    LiveCommsIncomingQueueCallTransfer:
      'Solicitação de {{task.incomingTransferObject.worker.fullName}} ({{task.IncomingTransferObject.queue.name}})',
    CallParticipantCustomerName: '{{task.defaultFrom}}',
    MonitoringFailedNotification: 'Falha na tentativa de monitoramento',
    PredefinedChatMessageAuthorName: 'Bot',
    PredefinedChatMessageBody: 'Olá! Como podemos ajudá-lo hoje?” ',
    AgentStatusAvailable: 'Disponível',
    AgentStatusBusy: 'Ocupado',
    AgentStatusUnavailable: 'Indisponível',
    AgentStatusOffline: 'Offline',
    ActiveTasksTileTitle: 'Tarefas activas',
    WaitingTasksTileTitle: 'Tarefas em espera',
    AgentsByActivityTileTitle: 'Agentes',
    LongestWaitTimeTileTitle: 'A espera mais longa',
    QueuesNoDataHeading: 'Filas',
    QueuesNoDataBodyForAdmin:
      'Você não tem filas configuradas. Configure suas filas. ',
    QueuesNoDataBodyForSupervisor:
      'Não há filas configuradas. Entre em contato com seu administrador. ',
    QueuesNoDataLinkLabelForAdmin: 'Adicionar fila',
    PendingReservationsOnLogoutNotification:
      'Você não pode sair enquanto tiver uma tarefa/reserva pendente',
    PendingReservationsOnActivityStateChangeNotification:
      'Você não pode atualizar sua atividade enquanto tiver uma tarefa/reserva pendente',
    AcceptTaskTooltip: 'Aceitar',
    RejectTaskTooltip: 'Rejeitar',
    HangupCallTooltip: 'Desligue',
    LeaveCallTooltip: 'Sair',
    MuteCallTooltip: 'Mudo',
    HoldCustomerTooltip: 'Hold Client',
    UnholdCustomerTooltip: 'Cancelar retenção do cliente',
    HoldAgentTooltip: 'Segure {{worker.fullName}}',
    UnholdAgentTooltip: 'Unhold {{worker.fullName}}',
    CancelTransferTooltip: 'Cancelar Consulta',
    KickAgentTooltip: 'Desligue {{worker.fullName}}',
    ColdTransferTooltip: 'Transferência',
    WarmTransferTooltip: 'Consultar',
    MonitorCallTooltip: 'Chamada de Monitoramento',
    LogToFileStartLoggingText:
      '<div><h2>Capturar logs</h2><ul><li>Quando você habilita o log, seu navegador será atualizado e a captura de logs será iniciada. </li><li>Uma vez que você está pronto para terminar - parar o registro. Todos os logs capturados serão salvos em um arquivo de texto. </li></ul></div>',
    LogToFileStartLoggingLabel: 'Atualizar e iniciar',
    LogToFileStopLoggingText:
      '<div><h2>O registro está ativo</h2><p>Se você repetiu suas ações e reproduziu o problema, pare o registro para baixar o arquivo com logs capturados. </p></div>',
    LogToFileStopLoggingLabel: 'Concluir e baixar',
    ChatOrchestrationAddToChatChannelFailed:
      'Falha ao adicionar worker ao canal de bate-papo. ',
    ChatOrchestrationDeactivateChatChannelFailed:
      'Falha ao desativar o canal de bate-papo. ',
    ChatOrchestrationLeaveChatChannelFailed:
      'Falha ao remover o worker do canal de bate-papo. ',
    TeamsViewFilterAction:
      'Filtro {{#if filterCount}} ({{filterCount}}) {{/if}}',
    TeamsViewClearSearchAction: 'Limpar resultado da pesquisa',
    TeamsViewClearSearchPlaceholder: 'Agentes de Pesquisa',
    TeamsViewResultsSummaryNoWorkersDisplayed:
      'Nenhum agente correspondeu aos seus critérios. Refinar resultados por meio de pesquisa ou filtro. ',
    TeamsViewResultsSummaryMaxWorkersDisplayed:
      'Mostrando o número máximo de agentes. Refinar resultados através de pesquisa ou ',
    TeamsViewResultsSummaryFilterCTA: 'filtro',
    TeamFiltersPanelTitle: 'Filtros',
    TeamFiltersPanelSingularLabel:
      'Exibindo <strong>{{number}}</strong> agente',
    TeamFiltersPanelPluralLabel: 'Exibindo <strong>{{number}}</strong> agentes',
    TeamFiltersApply: 'Aplicar',
    TeamFiltersReset: 'Redefinir',
    InputPlaceHolder: 'Digite mensagem',
    TypingIndicator: '{0} está digitando... ',
    Connecting: 'Conectando... ',
    Disconnected: 'Conexão perdida',
    Read: 'Ler',
    MessageSendingDisabled: 'O envio de mensagens foi desativado',
    Today: 'HOJE',
    Yesterday: 'ONTEM',
    MessageCanvasTrayContent:
      '<h6>Concluir</h6><p>Este bate-papo não está mais ativo. </p>',
    MessageCanvasTrayButton: 'INICIAR NOVO CHAT',
    WelcomeMessage: 'Bem-vindo ao atendimento ao cliente',
    NotificationMessage: 'Não foi possível executar a ação: {{message}}',
    Save: 'SALVAR',
    Reset: 'REDEFINIR',
    MessageCharacterCountStatus: '{{currentCharCount}}/{{maxCharCount}}',
    MessageCharacterCountReached:
      'Contagem de caracteres atingida - {{currentCharCount}}/{{maxCharCount}}',
    SendMessageTooltip: 'Enviar Mensagem',
    FieldValidationRequiredField: 'Campo obrigatório',
    FieldValidationInvalidEmail: 'Forneça um endereço de e-mail válido',
    ChatInputUserNotMemberDisabledText:
      'Você não é um participante deste bate-papo',
    FilterItemAny: 'Qualquer',
    FilterItemAmountSelected: '{{amount}} selecionado',
    FilterItemOnly: '{{item.label}} somente',
    TaskLineChatAssigned:
      '{{helper.DurationSinceUpdate}} | {{#if helper.chat.typers.length}} digitando... {{else}} {{#if helper.chat.lastMessage}} {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.Body}} {{else}} Nenhuma mensagem {{/if}} {{/if}}',
    TaskLineWebChatAssigned:
      "{{#if helper.chat.isCustomerOnline}} {{icon name='GreenIndicator'}} {{else}} {{icon name='greyIndicator'}}} {{/if}} {{helper.DurationSinceUpdate}} | {{#if helper.chat.typers.length}} digitando... {{else}} {{#if helper.chat.lastMessage}} {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.Body}} {{else}} Nenhuma mensagem {{/if}} {{/if}",
  }
}
