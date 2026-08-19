// === Module 16760: set ===

// Module 16760 (set)
import obj132 from "obj132" /* 2 */;

const obj = { ALL: new Set(["conversation", "forum_post", "message", "message_bundle"]) };
const set = new Set(["conversation", "forum_post", "message", "message_bundle"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;