// discord_app/modules/people/hooks/useFriendRequestCounts.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RelationshipStore, GameRelationshipStore];
        const fn = function u() {
          let obj;
          let obj2;
          const items = [RelationshipStore, GameRelationshipStore];
          [obj, obj2] = items;
          _slicedToArray(items, 2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const obj = get_initialized;
      let items = [RelationshipStore, GameRelationshipStore];
      return obj.useStateFromStores(items, () => {
        let obj;
        let obj2;
        const items = [RelationshipStore, GameRelationshipStore];
        [obj, obj2] = items;
        _slicedToArray(items, 2);
        const pendingCount = obj.getPendingCount();
        return pendingCount + obj2.getPendingIncomingCount();
      });
    };
let closure_5 = tmp2;
function getIncomingFriendRequestCount(items) {
  let obj;
  let obj2;
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = tmp2;
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount() {
  let obj;
  let obj2;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
