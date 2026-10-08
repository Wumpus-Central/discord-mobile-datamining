// === Module 15245: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 15245 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15246, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", { multiplier, orbMultiplierEligibility });
};