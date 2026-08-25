// === Module 4590: ReadStateTypes ===

// Module 4590 (ReadStateTypes)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/read_states/ReadStateConstants.tsx");

export const ReadStateTypes = { CHANNEL: 0, [0]: "CHANNEL", GUILD_EVENT: 1, [1]: "GUILD_EVENT", NOTIFICATION_CENTER: 2, [2]: "NOTIFICATION_CENTER", GUILD_HOME: 3, [3]: "GUILD_HOME", GUILD_ONBOARDING_QUESTION: 4, [4]: "GUILD_ONBOARDING_QUESTION", MESSAGE_REQUESTS: 5, [5]: "MESSAGE_REQUESTS" };
export const UnreadSetting = { UNSET: 0, [0]: "UNSET", ALL_MESSAGES: 1, [1]: "ALL_MESSAGES", ONLY_MENTIONS: 2, [2]: "ONLY_MENTIONS" };