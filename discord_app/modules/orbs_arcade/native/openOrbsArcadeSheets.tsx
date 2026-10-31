// discord_app/modules/orbs_arcade/native/openOrbsArcadeSheets.tsx
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17029, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", {
    gameId: id,
  });
}
export function openOrbsArcadeRewardsSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17039, dependencyMap.paths), "OrbsArcadeRewardsSheet", {
    gameId: id,
  });
}
export function openOrbsArcadeInfoSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17044, dependencyMap.paths), "OrbsArcadeInfoSheet", {
    gameId: id,
  });
}
export function openOrbsArcadeRewardUnlockedSheet(id) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17045, dependencyMap.paths),
    "OrbsArcadeRewardUnlockedSheet",
    { gameId: id, unlockedRewardIds: set },
  );
}
