// === Module 10568: QuestsEligibility ===

// Module 10568 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
}