// === Module 15793: useIsAllowGameFriendDMsSettingVisible ===

// Module 15793 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7142 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameRelationshipStore];
    const fn = function n() {
      return gameRelationshipCount.getGameRelationshipCount() > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [GameRelationshipStore];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
});