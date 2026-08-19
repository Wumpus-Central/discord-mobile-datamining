// discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { ALL: new Set(["conversation", "forum_post", "message", "message_bundle"]) };
const set = new Set(["conversation", "forum_post", "message", "message_bundle"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;