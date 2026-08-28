// === Module 15782: useCanShowGameClaimCoachmark ===

// Module 15782 (useCanShowGameClaimCoachmark)
import closure_2 from "getUncachedChannelPermissions" /* 4090 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = _require(15783).useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = _require(15783);
  const tmp = _require;
  const items = [closure_2];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => closure_1_2.canWithPartialContext(closure_1_3.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = _require(589);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};