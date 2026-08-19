// === Module 10685: getIsEligibleForQuests ===

// Module 10685 (getIsEligibleForQuests)
import obj132 from "obj132" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = obj132.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};