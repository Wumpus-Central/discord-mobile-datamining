// discord_app/modules/nuf/native/components/notification/NotificationPermissionConstants.tsx
import set from "../../../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/nuf/native/components/notification/NotificationPermissionConstants.tsx");

export const EventActionType = { SKIP_STEP: "skip_step", ALLOW_TO_REQUEST: "allow_to_request", REQUEST: "request", TO_SETTINGS: "to_settings", REQUEST_PROVISIONAL: "request_provisional", DISMISS: "dismiss" };
export const EventActionLocation = { ALERT: "alert", AUTO_PROMPT: "auto_prompt", NAV: "nav", FOOTER: "footer", CTA: "cta", DM_LIST: "dm_list", MESSAGE_SENT: "message_sent", USER_SETTING: "user_setting", NOTIFICATION_SETTING: "notification_setting", INVITE_ACCEPTED: "invite_accepted", FRIEND_REQUEST_SENT: "friend_request_sent", FRIEND_REQUEST_ACCEPTED: "friend_request_accepted", NOTIFICATION_CENTER: "notification_center", CHANNEL_BANNER: "channel_banner", POST_REACTION: "post_reaction", GUILD_OPEN: "guild_open", CALL_DISCONNECT: "call_disconnect" };
export const NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY = "notification-reactivation-actionsheet-key";
export const NotificationNudgeSurface = { CHANNEL_BANNER: "channel_banner", NOTIFICATION_CENTER_BANNER: "notification_center_banner", POST_REACTION_BANNER: "post_reaction_banner", NOTIFICATION_SETTINGS_PERMISSION_HEADER: "notification_settings_permission_header", GUILD_OPEN_BOTTOM_SHEET: "guild_open_bottom_sheet", CALL_DISCONNECT_BOTTOM_SHEET: "call_disconnect_bottom_sheet" };
export const NotificationNudgeAnalyticsAction = { IMPRESSION: "impression", DISMISS: "dismiss", ACCEPT: "accept" };