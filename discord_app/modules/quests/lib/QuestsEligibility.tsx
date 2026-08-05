// discord_app/modules/quests/lib/QuestsEligibility.tsx
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};