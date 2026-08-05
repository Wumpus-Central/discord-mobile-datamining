// discord_app/modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(14308, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};