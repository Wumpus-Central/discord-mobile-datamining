// discord_app/modules/markup/MarkupEligibilityUtils.tsx
import set from "../../../_runtime/00002_set.js";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";

const result = set.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= DISCORD_EPOCHDefault.extractTimestamp("1088216706570268682");
};
