// discord_app/modules/app_startup/ManagerRegistry.native.tsx
import set from "populateMap";
import set from "handleMessageCreate";
import { prototype } from "../accept_invite/native/AcceptInviteManager.tsx";
import { handlePostConnectionOpen } from "../age_gate/native/AgeGateManager.tsx";
import { updateApiRequestConfig } from "../api_request_config/native/ApiRequestConfigManager.tsx";
import { AccountLinkManagerNative } from "../application_account_linking/native/AccountLinkManagerNative.tsx";
import { syncYYTextReplacementExperiment } from "../chat/native/NativeExperimentBridgeManager.tsx";
import { showClipsToast } from "../clips/native/ClipsManager.tsx";
import { getBackoffJitter } from "../content_inventory/ContentInventoryManager.tsx";
import { setDifference } from "../errors/av_errors/AVErrorManager.tsx";
import { fetchForwardReferencedGuilds } from "../forwarding/ForwardGuildBreadcrumbManager.tsx";
import { prototype } from "../global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx";
import { platformShowStreamFull } from "../go_live/native/ApplicationStreamingManager.tsx";
import { experimentStoreUpdateHandler } from "../libdiscore/LibdiscoreExperimentManager.tsx";
import { makeLogLine } from "../local_message_caching/LocalMessageCacheStatsManager.tsx";
import { handlePushedModal } from "../main_tabs_v2/native/modal/DeprecatedModalManager.tsx";
import { resolveMediaPostEmbeds } from "../media_channel/MediaPostEmbedManager.tsx";
import { prototype } from "../media_engine/native/VoiceProcessingErrorManager.tsx";
import { handleMessageSendFailure } from "../messages/native/MessageSendFailureNotificationManager.tsx";
import { handleChannelCreate } from "../midjourney_onboarding/MidjourneyOnboardingManager.tsx";
import { indexingEnabled } from "../native_intents/NativeIntentsManager.tsx";
import { _reportSessionMeaningfullyOnline } from "../notifications/friend_online/FriendOnlineTimer.tsx";
import { getDeliveredNotifications } from "../notifications/native/NativeNotificationsManager.tsx";
import { scheduleUpcomingWarning } from "../parent_tools/RestrictedHoursManager.tsx";
import { handleReferralMessages } from "../premium/native/referrals/ReferralMessageManager.tsx";
import { _fetch } from "../quests/managers/QuestFetchManager.tsx";
import { log } from "../quests/managers/QuestMobileEmbedVisibilityManager.native.tsx";
import { isQuestProgressable } from "../quests/managers/QuestProgressManager.tsx";
import { updateSocialRpcNetworkConfig } from "../rpc/native/SocialRpcNetworkConfigManager.tsx";
import { handleConnectionOpenSupplemental } from "../safety_flows/SafetyFlowsManager.tsx";
import { fadeIn } from "../self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx";
import { isLikelyControl } from "../sentry/SentryExperimentFeatureFlagManager.tsx";
import { handleUserApplicationIdentityGatewayEvent } from "../user_application_identity/UserApplicationIdentityManager.tsx";
import { prototype } from "../user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx";
import { prototype } from "../voice_panel/VoicePanelManager.native.tsx";
import { handlePasskeyUpsellShow } from "../webauthn/native/PasskeyUpsellManager.tsx";
import { handleAuthenticatorDelete } from "../webauthn/WebAuthnSignalManager.tsx";

