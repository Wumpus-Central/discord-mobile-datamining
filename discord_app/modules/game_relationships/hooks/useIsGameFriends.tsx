// === Module 12297: useIsGameFriends ===

// Module 12297 (useIsGameFriends)
import _slicedToArray from "_slicedToArray" /* 32 */;
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [closure_3];
  const items1 = [id];
  return callback(_require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = closure_1_3.getGameRelationshipsForUserByType(closure_0, RelationshipTypes.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(6709).isVersionEqual), 1)[0];
};