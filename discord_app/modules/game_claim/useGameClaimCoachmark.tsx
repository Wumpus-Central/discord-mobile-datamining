// discord_app/modules/game_claim/useGameClaimCoachmark.tsx
import closure_2 from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "experiments/GameClaimCoachmarkExperiment.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = _experiment.useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = _experiment;
  const tmp = _require;
  const items = [closure_2];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => closure_1_2.canWithPartialContext(closure_1_3.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = _initialize;
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};