// === Module 16821: set ===

// Module 16821 (set)
import obj132 from "obj132" /* 2 */;

const obj = { SYNCABLE: new Set(["twitch", "youtube"]) };
const set = new Set(["twitch", "youtube"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;