// === Module 16177: getIncomingFriendRequestCount ===

// Module 16177 (getIncomingFriendRequestCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "recountRelationshipTypes" /* 7330 */;
import closure_4 from "markAllUserIdListsStale" /* 4098 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

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