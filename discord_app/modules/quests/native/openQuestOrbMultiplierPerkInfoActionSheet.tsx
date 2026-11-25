// === Module 16706: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 16706 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16707, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", { multiplier, orbMultiplierEligibility });
};