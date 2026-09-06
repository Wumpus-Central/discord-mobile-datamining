// === Module 16748: useFriendRequestCounts ===

// Module 16748 (useFriendRequestCounts)
import initialize from "initialize" /* 504 */;
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export const getIncomingFriendRequestCount = function getIncomingFriendRequestCount(items) {
  [obj, obj2] = _slicedToArray(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
};
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  let items = [RelationshipStore, GameRelationshipStore];
  return initialize.useStateFromStores(items, () => {
    const items = [RelationshipStore, GameRelationshipStore];
    [obj, obj2] = _slicedToArray(items, 2);
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
  [obj, obj2] = _slicedToArray(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};