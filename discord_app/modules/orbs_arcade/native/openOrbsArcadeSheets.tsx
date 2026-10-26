// === Module 16410: openOrbsArcadeSheets ===

// Module 16410 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16411, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16420, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id });
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16425, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
};
export const openOrbsArcadeRewardUnlockedSheet = function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16426, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", { gameId: id, unlockedRewardIds: set });
};