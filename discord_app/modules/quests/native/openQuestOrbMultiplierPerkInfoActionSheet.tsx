// === Module 15166: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 15166 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(15167, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};