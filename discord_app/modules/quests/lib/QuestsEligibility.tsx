// discord_app/modules/quests/lib/QuestsEligibility.tsx
import set from "../../../../_runtime/00002_set.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};