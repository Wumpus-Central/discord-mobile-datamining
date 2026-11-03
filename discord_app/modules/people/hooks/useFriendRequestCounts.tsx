// === Module 18988: useFriendRequestCounts ===

// Module 18988 (useFriendRequestCounts)
import initialize from "initialize" /* 504 */;
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7924 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export function getIncomingFriendRequestCount(items) {
  [obj, obj2] = items;
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
export function useIncomingFriendRequestCount() {
  items = [RelationshipStore, GameRelationshipStore];
  return initialize.useStateFromStores(items, () => {
    items = [RelationshipStore, GameRelationshipStore];
    [obj, obj2] = items;
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
}
export function getOutgoingFriendRequestCount() {
  let tmp = items1;
  if (items1 === undefined) {
    items = [globalThis.o, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
}