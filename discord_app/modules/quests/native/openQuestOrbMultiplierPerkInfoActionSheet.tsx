const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4223);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14275, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};