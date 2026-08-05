// discord_app/modules/markup/MarkupEligibilityUtils.tsx
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= require("../../utils/SnowflakeUtils.tsx").extractTimestamp("1088216706570268682");
};