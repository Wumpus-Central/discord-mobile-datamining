// discord_app/modules/people/hooks/useFriendRequestCounts.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIncomingFriendRequestCount() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RelationshipStore, GameRelationshipStore];
        const fn = function o() {
          const items = [RelationshipStore, GameRelationshipStore];
          [obj, obj2] = items;
          const pendingCount = obj.getPendingCount();
          return pendingCount + obj2.getPendingIncomingCount();
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
  : function useIncomingFriendRequestCount() {
      let items = [RelationshipStore, GameRelationshipStore];
      return initialize.useStateFromStores(items, () => {
        const items = [RelationshipStore, GameRelationshipStore];
        [obj, obj2] = items;
        const pendingCount = obj.getPendingCount();
        return pendingCount + obj2.getPendingIncomingCount();
      });
    };
let closure_5 = tmp2;
function getIncomingFriendRequestCount(items) {
  [obj, obj2] = items;
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = tmp2;
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount() {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
