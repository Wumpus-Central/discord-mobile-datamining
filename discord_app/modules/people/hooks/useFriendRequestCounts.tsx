// discord_app/modules/people/hooks/useFriendRequestCounts.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import recountRelationshipTypes from "../../game_relationships/GameRelationshipStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export const getIncomingFriendRequestCount = function getIncomingFriendRequestCount(items) {
  [obj, obj2] = callback(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
};
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  let items = [closure_4, closure_3];
  return initialize.useStateFromStores(items, () => {
    const items = [closure_4, closure_3];
    [obj, obj2] = callback(items, 2);
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
};
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [globalThis.o, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};