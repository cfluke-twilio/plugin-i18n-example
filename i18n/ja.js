export default function () {
  return {
    SetYourStatus: 'ステータスを設定する',
    LogOut: 'ログアウト',
    SigningIn: 'サインイン',
    SessionExpired:
      "セッションの有効期限が切れています。 <a href='#' onClick='window.location.reload()'>もう一度ログインするには、ここをクリックしてください</a>",
    NoTasksTitle: 'ステータス',
    NoTasks: 'アクティブなタスクがありません',
    NoTasksHintNotAvailable:
      'アクティビティの状態を変更して、タスクの受信を開始します。 ',
    NoTasksHintAvailable: 'タスクの受信を開始する準備ができています。 ',
    NoCRMConfigured: 'CRMが設定されていません',
    NoCRMConfiguredAction: '設定方法',
    NoCRMTitle: 'CRMの設定',
    NoCRMHint: '私たちのドキュメントは、あなたが始めるのに役立ちます。 ',
    LoginUsername: 'ユーザー名',
    LoginPassword: 'パスワード',
    LoginLoading: 'ロード中... ',
    LoginWelcome: 'こんにちは、Flexへようこそ！」',
    LoginLogin: 'ログイン',
    LoginContinue: 'とにかく続ける',
    LoginAgain: 'もう一度ログイン',
    LoginLaunch: '起動',
    LoginTitle: 'トワイリオ・フレックス',
    LoginErrorDomain: 'おっと！ ランタイムドメインが正しくありません。 ',
    LoginErrorDomainDetails:
      " <a href='https://www.twilio.com/console/runtime/overview'>ここで</a>ランタイムドメインを見つける",
    LoginErrorSso: 'うーん、シングルサインオンは設定されていません。 ',
    LoginErrorSsoDetails:
      "シングルサインオンの設定方法 <a href='https://www.twilio.com/console/flex/users/single-sign-on'>はこちら</a>",
    LoginErrorPopupBlocked:
      '申し訳ありませんが、ポップアップはブロックされています。 ',
    LoginErrorPopupBlockedDetails:
      "<a href='https://support.google.com/chrome/answer/95472'> ブラウザでポップアップを有効にする方法をご覧ください</a>",
    LoginErrorUntrustedDomain:
      'このドメインでは信頼されたログインが有効になっていません。 ',
    LoginErrorUntrustedDomainDetails:
      "シングルサインオンの設定方法 <a href='https://www.twilio.com/docs/flex/configuring-single-sign-and-identity-provider-integration#how-do-i-login-to-a-self-hosted-domain' target='_blank'>はこちら</a>",
    LoginErrorInvalidCertificate: '無効なSSO設定',
    LoginErrorInvalidCertificateDetails:
      "これは、不正な形式のURLまたは不足している/無効な証明書によって引き起こされる可能性があります。 <br><br><a href='https://www.twilio.com/docs/api/errors/70251' target='_blank'>SSO 設定</a> を再構成して、再試行してください。 ",
    LoginErrorGeneric:
      'おっと！ まあ、それはうまくいかなかった：（あなたの構成をダブルチェックしてください。 ',
    LoginIsAdmin: 'フレックス管理者?」',
    LoginWithTwilio: 'Twilioでログインしてください。 ',
    TaskHeaderLeaveCall: '電話を離れる',
    TaskHeaderEndCall: '切る',
    TaskHeaderWrapup: 'ラップアップ',
    TaskHeaderComplete: '完了',
    TaskHeaderEndChat: 'チャットを終了',
    TaskHeaderStatusPending: '',
    TaskHeaderStatusAccepted: 'ライブ | {{helper.durationSinceUpdate}}',
    TaskHeaderWebChatStatusAccepted:
      "{{#if helper.chat.isCustomerOnline}} {{{icon name='GreenIndicator'}}} {{else}} {{{icon name='GreyIndicator'}}} {{/if}} ライブ | {{helper.durationSinceUpdate}}",
    TaskHeaderGroupCallAccepted:
      "ライブ | {{helper.durationSinceUpdate}} | {{{icon name='Participant'}}} {{task.conference.liveParticipantCount}}",
    TaskHeaderStatusWrapup: 'ラップアップ | {{helper.durationSinceUpdate}}',
    TaskHeaderStatusCompleted: '完了 | {{helper.durationSinceUpdate}}',
    SideNavTaskView: 'エージェントデスクトップ',
    SideNavTeamsView: 'チーム',
    SideNavAgentDashboard: 'エージェントダッシュボード',
    SideNavSupervisorInspections: 'スーパーバイザ検査',
    SideNavSupervisorDashboard: 'スーパーバイザダッシュボード',
    SideNavSupervisorReports: 'スーパーバイザレポート',
    SideNavSettings: '設定',
    SideNavQueuesStatsView: 'キュー統計',
    TaskHeaderLine: '{{task.defaultFrom}}',
    TaskLineCallIncomingTitle: '着信コール',
    TaskLineCallTransferTitle: '転送リクエスト',
    TaskLineCallEndedTitle: 'コールが終了しました',
    TaskLineQueue: 'キュー:{{task.キュー名}}',
    TaskLineCallDuration: '{{helper.durationSinceUpdate}}',
    TaskLineCallReserved: 'キュー {{task.queueName}} からの着信コール',
    TaskLineCallAssigned: 'ライブ | {{helper.durationSinceUpdate}}',
    TaskLineCallWrapup: 'ラップアップ | {{helper.durationSinceUpdate}}',
    TaskLineGroupCallAssigned:
      "ライブ | {{helper.durationSinceUpdate}} | {{{icon name='Participant'}}} {{task.conference.liveParticipantCount}",
    TaskLineCallTransferWorker:
      '{{task.incomingTransferObject.worker.fullName} からの要求} (直接)',
    TaskLineCallTransferWorkerDetail:
      'task.incomingTransferObject.worker.fullName}} (直接)<br />キュー:{{task.queueName}}',
    TaskLineCallTransferQueue:
      '{{task.incomingTransferObject.worker.fullName}} からの要求 ({{task.incomingTransferObject.queue.name}})',
    TaskLineCallTransferQueueDetail:
      '送信元:{{task.incomingTransferObject.worker.fullName}}<br />キュー:{{task.queueName}}',
    TaskLineChatReserved: '着信チャットリクエスト',
    TaskLineChatLineReserved: '着信回線要求',
    TaskLineChatMessengerReserved: '受信メッセンジャー要求',
    TaskLineChatWhatsAppReserved: '着信のWhatsAppリクエスト',
    TaskLineSmsReserved: '着信SMSリクエスト',
    TaskLineTitle: '',
    TaskReserved: '予約済み',
    TaskAssigned: '割り当て済み',
    TaskWrapup: 'ラップアップ',
    TaskCompleted: '完了',
    TaskCanceled: 'キャンセルされました',
    TaskFilterAll: 'すべてのタスク',
    TaskFilterActive: 'アクティブなタスク',
    TaskFilterWrapping: 'ラップアップ中のタスク',
    ColumnHeaderAgent: 'エージェント',
    ColumnHeaderCalls: 'コール',
    ColumnHeaderTasks: 'その他のタスク',
    SupervisorUserCardFirstLine: '{{worker.fullName}}',
    SupervisorUserCardSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    SupervisorTaskViewContentHeader:
      '{{worker.fullName}}, {{task.defaultFrom}}',
    SupervisorTaskHeaderLine: '{{task.defaultFrom}}',
    SupervisorTaskLive: '{{helper.durationSinceUpdateShort}}',
    SupervisorTaskGroupCall:
      '{{helper.durationSinceUpdateShort}} | ({{task.conference.liveParticipantCount}})',
    SupervisorTaskWrapUp: 'ラップアップ | {{helper.durationSinceUpdateShort}}',
    SupervisorTaskCompleted:
      '完了しました | {{{helper.durationSinceUpdateShort}}',
    SupervisorTaskCardHeader: '{{task.defaultFrom}}',
    LiveCommsMonitoringMessage:
      '{{task.defaultFrom}} と {{worker.fullName}} の呼び出しを聞いています',
    LiveCommsMonitoringMessageMoreWorkers:
      '{{task.defaultFrom}} と {{workers.length}}} のワーカーとの呼び出しを聞いています',
    LiveCommsMonitoringMessageNoWorkers:
      '{{task.defaultFrom}} の呼び出しを聞いています',
    LiveCommsOngoingCallMessage: '{{task.defaultFrom}} との通話中です',
    LiveCommsIncomingCallMessage: '{{task.defaultFrom}} からの着信コール',
    LiveCommsBarAccept: '受け入れる',
    LiveCommsBarDeny: '拒否',
    LiveCommsBarReturnToCall: '返す',
    LiveCommsBarStopListening: 'リスニングを停止',
    LiveCommsBarHold: '保留',
    LiveCommsBarUnHold: '保留解除',
    WorkerDirectoryTitle: '転送',
    WorkerDirectoryItemFirstLine: '{{worker.fullName}}',
    WorkerDirectoryItemSecondLine: '{{worker.activityName}}',
    WorkerDirectoryAgentsTabLabel: 'エージェント',
    WorkerDirectoryQueuesTabLabel: 'キュー',
    WorkerDirectoryQueueItemText: '{{queue.name}}',
    WorkerDirectorySearchPlaceholder: '検索',
    ChatInputDisabledText: '会話を終了',
    WorkerCanvasHeader: 'プロフィール',
    WorkerCanvasDetailsHeader: 'エージェントの詳細',
    WorkerCanvasSkillsHeader: 'スキル',
    WorkerSkillLevelInvalid:
      '{{{min}} - {{max}} の間のスキルレベルを選択してください',
    WorkerSkillPleaseSelect: 'スキルを追加',
    WorkerSkillsNoSkills: '何のスキルが帰属していません',
    WorkerSkillsSchemaMismatch: '作業者のスキルのスキーマの不一致',
    WorkerSkillsSaved: '変更が正常に保存されました',
    WorkerSkillsError: '変更を保存できませんでした',
    WorkerSkillsReverted: '変更が元に戻されました',
    ChatWelcomeText: 'お客様との会話',
    UiVersionDeprecated: '{{メッセージ}}',
    RuntimeLoginLabel: 'ランタイム・ドメイン',
    RuntimeLoginPlaceholder: 'ランタイムドメイン',
    RuntimeLoginLaunch: '起動',
    RuntimeLoginWithTwilio: 'Twilioでログインしてください。 ',
    RuntimeLoginIsAdmin: 'フレックス管理者?」',
    RuntimeLoginErrorDomain:
      'おっと！ まあ、それはうまくいかなかった：（あなたの <b>ドメイン</b>を確認してください。 ',
    RuntimeLoginErrorSso:
      'おっと！ まあ、それはうまくいかなかった：（あなたの <b>SSO</b> の設定を確認してください。 ',
    TransferFailedNotification: 'エージェントが利用できません',
    TaskCannotBeTransferredNotification: 'タスクを転送できません',
    SupervisorTaskCanvasHeader: 'タスクの詳細',
    TaskTabAgentIncomingLabel: '着信',
    TaskTabAgentCallLabel: 'コール',
    TaskTabAgentChatLabel: 'チャット',
    TaskTabAgentInfoLabel: '情報',
    TaskTabSupervisorOverviewLabel: '概要',
    TaskTabSupervisorCallLabel: 'コール',
    TaskTabSupervisorChatLabel: 'チャット',
    TaskTabSupervisorInfoLabel: '情報',
    MicNotAvailableNotification:
      'マイクにアクセスできません。ブラウザの設定を確認してください。 ',
    BrowserVoiceDisabledNotification:
      '電話は受け付けられません。 Twilio 音声SDKが無効になりました。 ',
    MessageSizeExceeded:
      '入力された文字数が制限を超えています-{{現在の文字数}}/{{最大文字数}}',
    UserControlWorkerSecondLine:
      '{{worker.activityName}} | {{worker.activityDuration}}',
    UserLoggedOutSuccess: 'あなたは正常にログアウトしました！」',
    CannotChangeOtherWorkerActivity:
      '保留中のタスク/予約があるエージェントのアクティビティは変更できません。 ',
    CallCanvasWorkerOnHold: '保留中',
    CallCanvasUnholdWorker: '保留解除',
    CallParticipantStatusOnHold: '保留中',
    CallParticipantStatusLive: 'ライブ',
    CallParticipantStatusConnecting: '呼び出し中... ',
    CallParticipantStatusLeft: '発信者が左',
    CallParticipantStatusTransferFailed: '無答え',
    CallParticipantStatusKickConfirmation: '通話から削除しますか？」',
    LiveCommsIncomingDirectCallTransfer:
      '{{task.incomingTransferObject.worker.fullName} からの要求} (直接)',
    LiveCommsIncomingQueueCallTransfer:
      '{{task.incomingTransferObject.worker.fullName}} からの要求 ({{task.incomingTransferObject.queue.name}})',
    CallParticipantCustomerName: '{{task.defaultFrom}}',
    MonitoringFailedNotification: '監視の試行に失敗しました',
    PredefinedChatMessageAuthorName: 'ボット',
    PredefinedChatMessageBody:
      'こんにちは！ 今日は何をお手伝いできるでしょうか？」',
    AgentStatusAvailable: '利用可能',
    AgentStatusBusy: 'ビジー',
    AgentStatusUnavailable: '利用不可',
    AgentStatusOffline: 'オフライン',
    ActiveTasksTileTitle: 'アクティブなタスク',
    WaitingTasksTileTitle: '待機中のタスク',
    AgentsByActivityTileTitle: 'エージェント',
    LongestWaitTimeTileTitle: '最長の待ち時間',
    QueuesNoDataHeading: 'キュー',
    QueuesNoDataBodyForAdmin:
      'キューが設定されていません。 キューを設定してください。 ',
    QueuesNoDataBodyForSupervisor:
      'キューが設定されていません。 管理者に連絡してください。 ',
    QueuesNoDataLinkLabelForAdmin: 'キューの追加',
    PendingReservationsOnLogoutNotification:
      '保留中のタスク/予約がある間はログアウトできません',
    PendingReservationsOnActivityStateChangeNotification:
      '保留中のタスク/予約がある間は、アクティビティを更新できません',
    AcceptTaskTooltip: '受け入れる',
    RejectTaskTooltip: '却下',
    HangupCallTooltip: 'ハングアップ',
    LeaveCallTooltip: '退席する',
    MuteCallTooltip: 'ミュート',
    HoldCustomerTooltip: '顧客を保留',
    UnholdCustomerTooltip: 'お客様の保留解除',
    HoldAgentTooltip: '{{worker.fullName}} を保持',
    UnholdAgentTooltip: '{{worker.fullName}} の保留を解除します',
    CancelTransferTooltip: 'キャンセル相談',
    KickAgentTooltip: '{{worker.fullName}} をハングアップする',
    ColdTransferTooltip: '転送',
    WarmTransferTooltip: '相談',
    MonitorCallTooltip: '監視コール',
    LogToFileStartLoggingText:
      '<div><h2>ログのキャプチャログ</h2><ul><li>を有効にすると、ブラウザが更新され、ログのキャプチャが開始されます。 </li><li>完了の準備ができたら、ログを停止します。 キャプチャされたすべてのログは、テキストファイルに保存されます。</li></ul></div>',
    LogToFileStartLoggingLabel: 'リフレッシュして開始',
    LogToFileStopLoggingText:
      '<div><h2>ログはアクティブです</h2>。<p>操作を繰り返して問題を再現した場合は、ログを停止して、キャプチャされたログを含むファイルをダウンロードしてください。 </p></div>',
    LogToFileStopLoggingLabel: '終了してダウンロード',
    ChatOrchestrationAddToChatChannelFailed:
      'チャットチャンネルにワーカーを追加できませんでした。 ',
    ChatOrchestrationDeactivateChatChannelFailed:
      'チャットチャンネルの無効化に失敗しました。 ',
    ChatOrchestrationLeaveChatChannelFailed:
      'チャットチャンネルからワーカーを削除できませんでした。 ',
    TeamsViewFilterAction:
      'フィルタ {{#if filterCount}} ({{filterCount}}){{/if}}',
    TeamsViewClearSearchAction: '検索結果をクリア',
    TeamsViewClearSearchPlaceholder: '検索エージェント',
    TeamsViewResultsSummaryNoWorkersDisplayed:
      'あなたの基準に一致するエージェントはありません。 検索またはフィルタで結果を絞り込みます。 ',
    TeamsViewResultsSummaryMaxWorkersDisplayed:
      'エージェントの最大数を表示しています。 検索または',
    TeamsViewResultsSummaryFilterCTA: 'フィルタ',
    TeamFiltersPanelTitle: 'フィルタ',
    TeamFiltersPanelSingularLabel:
      ' <strong>{{number}}</strong> エージェントを表示中',
    TeamFiltersPanelPluralLabel:
      ' <strong>{{number}} 件の</strong> エージェントを表示中',
    TeamFiltersApply: '適用',
    TeamFiltersReset: 'リセット',
    InputPlaceHolder: 'メッセージを入力',
    TypingIndicator: '{0} は入力中です... ',
    Connecting: '接続中... ',
    Disconnected: '接続が失われました',
    Read: '読み取り',
    MessageSendingDisabled: 'メッセージの送信が無効になりました',
    Today: '今日',
    Yesterday: '昨日',
    MessageCanvasTrayContent:
      '<h6>完了</h6><p>このチャットはアクティブではありません。 </p>',
    MessageCanvasTrayButton: '新しいチャットを開始',
    WelcomeMessage: 'カスタマーサービスへようこそ',
    NotificationMessage: 'アクションを実行できません:{{message}}',
    Save: '保存',
    Reset: 'リセット',
    MessageCharacterCountStatus: '{{currentCharCount}} / {{maxCharCount}}',
    MessageCharacterCountReached:
      '文字数に達しました-{{currentCharCount}} / {{maxCharCount}}',
    SendMessageTooltip: 'メッセージの送信',
    FieldValidationRequiredField: '必須フィールド',
    FieldValidationInvalidEmail: '有効なメールアドレスを入力してください',
    ChatInputUserNotMemberDisabledText:
      'あなたはこのチャットの参加者ではありません',
    FilterItemAny: '任意',
    FilterItemAmountSelected: '{{amount}}} が選択されました',
    FilterItemOnly: '{{item.label}} のみ',
    TaskLineChatAssigned:
      '{{helper.durationSinceUpdate}} | {{#if helper.chat.typers.length}} と入力して ... {{else}} {{#if helper.chat.lastMessage}}  {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.body}} {{else}}メッセージなし{{/if}}{{/if}}',
    TaskLineWebChatAssigned:
      "{{#if helper.chat.isCustomerOnline}} {{{icon name='GreenIndicator'}}} {{else}} {{{icon name='GreyIndicator'}}} {{/if}} {{helper.durationSinceUpdate}} | {{#if helper.chat.typers.length}} と入力しています... {{else}} {{#if helper.chat.lastMessage}}  {{helper.chat.lastMessage.authorName}}: {{helper.chat.lastMessage.body}} {{else}}メッセージなし{{/if}}{{/if}}",
  }
}
