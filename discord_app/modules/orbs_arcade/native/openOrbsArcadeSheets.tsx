// === Module 16318: openOrbsArcadeSheets ===

// Module 16318 (openOrbsArcadeSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16319, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", { gameId: id });
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16322, dependencyMap.paths), "OrbsArcadeInfoSheet", { gameId: id });
};