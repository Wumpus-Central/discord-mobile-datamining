// === Module 16917: openOrbsArcadeSheets ===

// Module 16917 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16918, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
}
export function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16927, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id });
}
export function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16932, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
}
export function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16933, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, unlockedRewardIds: set });
}