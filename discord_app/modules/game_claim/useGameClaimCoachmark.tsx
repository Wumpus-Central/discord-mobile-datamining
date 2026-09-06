// discord_app/modules/game_claim/useGameClaimCoachmark.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  _require = id;
  let gameClaimCoachmarkEnabled = require("GameClaimCoachmarkExperiment").useGameClaimCoachmarkEnabled(
    id,
    "useCanShowGameClaimCoachmark",
  );
  const obj = require("GameClaimCoachmarkExperiment");
  const items = [PermissionStore];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(
      items,
      () => PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, { guildId }),
      items1,
    );
  }
  obj2 = require("initialize");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};
