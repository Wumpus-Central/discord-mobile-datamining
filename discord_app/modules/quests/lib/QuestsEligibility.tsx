// === Module 10912: QuestsEligibility ===

// Module 10912 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};