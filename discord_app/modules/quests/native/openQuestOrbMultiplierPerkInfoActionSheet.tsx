// discord_app/modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4161);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14208, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};