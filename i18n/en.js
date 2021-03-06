export default function () {
  return {
    SetYourStatus: 'Set your status',
    LogOut: 'Log out',
    SigningIn: 'Signing in',
    SessionExpired:
      "Your session has expired. <a href='#' onClick='window.location.reload()'>Click here to log in again</a>",
    NoTasksTitle: 'Status',
    NoTasks: 'No active tasks',
    NoTasksHintNotAvailable: 'Change activity state to start receiving tasks.',
    NoTasksHintAvailable: 'You are ready to start receiving tasks.',
    NoCRMConfigured: 'No CRM configured',
    NoCRMConfiguredAction: 'HOW TO CONFIGURE',
    NoCRMTitle: 'CRM config',
    NoCRMHint: 'Our docs can help you get started.',
    LoginUsername: 'User Name',
    LoginPassword: 'Password',
    LoginLoading: 'Loading ...',
    LoginWelcome: 'Hi there, welcome to Flex!',
    LoginLogin: 'LOGIN',
    LoginContinue: 'Continue anyway',
    LoginAgain: 'Login again',
    LoginLaunch: 'Launch',
    LoginTitle: 'Twilio Flex',
    LoginErrorDomain: 'Oops! Your runtime domain is incorrect.',
    LoginErrorDomainDetails:
      "Find your runtime domain <a href='https://www.twilio.com/console/runtime/overview'>here</a>",
    LoginErrorSso: 'Hmm, Single Sign-On has not been configured.',
    LoginErrorSsoDetails:
      "Find out how to configure Single Sign-On <a href='https://www.twilio.com/console/flex/users/single-sign-on'>here</a>",
    LoginErrorPopupBlocked: 'Sorry, pop-ups are blocked.',
    LoginErrorPopupBlockedDetails:
      "<a href='https://support.google.com/chrome/answer/95472'> Find out how to enable pop-ups in your browser</a>",
    LoginErrorUntrustedDomain:
      'Trusted Login has not been enabled for this domain.',
    LoginErrorUntrustedDomainDetails:
      "Find out how to configure Single Sign-On <a href='https://www.twilio.com/docs/flex/configuring-single-sign-and-identity-provider-integration#how-do-i-login-to-a-self-hosted-domain' target='_blank'>here</a>",
    LoginErrorInvalidCertificate: 'Invalid SSO Settings',
    LoginErrorInvalidCertificateDetails:
      "This may be caused by malformed urls or missing/invalid certificates.<br><br>Please reconfigure the <a href='https://www.twilio.com/docs/api/errors/70251' target='_blank'>SSO settings</a> and retry.",
    LoginErrorGeneric:
      "Oops! Well, that didn't work :( Please double check your configuration.",
    LoginIsAdmin: 'Flex Admin?',
    LoginWithTwilio: 'Login with Twilio.',
    TaskHeaderLeaveCall: 'LEAVE CALL',
    TaskHeaderEndCall: 'HANG UP',
    TaskHeaderWrapup: 'WRAP UP',
    TaskHeaderComplete: 'COMPLETE',
    TaskHeaderEndChat: 'END CHAT',
    TaskHeaderStatusPending: '',
    TaskHeaderStatusAccepted: 'Live | {{helper.durationSinceUpdate}}',
    TaskHeaderWebChatStatusAccepted:
      "{{#if helper.chat.isCustomerOnline}} {{{icon name='GreenIndicator'}}} {{else}} {{{icon name='GreyIndicator'}}} {{/if}} Live | {{helper.durationSinceUpdate}}",
    TaskHeaderGroupCallAccepted:
      "Live | {{helper.durationSinceUpdate}} | {{{icon name='Participant'}}} {{task.conference.liveParticipantCount}}",
    TaskHeaderStatusWrapup: 'Wrap up | {{helper.durationSinceUpdate}}',
    TaskHeaderStatusCompleted: 'Completed | {{helper.durationSinceUpdate}}',
    SideNavTaskView: 'Agent Desktop',
    SideNavTeamsView: 'Teams',
    SideNavAgentDashboard: 'Agent Dashboard',
    SideNavSupervisorInspections: 'Supervisor Inspections',
    SideNavSupervisorDashboard: 'Supervisor Dashboard',
    SideNavSupervisorReports: 'Supervisor Reports',
    SideNavSettings: 'Settings',
    SideNavQueuesStatsView: 'Queue Stats',
    TaskHeaderLine: '{{task.defaultFrom}}',
    TaskLineCallIncomingTitle: 'Incoming call',
    TaskLineCallTransferTitle: 'Transfer request',
    TaskLineCallEndedTitle: 'Call ended',
    TaskLineQueue: 'Queue: {{task.queueName}}',
    TaskLineCallDuration: '{{helper.durationSinceUpdate}}',
    TaskLineCallReserved: 'Incoming call from queue {{task.queueName}}',
    TaskLineCallAssigned: 'Live | {{helper.durationSinceUpdate}}',
    TaskLineCallWrapup: 'Wrap up | {{helper.durationSinceUpdate}}',
    TaskLineGroupCallAssigned:
      "Live | {{helper.durationSinceUpdate}} | {{{icon name='Participant'}}} {{task.conference.liveParticipantCount}}",
    TaskLineCallTransferWorker:
      'Request from {{task.incomingTransferObject.worker.fullName}} (direct)',
    TaskLineCallTransferWorkerDetail:
      'From: {{task.incomingTransferObject.worker.fullName}} (direct)<br />Queue: {{task.queueName}}',
    TaskLineCallTransferQueue:
      'Request from {{task.incomingTransferObject.worker.fullName}} ({{task.incomingTransferObject.queue.name}})',
    TaskLineCallTransferQueueDetail:
      'From: {{task.incomingTransferObject.worker.fullName}}<br />Queue: {{task.queueName}}',
    TaskLineChatReserved: 'Incoming chat request',
    TaskLineChatLineReserved: 'Incoming Line request',
    TaskLineChatMessengerReserved: 'Incoming Messenger request',
    TaskLineChatWhatsAppReserved: 'Incoming WhatsApp request',
    TaskLineSmsReserved: 'Incoming SMS request',
    TaskLineTitle: '',
    TaskReserved: 'Reserved',
    TaskAssigned: 'Assigned',
    TaskWrapup: 'In wrap up',
    TaskCompleted: 'Completed',
    TaskCanceled: 'Canceled',
    TaskFilterAll: 'ALL TASKS',
    TaskFilterActive: 'ACTIVE TASKS',
    TaskFilterWrapping: 'TASKS IN WRAP UP',
    ColumnHeaderAgent: 'AGENT',
    ColumnHeaderCalls: 'CALLS',
    ColumnHeaderTasks: 'OTHER TASKS',
    SupervisorUserCardFirstLine: '{{worker.fullName}}',
    SupervisorUserCardSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    SupervisorTaskViewContentHeader:
      '{{worker.fullName}}, {{task.defaultFrom}}',
    SupervisorTaskHeaderLine: '{{task.defaultFrom}}',
    SupervisorTaskLive: '{{helper.durationSinceUpdateShort}}',
    SupervisorTaskGroupCall:
      '{{helper.durationSinceUpdateShort}} | ({{task.conference.liveParticipantCount}})',
    SupervisorTaskWrapUp: 'Wrap up | {{helper.durationSinceUpdateShort}}',
    SupervisorTaskCompleted: 'Completed | {{helper.durationSinceUpdateShort}}',
    SupervisorTaskCardHeader: '{{task.defaultFrom}}',
    LiveCommsMonitoringMessage:
      'You are listening to a call with {{task.defaultFrom}} and {{worker.fullName}}',
    LiveCommsMonitoringMessageMoreWorkers:
      'You are listening to a call with {{task.defaultFrom}} and {{workers.length}} workers',
    LiveCommsMonitoringMessageNoWorkers:
      'You are listening to a call with {{task.defaultFrom}}',
    LiveCommsOngoingCallMessage: 'You are on a call with {{task.defaultFrom}}',
    LiveCommsIncomingCallMessage: 'Incoming call from {{task.defaultFrom}}',
    LiveCommsBarAccept: 'accept',
    LiveCommsBarDeny: 'reject',
    LiveCommsBarReturnToCall: 'RETURN',
    LiveCommsBarStopListening: 'STOP LISTENING',
    LiveCommsBarHold: 'HOLD',
    LiveCommsBarUnHold: 'UNHOLD',
    WorkerDirectoryTitle: 'Transfer',
    WorkerDirectoryItemFirstLine: '{{worker.fullName}}',
    WorkerDirectoryItemSecondLine: '{{worker.activityName}}',
    WorkerDirectoryAgentsTabLabel: 'AGENTS',
    WorkerDirectoryQueuesTabLabel: 'QUEUES',
    WorkerDirectoryQueueItemText: '{{queue.name}}',
    WorkerDirectorySearchPlaceholder: 'Search',
    ChatInputDisabledText: 'Conversation ended',
    WorkerCanvasHeader: 'Profile',
    WorkerCanvasDetailsHeader: 'Agent Details',
    WorkerCanvasSkillsHeader: 'Skills',
    WorkerSkillLevelInvalid:
      'Please select a skill level between {{min}} - {{max}}',
    WorkerSkillPleaseSelect: 'Add skill',
    WorkerSkillsNoSkills: 'No skills attributed',
    WorkerSkillsSchemaMismatch: 'Worker skills schema mismatch',
    WorkerSkillsSaved: 'Changes saved successfully',
    WorkerSkillsError: 'Failed to save changes',
    WorkerSkillsReverted: 'Changes reverted',
    ChatWelcomeText: 'Conversation started with customer',
    UiVersionDeprecated: '{{message}}',
    RuntimeLoginLabel: 'Runtime domain',
    RuntimeLoginPlaceholder: 'Your Runtime Domain',
    RuntimeLoginLaunch: 'Launch',
    RuntimeLoginWithTwilio: 'Login with Twilio.',
    RuntimeLoginIsAdmin: 'Flex Admin?',
    RuntimeLoginErrorDomain:
      'Oops! Well, that didn’t work :( Check your <b>domain</b>.',
    RuntimeLoginErrorSso:
      'Oops! Well, that didn’t work :( Check your <b>SSO</b> setup.',
    TransferFailedNotification: 'Agent unavailable',
    TaskCannotBeTransferredNotification: 'Task cannot be transferred',
    SupervisorTaskCanvasHeader: 'TASK DETAILS',
    TaskTabAgentIncomingLabel: 'Incoming',
    TaskTabAgentCallLabel: 'Call',
    TaskTabAgentChatLabel: 'Chat',
    TaskTabAgentInfoLabel: 'Info',
    TaskTabSupervisorOverviewLabel: 'Overview',
    TaskTabSupervisorCallLabel: 'Call',
    TaskTabSupervisorChatLabel: 'Chat',
    TaskTabSupervisorInfoLabel: 'Info',
    MicNotAvailableNotification:
      'Unable to access microphone, please check browser settings.',
    BrowserVoiceDisabledNotification:
      'Call cannot be accepted. Twilio Voice SDK has been disabled.',
    MessageSizeExceeded:
      'The entered character number exceeds the limit - {{currentCharCount}}/{{maxCharCount}}',
    UserControlWorkerSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    UserLoggedOutSuccess: 'You have logged out successfully!',
    CannotChangeOtherWorkerActivity:
      'You cannot change an agent’s activity while they have a pending task/reservation.',
    CallCanvasWorkerOnHold: 'You are on hold',
    CallCanvasUnholdWorker: 'Unhold',
    CallParticipantStatusOnHold: 'On Hold',
    CallParticipantStatusLive: 'Live',
    CallParticipantStatusConnecting: 'Calling...',
    CallParticipantStatusLeft: 'Caller left',
    CallParticipantStatusTransferFailed: 'No Answer',
    CallParticipantStatusKickConfirmation: 'Remove from call?',
    LiveCommsIncomingDirectCallTransfer:
      'Request from {{task.incomingTransferObject.worker.fullName}} (direct)',
    LiveCommsIncomingQueueCallTransfer:
      'Request from {{task.incomingTransferObject.worker.fullName}} ({{task.incomingTransferObject.queue.name}})',
    CallParticipantCustomerName: '{{task.defaultFrom}}',
    MonitoringFailedNotification: 'Monitoring attempt has failed',
    PredefinedChatMessageAuthorName: 'Bot',
    PredefinedChatMessageBody: 'Hi there! How can we help you today?',
    AgentStatusAvailable: 'Available',
    AgentStatusBusy: 'Busy',
    AgentStatusUnavailable: 'Unavailable',
    AgentStatusOffline: 'Offline',
    ActiveTasksTileTitle: 'Active tasks',
    WaitingTasksTileTitle: 'Waiting tasks',
    AgentsByActivityTileTitle: 'Agents',
    LongestWaitTimeTileTitle: 'Longest wait',
    QueuesNoDataHeading: 'Queues',
    QueuesNoDataBodyForAdmin:
      'You have no Queues set up. Please configure your Queues.',
    QueuesNoDataBodyForSupervisor:
      'There are no Queues set up. Please contact your Administrator.',
    QueuesNoDataLinkLabelForAdmin: 'Add Queue',
    PendingReservationsOnLogoutNotification:
      'You cannot logout while you have a pending task/reservation',
    PendingReservationsOnActivityStateChangeNotification:
      'You cannot update your activity while you have a pending task/reservation',
    AcceptTaskTooltip: 'Accept',
    RejectTaskTooltip: 'Reject',
    HangupCallTooltip: 'Hang up',
    LeaveCallTooltip: 'Leave',
    MuteCallTooltip: 'Mute',
    HoldCustomerTooltip: 'Hold Customer',
    UnholdCustomerTooltip: 'Unhold Customer',
    HoldAgentTooltip: 'Hold {{worker.fullName}}',
    UnholdAgentTooltip: 'Unhold {{worker.fullName}}',
    CancelTransferTooltip: 'Cancel Consult',
    KickAgentTooltip: 'Hang up {{worker.fullName}}',
    ColdTransferTooltip: 'Transfer',
    WarmTransferTooltip: 'Consult',
    MonitorCallTooltip: 'Monitor Call',
    LogToFileStartLoggingText:
      '<div><h2>Capture logs</h2><ul><li>When you enable logging, your browser will be refreshed and logs capturing will start.</li><li>Once you are ready to finish - stop logging. All captured logs will be saved to a text file.</li></ul></div>',
    LogToFileStartLoggingLabel: 'Refresh and start',
    LogToFileStopLoggingText:
      "<div><h2>Logging is active</h2><p>If you've repeated your actions and reproduced the issue, stop logging to download the file with captured logs.</p></div>",
    LogToFileStopLoggingLabel: 'Finish and download',
    ChatOrchestrationAddToChatChannelFailed:
      'Failed to add worker to the chat channel.',
    ChatOrchestrationDeactivateChatChannelFailed:
      'Failed to deactivate the chat channel.',
    ChatOrchestrationLeaveChatChannelFailed:
      'Failed to remove worker from the chat channel.',
    TeamsViewFilterAction: 'Filter{{#if filterCount}} ({{filterCount}}){{/if}}',
    TeamsViewClearSearchAction: 'Clear search result',
    TeamsViewClearSearchPlaceholder: 'Search Agents',
    TeamsViewResultsSummaryNoWorkersDisplayed:
      'No agents matched your criteria. Refine results via search or filter.',
    TeamsViewResultsSummaryMaxWorkersDisplayed:
      'Showing maximum number of agents. Refine results via search or ',
    TeamsViewResultsSummaryFilterCTA: 'filter',
    TeamFiltersPanelTitle: 'Filters',
    TeamFiltersPanelSingularLabel: 'Viewing <strong>{{number}}</strong> agent',
    TeamFiltersPanelPluralLabel: 'Viewing <strong>{{number}}</strong> agents',
    TeamFiltersApply: 'Apply',
    TeamFiltersReset: 'Reset',
    InputPlaceHolder: 'Type message',
    TypingIndicator: '{0} is typing ... ',
    Connecting: 'Connecting ...',
    Disconnected: 'Connection lost',
    Read: 'Read',
    MessageSendingDisabled: 'Message sending has been disabled',
    Today: 'TODAY',
    Yesterday: 'YESTERDAY',
    MessageCanvasTrayContent:
      '<h6>Complete</h6><p>This chat is no longer active.</p>',
    MessageCanvasTrayButton: 'START NEW CHAT',
    WelcomeMessage: 'Welcome to customer service',
    NotificationMessage: 'Unable to perform action: {{message}}',
    Save: 'SAVE',
    Reset: 'RESET',
    MessageCharacterCountStatus: '{{currentCharCount}} / {{maxCharCount}}',
    MessageCharacterCountReached:
      'Character count reached - {{currentCharCount}} / {{maxCharCount}}',
    SendMessageTooltip: 'Send Message',
    FieldValidationRequiredField: 'Field required',
    FieldValidationInvalidEmail: 'Please provide a valid email address',
    ChatInputUserNotMemberDisabledText:
      'You are not a participant of this chat',
    FilterItemAny: 'Any',
    FilterItemAmountSelected: '{{amount}} selected',
    FilterItemOnly: '{{item.label}} only',
    TaskLineChatAssigned:
      '{{helper.durationSinceUpdate}} | {{#if helper.chat.typers.length}} typing ... {{else}} {{#if helper.chat.lastMessage}}  {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.body}} {{else}}No messages{{/if}}{{/if}}',
    TaskLineWebChatAssigned:
      "{{#if helper.chat.isCustomerOnline}} {{{icon name='GreenIndicator'}}} {{else}} {{{icon name='GreyIndicator'}}} {{/if}} {{helper.durationSinceUpdate}} | {{#if helper.chat.typers.length}} typing ... {{else}} {{#if helper.chat.lastMessage}}  {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.body}} {{else}}No messages{{/if}}{{/if}}",
  }
}
