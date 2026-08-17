// discord_app/modules/game_relationships/hooks/useIsGameFriends.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "recountRelationshipTypes" /* 5406 */;
import { RelationshipTypes } from "ME" /* 676 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { isVersionEqual } from "../../../utils/SecondaryIndexMapUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [closure_3];
  const items1 = [id];
  return callback(_initialize.useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = closure_1_3.getGameRelationshipsForUserByType(closure_0, closure_1_4.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _isVersionEqual.isVersionEqual), 1)[0];
};