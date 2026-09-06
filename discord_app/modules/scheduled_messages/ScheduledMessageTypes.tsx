// === Module 7847: ScheduledMessageTypes ===

// Module 7847 (ScheduledMessageTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageTypes.tsx");

export const ScheduledMessageSendState = { SCHEDULED: 0, [0]: "SCHEDULED", ERROR_SCHEDULED_MESSAGES_DISABLED: 1, [1]: "ERROR_SCHEDULED_MESSAGES_DISABLED", ERROR_USER_NOT_FOUND: 2, [2]: "ERROR_USER_NOT_FOUND", ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES: 3, [3]: "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES", ERROR_CHANNEL_NOT_FOUND: 4, [4]: "ERROR_CHANNEL_NOT_FOUND", ERROR_SEND_FAILED: 5, [5]: "ERROR_SEND_FAILED" };
export const ScheduledMessageEntryPoint = { ATTACH_MENU: "attach_menu", COMPOSER_BAR: "composer_bar", INBOX: "inbox", POLL_CREATION: "poll_creation", SLASH_COMMAND: "slash_command" };