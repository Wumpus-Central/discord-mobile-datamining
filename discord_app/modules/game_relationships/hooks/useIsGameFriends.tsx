// === Module 12186: useIsGameFriends ===

// Module 12186 (useIsGameFriends)
import _slicedToArray from "_slicedToArray";
import recountRelationshipTypes from "recountRelationshipTypes";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [recountRelationshipTypes];
  const items1 = [id];
  return callback(_require(589).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = outer1_3.getGameRelationshipsForUserByType(closure_0, outer1_4.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(5025).isVersionEqual), 1)[0];
};