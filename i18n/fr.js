export default function () {
  return {
    SetYourStatus: 'Définir votre statut',
    LogOut: 'Se déconnecter',
    SigningIn: 'Connexion',
    SessionExpired:
      "Votre session a expiré. <a href='#' onClick='window.location.reload()'>Cliquez ici pour vous connecter à nouveau</a>",
    NoTasksTitle: 'Statut',
    NoTasks: 'Aucune tâche active',
    NoTasksHintNotAvailable:
      "Modifier l'état de l'activité pour commencer à recevoir des tâches. ",
    NoTasksHintAvailable: 'Vous êtes prêt à commencer à recevoir des tâches. ',
    NoCRMConfigured: 'Pas de CRM configuré',
    NoCRMConfiguredAction: 'COMMENT CONFIGURER',
    NoCRMTitle: 'Config CRM',
    NoCRMHint: 'Nos documents peuvent vous aider à démarrer. ',
    LoginUsername: "Nom d'utilisateur",
    LoginPassword: 'Mot de passe',
    LoginLoading: 'Chargement... ',
    LoginWelcome: 'Salut, bienvenue à Flex !',
    LoginLogin: 'LOGIN',
    LoginContinue: 'Continuer quand même',
    LoginAgain: 'Se connecter à nouveau',
    LoginLaunch: 'Lancement',
    LoginTitle: 'Twilio Flex',
    LoginErrorDomain: "Oups ! Votre domaine d'exécution est incorrect. ",
    LoginErrorDomainDetails:
      "Trouvez votre domaine d'exécution <a href='https://www.twilio.com/console/runtime/overview'>ici</a>",
    LoginErrorSso: "Hmm, Single Sign-On n'a pas été configuré. ",
    LoginErrorSsoDetails:
      "Découvrez comment configurer Single Sign-On <a href='https://www.twilio.com/console/flex/users/single-sign-on'>ici</a>",
    LoginErrorPopupBlocked:
      'Désolé, les fenêtres contextuelles sont bloquées. ',
    LoginErrorPopupBlockedDetails:
      "<a href='https://support.google.com/chrome/answer/95472'> Découvrez comment activer les fenêtres contextuelles dans votre navigateur</a>",
    LoginErrorUntrustedDomain:
      "Connexion sécurisée n'a pas été activée pour ce domaine. ",
    LoginErrorUntrustedDomainDetails:
      "Découvrez comment configurer Single Sign-On <a href='https://www.twilio.com/docs/flex/configuring-single-sign-and-identity-provider-integration#how-do-i-login-to-a-self-hosted-domain' target='_blank'>ici</a>",
    LoginErrorInvalidCertificate: 'Paramètres SSO non valides',
    LoginErrorInvalidCertificateDetails:
      "Cela peut être causé par des URL mal formées ou des certificats manquants/invalides. <br><br>Veuillez reconfigurer les <a href='https://www.twilio.com/docs/api/errors/70251' target='_blank'>paramètres SSO</a> et réessayer. ",
    LoginErrorGeneric:
      "Oups ! Eh bien, cela n'a pas fonctionné : (Veuillez vérifier votre configuration. ",
    LoginIsAdmin: 'Admin Flex ?',
    LoginWithTwilio: 'Connectez-vous avec Twilio. ',
    TaskHeaderLeaveCall: "LAISSER L'APPEL",
    TaskHeaderEndCall: 'RACCROCHER',
    TaskHeaderWrapup: 'EMBALLER',
    TaskHeaderComplete: 'COMPLET',
    TaskHeaderEndChat: 'FIN DU CHAT',
    TaskHeaderStatusPending: '',
    TaskHeaderStatusAccepted: 'En direct | {{helper.durationSinceUpdate}}',
    TaskHeaderWebChatStatusAccepted:
      "{{#if helper.chat.isCustomerOnline}} {{icon name='GreenIndicator'}}} {{else}} {{icon name='GreyIndicator'}}} {{/if}} Live | {{{helper.durationInceUpdate}}",
    TaskHeaderGroupCallAccepted:
      "En direct | {{helper.durationSinceUpdate}} | {{icon name='Participant'}}} {{task.Conference.LiveParticipantCount}}",
    TaskHeaderStatusWrapup: 'Récapituler | {{helper.durationSinceUpdate}}',
    TaskHeaderStatusCompleted: 'Terminé | {{helper.durationSinceUpdate}}',
    SideNavTaskView: "Bureau de l'agent",
    SideNavTeamsView: 'Équipes',
    SideNavAgentDashboard: "Tableau de bord de l'agent",
    SideNavSupervisorInspections: 'Inspections du superviseur',
    SideNavSupervisorDashboard: 'Tableau de bord du superviseur',
    SideNavSupervisorReports: 'Rapports du superviseur',
    SideNavSettings: 'Paramètres',
    SideNavQueuesStatsView: "Statistiques des files d'attente",
    TaskHeaderLine: '{{task.defaultFrom}}',
    TaskLineCallIncomingTitle: 'Appel entrant',
    TaskLineCallTransferTitle: 'Demande de transfert',
    TaskLineCallEndedTitle: 'Appel terminé',
    TaskLineQueue: "File d'attente : {{task.queueName}}",
    TaskLineCallDuration: '{{helper.durationSinceUpdate}}',
    TaskLineCallReserved:
      "Appel entrant de la file d'attente {{task.queueName}}",
    TaskLineCallAssigned: 'En direct | {{helper.durationSinceUpdate}}',
    TaskLineCallWrapup: 'Récapituler | {{helper.durationSinceUpdate}}',
    TaskLineGroupCallAssigned:
      "En direct | {{helper.durationSinceUpdate}} | {{icon name='Participant'}}} {{task.Conference.LiveParticipantCount}}",
    TaskLineCallTransferWorker:
      'Demande de {{task.incomingTransferObject.worker.fullName}} (direct)',
    TaskLineCallTransferWorkerDetail:
      "De : {{task.incomingTransferObject.worker.fullName}} (direct)<br />file d'attente : {{task.QueueName}}",
    TaskLineCallTransferQueue:
      'Demande de {{task.incomingTransferObject.worker.fullName}} ({{task.incomingTransferObject.queue.name}})',
    TaskLineCallTransferQueueDetail:
      "De : {{task.incomingTransferObject.worker.fullName}}<br />file d'attente : {{task.QueueName}}",
    TaskLineChatReserved: 'Demande de chat entrant',
    TaskLineChatLineReserved: 'Demande de ligne entrante',
    TaskLineChatMessengerReserved: 'Demande de messager entrant',
    TaskLineChatWhatsAppReserved: 'Demande WhatsApp entrante',
    TaskLineSmsReserved: 'Demande SMS entrante',
    TaskLineTitle: '',
    TaskReserved: 'Réservé',
    TaskAssigned: 'Affecté',
    TaskWrapup: 'En fin de compte',
    TaskCompleted: 'Terminé',
    TaskCanceled: 'Annulé',
    TaskFilterAll: 'TOUTES LES TÂCHES',
    TaskFilterActive: 'TÂCHES ACTIVES',
    TaskFilterWrapping: 'TÂCHES DANS LA RÉCAPITULATION',
    ColumnHeaderAgent: 'AGENT',
    ColumnHeaderCalls: 'APPELS',
    ColumnHeaderTasks: 'AUTRES TÂCHES',
    SupervisorUserCardFirstLine: '{{worker.fullName}}',
    SupervisorUserCardSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    SupervisorTaskViewContentHeader:
      '{{worker.fullName}}, {{task.defaultFrom}}',
    SupervisorTaskHeaderLine: '{{task.defaultFrom}}',
    SupervisorTaskLive: '{{helper.durationSinceUpdateShort}}',
    SupervisorTaskGroupCall:
      '{{helper.durationSinceUpdateShort}} | ({{task.Conference.liveParticipantCount}})',
    SupervisorTaskWrapUp: 'Récapituler | {{helper.durationSinceUpdateShort}}',
    SupervisorTaskCompleted: 'Terminé | {{helper.durationSinceUpdateShort}}',
    SupervisorTaskCardHeader: '{{task.defaultFrom}}',
    LiveCommsMonitoringMessage:
      'Vous écoutez un appel avec {{task.defaultFrom}} et {{worker.fullName}}',
    LiveCommsMonitoringMessageMoreWorkers:
      'Vous écoutez un appel avec {{task.defaultFrom}} et {{workers.length}} travailleurs',
    LiveCommsMonitoringMessageNoWorkers:
      'Vous écoutez un appel avec {{task.defaultFrom}}',
    LiveCommsOngoingCallMessage: 'Vous êtes en appel avec {{task.defaultFrom}}',
    LiveCommsIncomingCallMessage: 'Appel entrant de {{task.defaultFrom}}',
    LiveCommsBarAccept: 'accepter',
    LiveCommsBarDeny: 'rejeter',
    LiveCommsBarReturnToCall: 'RETOUR',
    LiveCommsBarStopListening: "ARRÊTE D'ÉCOUTER",
    LiveCommsBarHold: 'TENIR',
    LiveCommsBarUnHold: 'DÉTENIR',
    WorkerDirectoryTitle: 'Transfert',
    WorkerDirectoryItemFirstLine: '{{worker.fullName}}',
    WorkerDirectoryItemSecondLine: '{{worker.activityName}}',
    WorkerDirectoryAgentsTabLabel: 'AGENTS',
    WorkerDirectoryQueuesTabLabel: "FILES D'ATTENTE",
    WorkerDirectoryQueueItemText: '{{queue.name}}',
    WorkerDirectorySearchPlaceholder: 'Recherche',
    ChatInputDisabledText: 'Conversation terminée',
    WorkerCanvasHeader: 'Profil',
    WorkerCanvasDetailsHeader: "Détails de l'agent",
    WorkerCanvasSkillsHeader: 'Compétences',
    WorkerSkillLevelInvalid:
      'Veuillez sélectionner un niveau de compétence entre {{min}} - {{max}}',
    WorkerSkillPleaseSelect: 'Ajouter une compétence',
    WorkerSkillsNoSkills: 'Aucune compétence attribuée',
    WorkerSkillsSchemaMismatch:
      'Incompatibilité du schéma des compétences des travailleurs',
    WorkerSkillsSaved: 'Modifications enregistrées avec succès',
    WorkerSkillsError: "Échec de l'enregistrement des modifications",
    WorkerSkillsReverted: 'Modifications annulées',
    ChatWelcomeText: 'Conversation commencée avec le client',
    UiVersionDeprecated: '{{message}}',
    RuntimeLoginLabel: "Domaine d'exécution",
    RuntimeLoginPlaceholder: "Votre domaine d'exécution",
    RuntimeLoginLaunch: 'Lancement',
    RuntimeLoginWithTwilio: 'Connectez-vous avec Twilio. ',
    RuntimeLoginIsAdmin: 'Admin Flex ? ',
    RuntimeLoginErrorDomain:
      "Oups ! Eh bien, cela n'a pas fonctionné : (Vérifiez votre <b>domaine</b>. ",
    RuntimeLoginErrorSso:
      "Oups ! Eh bien, cela n'a pas fonctionné : (Vérifiez votre configuration <b>SSO</b> . ",
    TransferFailedNotification: 'Agent indisponible',
    TaskCannotBeTransferredNotification: 'Impossible de transférer la tâche',
    SupervisorTaskCanvasHeader: 'DÉTAILS DE LA TÂCHE',
    TaskTabAgentIncomingLabel: 'Entrant',
    TaskTabAgentCallLabel: 'Appel',
    TaskTabAgentChatLabel: 'Chat',
    TaskTabAgentInfoLabel: 'Info',
    TaskTabSupervisorOverviewLabel: "Vue d'ensemble",
    TaskTabSupervisorCallLabel: 'Appel',
    TaskTabSupervisorChatLabel: 'Chat',
    TaskTabSupervisorInfoLabel: 'Info',
    MicNotAvailableNotification:
      "Impossible d'accéder au microphone, veuillez vérifier les paramètres du navigateur. ",
    BrowserVoiceDisabledNotification:
      "L'appel ne peut pas être accepté. Le SDK Twilio Voice a été désactivé. ",
    MessageSizeExceeded:
      'Le nombre de caractères saisi dépasse la limite - {{currentCharCount}}/{{maxCharCount}}',
    UserControlWorkerSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    UserLoggedOutSuccess: 'Vous vous êtes déconnecté avec succès ! ',
    CannotChangeOtherWorkerActivity:
      "Vous ne pouvez pas modifier l'activité d'un agent tant qu'il a une tâche/réservation en attente. ",
    CallCanvasWorkerOnHold: 'Vous êtes en attente',
    CallCanvasUnholdWorker: 'Détenir',
    CallParticipantStatusOnHold: 'En attente',
    CallParticipantStatusLive: 'En direct',
    CallParticipantStatusConnecting: 'Appeler... ',
    CallParticipantStatusLeft: 'Appelant à gauche',
    CallParticipantStatusTransferFailed: 'Pas de réponse',
    CallParticipantStatusKickConfirmation: "Supprimer de l'appel ? ",
    LiveCommsIncomingDirectCallTransfer:
      'Demande de {{task.incomingTransferObject.worker.fullName}} (direct)',
    LiveCommsIncomingQueueCallTransfer:
      'Demande de {{task.incomingTransferObject.worker.fullName}} ({{task.incomingTransferObject.queue.name}})',
    CallParticipantCustomerName: '{{task.defaultFrom}}',
    MonitoringFailedNotification: 'La tentative de surveillance a échoué',
    PredefinedChatMessageAuthorName: 'Bot',
    PredefinedChatMessageBody:
      "Salut ! Comment pouvons-nous vous aider aujourd'hui ? ",
    AgentStatusAvailable: 'Disponible',
    AgentStatusBusy: 'Occupé',
    AgentStatusUnavailable: 'Non disponible',
    AgentStatusOffline: 'Hors ligne',
    ActiveTasksTileTitle: 'Tâches actives',
    WaitingTasksTileTitle: 'Tâches en attente',
    AgentsByActivityTileTitle: 'Agents',
    LongestWaitTimeTileTitle: 'Plus longue attente',
    QueuesNoDataHeading: "Files d'attente",
    QueuesNoDataBodyForAdmin:
      "Vous n'avez pas de files d'attente configurées. Veuillez configurer vos files d'attente. ",
    QueuesNoDataBodyForSupervisor:
      "Il n'y a pas de files d'attente configurées. Veuillez contacter votre administrateur. ",
    QueuesNoDataLinkLabelForAdmin: "Ajouter une file d'attente",
    PendingReservationsOnLogoutNotification:
      'Vous ne pouvez pas vous déconnecter tant que vous avez une tâche/réservation en attente',
    PendingReservationsOnActivityStateChangeNotification:
      'Vous ne pouvez pas mettre à jour votre activité tant que vous avez une tâche/réservation en attente',
    AcceptTaskTooltip: 'Accepter',
    RejectTaskTooltip: 'Rejeter',
    HangupCallTooltip: 'Raccroche',
    LeaveCallTooltip: 'Partir',
    MuteCallTooltip: 'Muet',
    HoldCustomerTooltip: 'Maintenir le client',
    UnholdCustomerTooltip: 'Débloquer le client',
    HoldAgentTooltip: 'Maintenir {{worker.fullName}}',
    UnholdAgentTooltip: 'Débloquer {{worker.fullName}}',
    CancelTransferTooltip: 'Annuler la consultation',
    KickAgentTooltip: 'Raccrocher {{worker.fullName}}',
    ColdTransferTooltip: 'Transfert',
    WarmTransferTooltip: 'Consulter',
    MonitorCallTooltip: 'Appel de surveillance',
    LogToFileStartLoggingText:
      '<div><h2>Enregistrer les journaux</h2><ul><li>Lorsque vous activez la journalisation, votre navigateur sera actualisé et la capture des journaux commencera. </li><li>Une fois que vous êtes prêt à terminer, arrêtez la journalisation. Tous les journaux capturés seront enregistrés dans un fichier texte.</li></ul></div>',
    LogToFileStartLoggingLabel: 'Actualiser et démarrer',
    LogToFileStopLoggingText:
      '<div><h2>La journalisation est active</h2><p>Si vous avez répété vos actions et reproduit le problème, arrêtez la journalisation pour télécharger le fichier avec les journaux capturés. </p></div>',
    LogToFileStopLoggingLabel: 'Terminer et télécharger',
    ChatOrchestrationAddToChatChannelFailed:
      "Impossible d'ajouter un travailleur à la chaîne de discussion. ",
    ChatOrchestrationDeactivateChatChannelFailed:
      'Échec de la désactivation de la chaîne de chat. ',
    ChatOrchestrationLeaveChatChannelFailed:
      'Échec de la suppression du travailleur de la chaîne de discussion. ',
    TeamsViewFilterAction:
      'Filtre {{#if FilterCount}} ({{FilterCount}}) {{/if}}',
    TeamsViewClearSearchAction: 'Effacer le résultat de la recherche',
    TeamsViewClearSearchPlaceholder: 'Agents de recherche',
    TeamsViewResultsSummaryNoWorkersDisplayed:
      "Aucun agent ne correspond à vos critères. Affiner les résultats à l'aide d'une recherche ou d'un filtre. ",
    TeamsViewResultsSummaryMaxWorkersDisplayed:
      "Affichage du nombre maximal d'agents. Affiner les résultats par recherche ou ",
    TeamsViewResultsSummaryFilterCTA: 'filtre',
    TeamFiltersPanelTitle: 'Filtres',
    TeamFiltersPanelSingularLabel:
      "Affichage de l'agent <strong>{{number}}</strong>",
    TeamFiltersPanelPluralLabel:
      'Affichage de <strong>{{number}}</strong> agents',
    TeamFiltersApply: 'Appliquer',
    TeamFiltersReset: 'Réinitialiser',
    InputPlaceHolder: 'Tapez un message',
    TypingIndicator: '{0} est en train de taper... ',
    Connecting: 'Connexion... ',
    Disconnected: 'Connexion perdue',
    Read: 'Lire',
    MessageSendingDisabled: "L'envoi de message a été désactivé",
    Today: "AUJOURD'HUI",
    Yesterday: 'HIER',
    MessageCanvasTrayContent:
      "<h6>Terminer</h6><p>Ce chat n'est plus actif. <p>",
    MessageCanvasTrayButton: 'COMMENCER UN NOUVEAU CHAT',
    WelcomeMessage: 'Bienvenue au service client',
    NotificationMessage: "Impossible d'effectuer l'action : {{message}}",
    Save: 'ENREGISTRER',
    Reset: 'RÉINITIALISER',
    MessageCharacterCountStatus: '{{currentCharCount}}/{{maxCharCount}}',
    MessageCharacterCountReached:
      'Nombre de caractères atteint - {{currentCharCount}}/{{maxCharCount}}',
    SendMessageTooltip: 'Envoyer un message',
    FieldValidationRequiredField: 'Champ obligatoire',
    FieldValidationInvalidEmail: 'Veuillez fournir une adresse e-mail valide',
    ChatInputUserNotMemberDisabledText:
      "Vous n'êtes pas un participant à ce chat",
    FilterItemAny: 'Tout',
    FilterItemAmountSelected: '{{amount}} sélectionné',
    FilterItemOnly: '{{item.label}} uniquement',
    TaskLineChatAssigned:
      '{{helper.durationSinceUpdate}} | {{#if helper.chat.typers.length}} taper... {{else}} {{#if helper.chat.lastMessage}} {{helper.chat.lastMessage.authorName}} : {{helper.chat.lastMessage.body}} {{else}} Aucun message {{/if}} {{/if}}',
    TaskLineWebChatAssigned:
      "{{#if helper.chat.isCustomerOnline}} {{icon name='GreenIndicator'}}} {{else}} {{icon name='GreyIndicator'}}} {{/if}} {{helper.durationsInceUpdate}} | {{#if helper.chat.typers.length}} taper... {{else}} {{#if helper.chat.lastMessage}} {{helper.chat.lastMessage.authorName}} : {{helper.chat.lastMessage.body}} {{else}} Aucun message {{/if}} {{/if}}",
  }
}