set = { AcceptInviteManager: obj, AgeGateManager: obj, AgeVerificationManager: obj1, AppAnalyticsManager: obj2, AppIconPremiumManager: obj3, AppStoreOverlayTelemetryManager: obj4, ATTManager: obj5, AudioSessionModeManager: obj6, AudioSettingsManager: obj7, BackgroundSyncManager: obj8, BlockedDomainManager: obj9, BugReportManager: obj10, CallIdleManager: obj11, CacheManager: obj12, ChangelogManager: obj13, ChannelCallManager: obj14, ChannelResyncManager: obj15, ChannelSafetyWarningsManager: obj16, CommonTriggerPointManager: obj17, CommunicationDisabledManager: obj18, ContactSyncLifecycleManager: obj19, CustomStatusManager: obj20, DiceRollLifecycleManager: obj21, DmSettingsUpsellManager: obj22, TopEmojisDataManager: obj23, EntityVersionsManager: obj24, ExplicitMediaManager: obj25, KvBackgroundManager: obj26, FeedbackManager: obj27, ForumManager: obj28, ForumGuidelinesManager: obj29, ForumPostAnalyticsManager: obj30, FramesNativeManager: obj31, FrecencyUserSettingsManager: obj32, GameConsoleManager: obj33, GuildOnboardingHomeManager: obj34, GuildOnboardingManager: obj35, GuildPowerupsManager: obj36, GuildRoomManager: obj37, GuildRoomSpatialAudioManager: obj38, GuildScheduledEventManager: obj39, GuildVerificationManager: obj40, MemberVerificationApplicationManager: obj41, MessageSessionMetadataManager: obj42, HolidayEventsManager: obj43, IAPManager: obj44, InteractionModalManager: obj45, IOSUserIdentifiersManager: obj46, DiskUsageManager: obj47, InstantInviteManager: obj48, JankStatsManager: obj49, JSWatchdogManager: obj50, LoginRequiredActionManager: obj51, MessageCodedLinkManager: obj52, MessageManager: obj53, MessageQueueManager: obj54, MessagePreviewManager: obj55, MetricKitManager: obj56, MultiAccountManagerNative: obj57, NativeOnDemandResourceManager: obj58, NewUserManager: obj59, RedesignNewUserManager: obj60, NotificationPermissionManager: obj61, NUFChannelsManager: obj62, ParentalConsentManager: obj63, ParentalConsentWarningManager: obj64, ParticipantFocusManager: obj65, MobileGiftIntentCardManager: obj66, PromotionsManager: obj67, ProximitySensorManager: obj68, PushNotificationCacheManager: obj69, RelationshipManager: obj70, RTCLatencyTestManager: obj71, SavedMessagesManager: obj72, MessageRemindersNotificationManager: obj73, SearchTokensManager: obj74, SelectedChannelManager: obj75, SelfPresenceStoreManager: obj76, SettingTreeManagerLifecycleManager: obj77, SharedSpacesWarningManager: obj78, StageBoostUpsellManager: obj79, StageChannelRequestToSpeakMessageManager: obj80, StageMusicManager: obj81, StaffMemberPreloaderManager: obj82, SubscriptionManager: obj83, TelecomManager: obj84, ThreadManager: obj85, UrgentSystemDMManagerBase: obj86, FavoriteManager: obj87, UserGuildSettingsManager: obj88, UserSearchManager: obj89, UserSettingsManager: obj90, UserOfferManager: obj91, MobileGameCommunitiesManager: obj92, VideoBackgroundManager: obj93, VideoGuardBannerManager: obj94, VoiceChannelSettingsManager: obj95, VoicePermissionManager: obj96, VoiceProcessingErrorManager: set, DeprecatedModalManager: set, VoicePanelManager: set, MediaPostEmbedManager: set, ClipsManager: set, MidjourneyOnboardingManager: set, NativeNotificationsManager: set, FriendOnlineTimerManager: set, InappropriateConversationsManager: set, ContentInventoryManager: set, QuestFetchManager: set, QuestMobileEmbedVisibilityManager: set, MessageSendFailureNotificationManager: set, NativeExperimentBridgeManager: set, SocialRpcNetworkConfigManager: set, ApiRequestConfigManager: set, UserSettingsNativeBridgeManager: set, ForwardGuildBreadcrumbManager: set, PasskeyUpsellManager: set, WebAuthnSignalManager: set, GlobalDiscoveryServersFeaturedSearchManager: set, ReferralMessageManager: set, AVErrorManager: set, ApplicationStreamingManager: set, LibdiscoreExperimentManager: set, NativeIntentsManager: set, SafetyFlowsManager: set, UserApplicationIdentityManager: set, LocalMessageCacheStatsManager: set, RestrictedHoursManager: set, SentryExperimentFeatureFlagManager: set, QuestProgressManager: set, AccountLinkManagerNative: set };
obj = {
  actions: ["DISPLAYED_INVITE_SHOW", "DISPLAYED_INVITE_CLEAR", "DEFERRED_INVITE_SHOW", "REGISTER_SUCCESS"],
  inlineRequire() {
    return prototype.default;
  }
};
obj = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "AGE_GATE_MODAL_OPEN", "AGE_GATE_MODAL_CLOSE", "GUILD_UPDATE"],
  inlineRequire() {
    return handlePostConnectionOpen.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR"],
  inlineRequire() {
    return prototype.default;
  }
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "CREATE_INVITE_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "EMAIL_VERIFICATION_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE", "GUILD_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "CREATE_INVITE_MODAL_OPEN"],
  inlineRequire() {
    return handlePushedModal.default;
  }
};
set = {
  actions: ["VOICE_CHANNEL_SELECT", "RTC_CONNECTION_STATE"],
  inlineRequire() {
    return prototype.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "LOAD_THREADS_SUCCESS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_FORUM_POSTS"],
  inlineRequire() {
    return resolveMediaPostEmbeds.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "RTC_CONNECTION_USERS_MERGED", "CLIPS_ALLOW_VOICE_RECORDING_UPDATE", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "STREAM_DELETE", "STREAM_CLOSE", "RUNNING_GAMES_CHANGE", "RUNNING_GAME_TOGGLE_DETECTION", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO"],
  inlineRequire() {
    return showClipsToast.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CHANNEL_CREATE"],
  inlineRequire() {
    return handleChannelCreate.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_ACK", "CHANNEL_SELECT", "POST_CONNECTION_OPEN", "EXPERIMENT_OVERRIDE_BUCKET", "EXPERIMENTS_FETCH_SUCCESS", "APP_STATE_UPDATE"],
  inlineRequire() {
    return getDeliveredNotifications.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "CONNECTION_INTERRUPTED", "SELF_PRESENCE_STORE_UPDATE"],
  inlineRequire() {
    return _reportSessionMeaningfullyOnline.default;
  },
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
  inlineRequire() {
    return fadeIn.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "WINDOW_FOCUS", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "CONTENT_INVENTORY_MANUAL_REFRESH", "CONTENT_INVENTORY_INBOX_STALE", "SPOTIFY_NEW_TRACK", "GAME_PROFILE_OPEN"],
  inlineRequire() {
    return getBackoffJitter.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_FETCH_CURRENT_QUESTS_BEGIN", "POST_CONNECTION_OPEN", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "USER_SETTINGS_PROTO_UPDATE", "START_SESSION", "LOGOUT"],
  inlineRequire() {
    return _fetch.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED"],
  inlineRequire() {
    return log.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_CREATE", "MESSAGE_SEND_FAILED"],
  inlineRequire() {
    return handleMessageSendFailure.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["APP_STATE_UPDATE", "POST_CONNECTION_OPEN"],
  inlineRequire() {
    return syncYYTextReplacementExperiment.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return updateSocialRpcNetworkConfig.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "APP_STATE_UPDATE"],
  inlineRequire() {
    return updateApiRequestConfig.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE"],
  inlineRequire() {
    return prototype.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return fetchForwardReferencedGuilds.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "LOGIN_SUCCESS", "LOGIN_RESET", "LOGOUT"],
  inlineRequire() {
    return handlePasskeyUpsellShow.default;
  },
  neverLoadBeforeConnectionOpen: true,
  hasStoreChangeListeners: true
};
set = {
  actions: ["AUTHENTICATOR_DELETE", "CURRENT_USER_UPDATE", "MFA_WEBAUTHN_CREDENTIALS_LOADED"],
  inlineRequire() {
    return handleAuthenticatorDelete.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return prototype.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return handleReferralMessages.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MEDIA_ENGINE_SET_AUDIO_ENABLED", "AUDIO_INPUT_DETECTED", "AUDIO_SET_DISPLAY_SILENCE_WARNING", "CERTIFIED_DEVICES_SET", "AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_OUTPUT_DEVICE", "MEDIA_ENGINE_DEVICES", "RTC_CONNECTION_STATE", "VOICE_STATE_UPDATES", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "MEDIA_ENGINE_SOUNDSHARE_FAILED", "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", "MEDIA_ENGINE_VIDEO_FILTER_ERROR", "MEDIA_ENGINE_VIDEO_STATE_CHANGED", "NATIVE_SCREEN_SHARE_PICKER_UPDATE", "NATIVE_SCREEN_SHARE_PICKER_ERROR", "MEDIA_SESSION_JOINED", "RTC_CONNECTION_UPDATE_ID", "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", "REPORT_AV_ERROR", "VIDEO_STREAM_READY_TIMEOUT", "CLEAR_VIDEO_STREAM_READY_TIMEOUT", "RTC_CONNECTION_VIDEO", "STREAM_CLOSE"],
  inlineRequire() {
    return setDifference.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["STREAM_WATCH", "STREAM_START", "STREAM_CREATE", "STREAM_UPDATE", "STREAM_DELETE", "STREAM_CLOSE", "CALL_UPDATE", "CHANNEL_UPDATES", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES", "CONNECTION_CLOSED", "LOGOUT"],
  inlineRequire() {
    return platformShowStreamFull.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return experimentStoreUpdateHandler.default;
  },
  hasStoreChangeListeners: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "GUILD_CREATE", "GUILD_UPDATE", "GUILD_DELETE", "LOGOUT", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE", "RELATIONSHIP_UPDATE", "THREAD_CREATE", "THREAD_DELETE", "THREAD_UPDATE", "USER_UPDATE"],
  inlineRequire() {
    return indexingEnabled.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "SAFETY_FLOWS_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE"],
  inlineRequire() {
    return handleConnectionOpenSupplemental.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["USER_APPLICATION_IDENTITY_UPDATE", "USER_APPLICATION_IDENTITY_REMOVE"],
  inlineRequire() {
    return handleUserApplicationIdentityGatewayEvent.default;
  }
};
set = {
  actions: ["APP_STATE_UPDATE"],
  inlineRequire() {
    return makeLogLine.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CURRENT_USER_UPDATE", "LOGOUT", "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER"],
  inlineRequire() {
    return scheduleUpcomingWarning.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return isLikelyControl.default;
  },
  hasStoreChangeListeners: true,
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V2", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", "FRAME_LAUNCH", "FRAME_STOP", "EMBEDDED_ACTIVITY_UPDATE_V2", "QUESTS_PREVIEW_UPDATE_SUCCESS", "QUEST_APPLICATION_START_TIMER"],
  inlineRequire() {
    return isQuestProgressable.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["ACCOUNT_LINK_AUTHORIZATION_COMPLETED", "OAUTH2_TOKEN_CREATE", "USER_AUTHORIZED_APPS_UPDATE", "APP_STATE_UPDATE"],
  inlineRequire() {
    return AccountLinkManagerNative.default;
  },
  loadRightBeforeConnectionOpen: true
};
const populateMap = set.initialize(set);
const result = set.fileFinishedImporting("modules/app_startup/ManagerRegistry.native.tsx");

export default set;