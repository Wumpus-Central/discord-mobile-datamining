// === Module 14517: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 14517 (openQuestOrbMultiplierPerkInfoActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(14518, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};