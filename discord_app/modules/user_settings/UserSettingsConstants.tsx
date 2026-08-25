// discord_app/modules/user_settings/UserSettingsConstants.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/user_settings/UserSettingsConstants.tsx");

export const MAX_FAVORITES = 250;
export const MAX_FAVORITE_GIFS_SIZE = 762880;
export const MuteUntilSeconds = { MINUTES_15: 900, [900]: "MINUTES_15", HOURS_1: 3600, [3600]: "HOURS_1", HOURS_3: 10800, [10800]: "HOURS_3", HOURS_8: 28800, [28800]: "HOURS_8", HOURS_24: 86400, [86400]: "HOURS_24", ALWAYS: -1, [-1]: "ALWAYS" };
export const SettingsOverrideReasonKeys = { REDUCED_MOTION: "REDUCED_MOTION", REDUCED_MOTION_STICKERS: "REDUCED_MOTION_STICKERS" };
export const ListDensityMode = { AUTO: "auto", COMPACT: "compact", COZY: "cozy" };
export const FontScales = [0.75, 0.875, 0.9375, 1, 1.125, 1.25, 1.5, 1.75, 2];
export const ROLE_SUBSCRIPTION_SUBSECTION = "ROLE_SUBSCRIPTIONS";
export const APPLICATION_SUBSCRIPTION_SUBSECTION = "APPLICATION_SUBSCRIPTION_SUBSECTION";
export const ProfileCustomizationSubsection = { USER_PROFILE: "user_profile", GUILD: "guild" };
export const ProfileCustomizationScrollPositions = { TRY_IT_OUT: "try_it_out", GUILD_TAG: "guild_tag" };
export const UserSettingsTypes = { PRELOADED_USER_SETTINGS: 1, [1]: "PRELOADED_USER_SETTINGS", FRECENCY_AND_FAVORITES_SETTINGS: 2, [2]: "FRECENCY_AND_FAVORITES_SETTINGS", TEST_SETTINGS: 3, [3]: "TEST_SETTINGS" };
export const PrivacySettingSurfaces = { USER_SETTINGS_PRIVACY_SAFETY: "user_settings_privacy_safety", USER_SETTINGS_ACTIVITY_PRIVACY: "user_settings_activity_privacy", SERVER_PRIVACY_MODAL: "server_privacy_modal" };
export const UserSettingsDelay = { INFREQUENT_USER_ACTION: 0, [0]: "INFREQUENT_USER_ACTION", FREQUENT_USER_ACTION: 10, [10]: "FREQUENT_USER_ACTION", SLOW_USER_ACTION: 20, [20]: "SLOW_USER_ACTION", AUTOMATED: 30, [30]: "AUTOMATED", DAILY: 86400, [86400]: "DAILY" };
export const createEmptyEditInfo = function createEmptyEditInfo() {
  const obj = { protoToSave: "Array", timeout: "ct", timeoutDelay: Number.MIN_SAFE_INTEGER, rateLimited: null, cleanupFuncs: false, errorCallbacks: false, loaded: false, loading: "accessibilityRole", triggeredMigrations: "bol", offlineEditDataVersion: "kiss_woman_man_tone4" };
  obj[4] = [];
  obj[5] = [];
  return obj;
};
export const UserSettingsPath = { ACCOUNT: "account", ACCOUNT_STANDING: "account-standing", ACCOUNT_ACCOUNT_STANDING: "account/account-standing", PROFILE_CUSTOMIZATION: "profile-customization", CONTENT_AND_SOCIAL: "content-and-social", CONNECTED_GAMES: "connected-games", CONTENT_AND_SOCIAL_CONNECTED_GAMES: "content-and-social/connected-games", DATA_AND_PRIVACY: "data-and-privacy", PRIVACY_AND_SAFETY: "privacy-and-safety", FAMILY_CENTER: "family-center", SESSIONS: "sessions", AUTHORIZED_APPS: "authorized-apps", CONNECTIONS: "connections", CLIPS: "clips", PREMIUM: "premium", GUILD_BOOSTING: "guild-boosting", SUBSCRIPTIONS: "subscriptions", SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS: "subscriptions/role-subscriptions", INVENTORY: "inventory", BILLING: "billing", APPEARANCE: "appearance", ACCESSIBILITY: "accessibility", VOICE: "voice", POGGERMODE: "poggermode", TEXT: "text", NOTIFICATIONS: "notifications", EMAILS: "emails", NOTIFICATIONS_EMAILS: "notifications/emails", KEYBINDS: "keybinds", SYSTEM: "system", LANGUAGE: "language", WINDOWS: "windows", LINUX: "linux", STREAMER_MODE: "streamer-mode", ADVANCED: "advanced", ACTIVITY_PRIVACY: "activity-privacy", REGISTERED_GAMES: "registered-games", OVERLAY: "overlay", EXPERIMENTS: "experiments", DEVELOPER_OPTIONS: "developer-options" };
export const ChangeEmailSteps = { CONFIRM_START: 0, [0]: "CONFIRM_START", CONFIRM_CODE: 1, [1]: "CONFIRM_CODE", CHANGE_EMAIL_REASONS: 2, [2]: "CHANGE_EMAIL_REASONS", CHANGE_EMAIL_WARNING: 3, [3]: "CHANGE_EMAIL_WARNING", EMAIL_AND_PASSWORD: 4, [4]: "EMAIL_AND_PASSWORD", COMPLETE: 5, [5]: "COMPLETE" };
export const ChannelNotificationSettingsFlags = { NEW_FORUM_THREADS_ON: 16384, NEW_FORUM_THREADS_OFF: 8192, OPT_IN_ENABLED: 4096, FAVORITED: 2048, UNREADS_ALL_MESSAGES: 1024, UNREADS_ONLY_MENTIONS: 512 };
export const GuildNotificationSettingsFlags = { OPT_IN_CHANNELS_ON: 16384, OPT_IN_CHANNELS_OFF: 8192, UNREADS_ONLY_MENTIONS: 4096, UNREADS_ALL_MESSAGES: 2048 };
export const ProtoAudioSettingsContextTypes = { USER: "user", STREAM: "stream" };