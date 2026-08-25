// === Module 10532: getIsEligibleForQuests ===

// Module 10532 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};