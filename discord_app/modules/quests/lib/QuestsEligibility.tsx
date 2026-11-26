// === Module 9893: QuestsEligibility ===

// Module 9893 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
}