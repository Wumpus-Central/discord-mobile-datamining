// === Module 17452: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 17452 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17453, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", { multiplier, orbMultiplierEligibility });
};