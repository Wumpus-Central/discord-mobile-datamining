// discord_common/js/shared/shared-constants/IntegrationTypes.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { SYNCABLE: new Set(["twitch", "youtube"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = {
  DISCORD: "discord",
  TWITCH: "twitch",
  YOUTUBE: "youtube",
  GUILD_SUBSCRIPTION: "guild_subscription",
};
export const IntegrationTypesSets = obj;
