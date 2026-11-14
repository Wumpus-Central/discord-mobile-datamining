// discord_app/modules/orbs_arcade/native/openOrbsArcadeSheets.tsx
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeRewardsSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17659, dependencyMap.paths), "OrbsArcadeRewardsSheet", {
    gameId: id,
    surface,
  });
}
export function openOrbsArcadeInfoSheet(id, surface) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17676, dependencyMap.paths), "OrbsArcadeInfoSheet", {
    gameId: id,
    surface,
  });
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17678, dependencyMap.paths),
    "OrbsArcadeRewardUnlockedSheet",
    { gameId: id, surface, unlockedRewardIds: set },
  );
}
