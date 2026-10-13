// === Module 15758: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 15758 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15759, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", { multiplier, orbMultiplierEligibility });
};