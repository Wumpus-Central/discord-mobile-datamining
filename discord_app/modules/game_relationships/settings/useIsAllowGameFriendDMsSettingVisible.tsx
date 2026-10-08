// discord_app/modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import GameRelationshipStore from "../GameRelationshipStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx",
);

export const useIsAllowGameFriendDMsSettingVisible = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsAllowGameFriendDMsSettingVisible() {
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
    }
  : function useIsAllowGameFriendDMsSettingVisible() {
      const items = [GameRelationshipStore];
      return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
    };
