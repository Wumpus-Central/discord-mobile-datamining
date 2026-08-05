// discord_app/modules/game_claim/useGameClaimCoachmark.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "experiments/GameClaimCoachmarkExperiment.tsx";

const require = arg1;
const result = require("experiment").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = _experiment.useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = _experiment;
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => outer1_2.canWithPartialContext(outer1_3.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = _initialize;
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};