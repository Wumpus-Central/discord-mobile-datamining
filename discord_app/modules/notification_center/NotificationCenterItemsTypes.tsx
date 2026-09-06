// === Module 7640: NotificationCenterScenes ===

// Module 7640 (NotificationCenterScenes)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/notification_center/NotificationCenterItemsTypes.tsx");

export const NotificationCenterScenes = { LANDING: "notification_center_landing" };
export const ItemEnum = { UPDATE_PROFILE: 0, [0]: "UPDATE_PROFILE", FIND_FRIENDS: 1, [1]: "FIND_FRIENDS", ADD_FRIEND: 2, [2]: "ADD_FRIEND", FIRST_MESSAGE: 3, [3]: "FIRST_MESSAGE" };
export const NotificationCenterActionTypes = { MARK_ALL_READ: "mark_all_read", CLICKED: "clicked", FRIEND_REQUESTS_BUTTON_CLICK: "friend_requests_button_click", ACTION_BUTTON: "action_button" };
export const NotificationCenterTabs = { ForYou: "ForYou", Mentions: "Mentions", MessageReminders: "MessageReminders" };
export const NotificationCenterItems = { GO_LIVE_PUSH: "go_live_push", FRIEND_REQUEST_ACCEPTED: "friend_request_accepted", FRIEND_REQUEST_PENDING: "friend_request_pending", FRIEND_SUGGESTION_CREATED: "friend_suggestion_created", FRIEND_REQUEST_REMINDER: "friend_request_reminder", DM_FRIEND_NUDGE: "dm_friend_nudge", RECENT_MENTION: "recent_mention", REPLY_MENTION: "reply_mention", GUILD_SCHEDULED_EVENT_STARTED: "scheduled_guild_event_started", SYSTEM_DEMO: "system_demo", MISSED_MESSAGES: "missed_messages", TOP_MESSAGES: "top_messages", LIFECYCLE_ITEM: "lifecycle_item", TRENDING_CONTENT: "trending_content", GAME_FRIEND_REQUEST_ACCEPTED: "game_friend_request_accepted", REACTION_SENT: "reaction_sent", REFERRAL_PROGRAM_ENTRYPOINT_REMINDER: "referral_program_entrypoint_reminder" };
export const NotificationCenterLocalItems = { INCOMING_FRIEND_REQUESTS: "INCOMING_FRIEND_REQUESTS", INCOMING_FRIEND_REQUESTS_ACCEPTED: "INCOMING_FRIEND_REQUESTS_ACCEPTED", FRIEND_REQUESTS_GROUPED: "FRIEND_REQUESTS_GROUPED", MOBILE_NATIVE_UPDATE_AVAILABLE: "MOBILE_NATIVE_UPDATE_AVAILABLE", INCOMING_GAME_FRIEND_REQUESTS: "INCOMING_GAME_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED: "INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED" };