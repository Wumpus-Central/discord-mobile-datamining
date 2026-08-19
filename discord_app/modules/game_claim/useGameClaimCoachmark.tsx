// discord_app/modules/game_claim/useGameClaimCoachmark.tsx
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "experiments/GameClaimCoachmarkExperiment.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = require("experiments/GameClaimCoachmarkExperiment.tsx").useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = experiment;
  const items = [closure_2];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => closure_1_2.canWithPartialContext(Permissions.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = initialize;
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};