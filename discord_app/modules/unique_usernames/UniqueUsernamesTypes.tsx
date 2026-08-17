// discord_app/modules/unique_usernames/UniqueUsernamesTypes.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesTypes.tsx");

export const NameValidationState = { AVAILABLE: "AVAILABLE", ERROR: "ERROR", RATE_LIMIT: "RATE_LIMIT", INTERNAL_ERROR: "INTERNAL_ERROR" };