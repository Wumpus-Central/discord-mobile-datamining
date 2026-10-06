// === Module 16237: useGameClaimCoachmark ===

// Module 16237 (useGameClaimCoachmark)
import Constants from "Constants" /* 1085 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp7;
  let tmp8;
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("GameClaimCoachmarkExperiment");
  let gameClaimCoachmarkEnabled = obj2.useGameClaimCoachmarkEnabled(guildId, "useCanShowGameClaimCoachmark");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      const obj = { guildId };
      return PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, obj);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  const tmpResult2 = require("UnclaimedGamesActionCreators");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult2.useHasUnclaimedGames(guildId, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
}) : ((guildId) => {
  _require = guildId;
  let obj = require("GameClaimCoachmarkExperiment");
  let gameClaimCoachmarkEnabled = obj.useGameClaimCoachmarkEnabled(guildId, "useCanShowGameClaimCoachmark");
  const items = [PermissionStore];
  const items1 = [guildId];
  const obj2 = require("get initialized");
  const tmp = _require;
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => {
      const obj = { guildId };
      return PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, obj);
    }, items1);
  }
  const tmpResult = tmp(16156);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(guildId, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
});
const result = size.fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = tmp2;