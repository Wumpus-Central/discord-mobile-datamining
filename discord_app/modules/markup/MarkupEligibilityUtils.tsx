import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
// discord_app/modules/markup/MarkupEligibilityUtils.tsx
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= DISCORD_EPOCH.extractTimestamp("1088216706570268682");
};