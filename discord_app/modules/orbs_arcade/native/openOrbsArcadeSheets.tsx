// === Module 17352: openOrbsArcadeSheets ===

// Module 17352 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17353, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardsSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17365, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id, surface });
}
export function openOrbsArcadeInfoSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17372, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id, surface });
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17373, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, surface, unlockedRewardIds: set });
}