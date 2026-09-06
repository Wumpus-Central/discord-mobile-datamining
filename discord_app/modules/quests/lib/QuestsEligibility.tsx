// === Module 11484: QuestsEligibility ===

// Module 11484 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};