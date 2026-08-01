// === Module 16457: set ===

// Module 16457 (set)
import set from "set";

const obj = { SYNCABLE: null };
let set = new Set(["twitch", "youtube"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;