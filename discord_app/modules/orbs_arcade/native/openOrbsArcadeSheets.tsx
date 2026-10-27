// discord_app/modules/orbs_arcade/native/openOrbsArcadeSheets.tsx
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16451, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", {
    gameId: id,
  });
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16460, dependencyMap.paths), "OrbsArcadeRewardsSheet", {
    gameId: id,
  });
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16465, dependencyMap.paths), "OrbsArcadeInfoSheet", {
    gameId: id,
  });
};
export const openOrbsArcadeRewardUnlockedSheet = function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(16466, dependencyMap.paths),
    "OrbsArcadeRewardUnlockedSheet",
    { gameId: id, unlockedRewardIds: set },
  );
};
