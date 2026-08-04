// discord_app/modules/relationships/RelationshipConstants.tsx
const result = require("set").fileFinishedImporting("modules/relationships/RelationshipConstants.tsx");

export const ClearFriendRequestFilters = { SPAM: 1, [1]: "SPAM", IGNORED: 2, [2]: "IGNORED" };
export const UserRemediationAction = { GOTO_IGNORE: "GOTO_IGNORE", GOTO_BLOCK: "GOTO_BLOCK", EXPLORE_FEATURE_GUILD: "EXPLORE_FEATURE_GUILD", DISMISS_IGNORE: "DISMISS_IGNORE", DISMISS_BLOCK: "DISMISS_BLOCK", CANCEL_IGNORE: "CANCEL_IGNORE", CANCEL_BLOCK: "CANCEL_BLOCK" };