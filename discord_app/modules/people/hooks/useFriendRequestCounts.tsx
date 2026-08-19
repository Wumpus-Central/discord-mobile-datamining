// === Module 15967: getIncomingFriendRequestCount ===

// Module 15967 (getIncomingFriendRequestCount)
import initialize from "initialize" /* 589 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;

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