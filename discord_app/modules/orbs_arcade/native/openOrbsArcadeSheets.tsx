// === Module 17379: openOrbsArcadeSheets ===

// Module 17379 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17380, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardsSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17392, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id, surface });
}
export function openOrbsArcadeInfoSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17399, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17400, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, surface, unlockedRewardIds: set });
}