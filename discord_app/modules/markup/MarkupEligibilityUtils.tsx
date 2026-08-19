// === Module 8300: isMessageNewerThanImprovedMarkdownEpoch ===

// Module 8300 (isMessageNewerThanImprovedMarkdownEpoch)
import obj132 from "obj132" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

const result = obj132.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(arg0) {
  return arg0 >= DISCORD_EPOCHDefault.extractTimestamp("1088216706570268682");
};