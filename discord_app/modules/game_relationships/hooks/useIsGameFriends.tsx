// discord_app/modules/game_relationships/hooks/useIsGameFriends.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import recountRelationshipTypes from "../GameRelationshipStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [closure_3];
  const items1 = [id];
  return callback(require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = closure_1_3.getGameRelationshipsForUserByType(closure_0, RelationshipTypes.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, require("../../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual), 1)[0];
};