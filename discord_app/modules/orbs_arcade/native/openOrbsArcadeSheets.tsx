// === Module 16434: openOrbsArcadeSheets ===

// Module 16434 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeRewardsSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16435, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id, surface });
}
export function openOrbsArcadeInfoSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16452, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16454, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, surface, unlockedRewardIds: set });
}