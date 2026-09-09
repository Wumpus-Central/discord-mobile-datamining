// === Module 15196: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 15196 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(15197, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};