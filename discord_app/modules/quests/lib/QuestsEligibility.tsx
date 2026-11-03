// === Module 9805: QuestsEligibility ===

// Module 9805 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
}