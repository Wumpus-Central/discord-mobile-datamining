// discord_app/modules/quests/lib/QuestsEligibility.tsx
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require("../../device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};