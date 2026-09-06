// discord_app/modules/quests/lib/QuestsEligibility.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
