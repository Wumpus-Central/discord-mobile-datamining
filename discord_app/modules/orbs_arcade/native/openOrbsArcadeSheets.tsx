// === Module 17276: openOrbsArcadeSheets ===

// Module 17276 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17277, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
}
export function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17287, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id });
}
export function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17292, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
}
export function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17293, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, unlockedRewardIds: set });
}