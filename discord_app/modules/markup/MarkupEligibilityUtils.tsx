// discord_app/modules/markup/MarkupEligibilityUtils.tsx
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

const result = set.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= DISCORD_EPOCHDefault.extractTimestamp("1088216706570268682");
};