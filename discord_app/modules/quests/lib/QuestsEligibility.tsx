// discord_app/modules/quests/lib/QuestsEligibility.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";

const result = obj132.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};