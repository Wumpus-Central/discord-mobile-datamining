// === Module 14715: openQuestOrbMultiplierPerkInfoActionSheet ===

// Module 14715 (openQuestOrbMultiplierPerkInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(14716, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};