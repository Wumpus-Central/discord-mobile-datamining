// === Module 17420: set ===

// Module 17420 (set)
import set from "set" /* 2 */;

const obj = { SYNCABLE: null };
let set = new Set(["twitch", "youtube"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;