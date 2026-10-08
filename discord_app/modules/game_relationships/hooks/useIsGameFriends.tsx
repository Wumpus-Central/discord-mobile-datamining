// discord_app/modules/game_relationships/hooks/useIsGameFriends.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameRelationshipStore from "../GameRelationshipStore.tsx";

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1085).RelationshipTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsGameFriends(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GameRelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(
            closure_0,
            RelationshipTypes.FRIEND,
          );
          const items = [
            gameRelationshipsForUserByType.length > 0,
            GameRelationshipStore.getGameRelationshipsVersion(),
          ];
          return items;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return _slicedToArray(
        require("initialize").useStateFromStores(first, tmp6, tmp7, require("SecondaryIndexMapUtils").isVersionEqual),
        1,
      )[0];
    }
  : function useIsGameFriends(arg0) {
      _require = arg0;
      let items = [GameRelationshipStore];
      const items1 = [arg0];
      return _slicedToArray(
        require("initialize").useStateFromStores(
          items,
          () => {
            const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(
              closure_0,
              RelationshipTypes.FRIEND,
            );
            const items = [
              gameRelationshipsForUserByType.length > 0,
              GameRelationshipStore.getGameRelationshipsVersion(),
            ];
            return items;
          },
          items1,
          require("SecondaryIndexMapUtils").isVersionEqual,
        ),
        1,
      )[0];
    };
