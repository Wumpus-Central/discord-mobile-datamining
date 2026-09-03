// === Module 17379: set ===

// Module 17379 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["conversation", "forum_post", "message", "message_bundle"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;