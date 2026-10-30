// === Module 16971: openOrbsArcadeSheets ===

// Module 16971 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16972, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
}
export function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16981, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id });
}
export function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16986, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
}
export function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16987, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, unlockedRewardIds: set });
}