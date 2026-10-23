// === Module 16332: openOrbsArcadeSheets ===

// Module 16332 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16333, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16339, dependencyMap.paths), "OrbsArcadeRewardsSheet", { gameId: id });
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16344, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
};