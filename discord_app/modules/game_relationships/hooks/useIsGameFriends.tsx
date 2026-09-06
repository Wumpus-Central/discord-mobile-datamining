// === Module 13065: useIsGameFriends ===

// Module 13065 (useIsGameFriends)
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  _require = id;
  let items = [GameRelationshipStore];
  const items1 = [id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, RelationshipTypes.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};