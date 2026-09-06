// discord_app/modules/game_relationships/hooks/useIsGameFriends.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameRelationshipStore from "../GameRelationshipStore.tsx";

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  _require = id;
  let items = [GameRelationshipStore];
  const items1 = [id];
  return _slicedToArray(
    require("initialize").useStateFromStores(
      items,
      () => {
        const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(
          closure_0,
          RelationshipTypes.FRIEND,
        );
        const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
        return items;
      },
      items1,
      require("SecondaryIndexMapUtils").isVersionEqual,
    ),
    1,
  )[0];
};
