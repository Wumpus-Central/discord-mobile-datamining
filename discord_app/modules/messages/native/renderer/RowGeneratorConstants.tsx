// === Module 7854: Changeset ===

// Module 7854 (Changeset)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorConstants.tsx");

export const Changeset = { NOOP: 0, [0]: "NOOP", INSERT: 1, [1]: "INSERT", UPDATE: 2, [2]: "UPDATE", REMOVE: 3, [3]: "REMOVE" };
export const RowType = { SEPARATOR: 0, [0]: "SEPARATOR", MESSAGE: 1, [1]: "MESSAGE", BLOCKED_GROUP: 2, [2]: "BLOCKED_GROUP", LOADING: 4, [4]: "LOADING", EMBEDDED_ACTIVITY: 5, [5]: "EMBEDDED_ACTIVITY", IGNORED_GROUP: 6, [6]: "IGNORED_GROUP", SUSPENDED_USER_GROUP: 7, [7]: "SUSPENDED_USER_GROUP" };
export const SeparatorType = { DAY: "day", UNREAD: "unread", SUMMARY: "summary" };
export const SeparatorAction = { TOGGLE_BLOCKED_MESSAGES: "toggle", LOAD_MORE_BEFORE: "load_more_before", LOAD_MORE_AFTER: "load_more_after", DISMISS_SUSPENDED_USER_MESSAGES: "dismiss" };
export const LoadingType = { LOAD_BEFORE: "load_before", LOAD_AFTER: "load_after" };
export const ReferencedMessageRowState = { LOADED: 0, [0]: "LOADED", SYSTEM: 1, [1]: "SYSTEM" };
export const MessageFailureState = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", UPLOAD_FAILED: 1, [1]: "UPLOAD_FAILED", AUTO_MODERATION_BLOCKED_MESSAGE: 2, [2]: "AUTO_MODERATION_BLOCKED_MESSAGE" };
export const AttachmentType = { IMAGE: "image", VIDEO: "video", AUDIO: "audio", OTHER: "other" };
export const SwipeActionsType = { NONE: 0, [0]: "NONE", REPLY: 1, [1]: "REPLY", REPLY_EDIT: 2, [2]: "REPLY_EDIT" };