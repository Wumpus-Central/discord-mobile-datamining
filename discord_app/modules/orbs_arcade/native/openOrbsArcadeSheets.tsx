// === Module 17696: openOrbsArcadeSheets ===

// Module 17696 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeRewardsSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17697, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id, surface });
}
export function openOrbsArcadeInfoSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17714, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17716, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, surface, unlockedRewardIds: set });
}