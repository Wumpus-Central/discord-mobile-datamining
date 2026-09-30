// === Module 14901: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 14901 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14902, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", { multiplier, orbMultiplierEligibility });
};