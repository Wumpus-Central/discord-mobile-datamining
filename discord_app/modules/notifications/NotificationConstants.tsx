// === Module 4033: AccountNotificationFlags ===

// Module 4033 (AccountNotificationFlags)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/notifications/NotificationConstants.tsx");

export const AccountNotificationFlags = { USE_NEW_NOTIFICATIONS: 16, [16]: "USE_NEW_NOTIFICATIONS", MENTION_ON_ALL_MESSAGES: 32, [32]: "MENTION_ON_ALL_MESSAGES" };
export const NotificationSettingsUpdateType = { GUILD: "guild", CHANNEL: "channel", ACCOUNT: "account", AUTHORIZED_APP_DM: "authorized_app_dm", AUTHORIZED_APP_DM_PUSH_NOTIFICATION: "authorized_app_dm_push_notification" };