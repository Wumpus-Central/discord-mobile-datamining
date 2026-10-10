// === Module 16683: useGameClaimCoachmark ===

// Module 16683 (useGameClaimCoachmark)
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanShowGameClaimCoachmark(guildId) {
  _require = guildId;
  const cResult = require("c").c(4);
  const obj = require("c");
  let gameClaimCoachmarkEnabled = require("GameClaimCoachmarkExperiment").useGameClaimCoachmarkEnabled(guildId, "useCanShowGameClaimCoachmark");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, { guildId });
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj2 = require("GameClaimCoachmarkExperiment");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  tmpResult = require("initialize");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult2.useHasUnclaimedGames(guildId, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
}) : (function useCanShowGameClaimCoachmark(guildId) {
  _require = guildId;
  let gameClaimCoachmarkEnabled = require("GameClaimCoachmarkExperiment").useGameClaimCoachmarkEnabled(guildId, "useCanShowGameClaimCoachmark");
  const obj = require("GameClaimCoachmarkExperiment");
  const items = [PermissionStore];
  const items1 = [guildId];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, { guildId }), items1);
  }
  obj2 = require("initialize");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(guildId, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
});