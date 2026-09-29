// === Module 10851: QuestsEligibility ===

// Module 10851 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};