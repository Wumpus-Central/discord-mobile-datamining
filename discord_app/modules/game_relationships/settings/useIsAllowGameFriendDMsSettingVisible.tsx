// discord_app/modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import GameRelationshipStore from "../GameRelationshipStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let gameRelationshipCount;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let gameRelationshipCount;
      const items = [GameRelationshipStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
    };
const result = size.fileFinishedImporting(
  "modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx",
);

export const useIsAllowGameFriendDMsSettingVisible = tmp2;
