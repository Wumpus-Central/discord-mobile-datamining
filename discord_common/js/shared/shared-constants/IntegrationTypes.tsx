// === Module 17600: IntegrationTypes ===

// Module 17600 (IntegrationTypes)
import size from "module_2" /* 2 */;

const obj = { SYNCABLE: new Set(["twitch", "youtube"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;