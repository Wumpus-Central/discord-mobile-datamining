// discord_app/modules/markup/MarkupEligibilityUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";

const result = obj132.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(arg0) {
  return arg0 >= DISCORD_EPOCHDefault.extractTimestamp("1088216706570268682");
};