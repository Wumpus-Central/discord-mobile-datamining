// discord_app/modules/people/hooks/useFriendRequestCounts.tsx
import _slicedToArray from "_slicedToArray";
import recountRelationshipTypes from "recountRelationshipTypes";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("markAllUserIdListsStale").fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export const getIncomingFriendRequestCount = function getIncomingFriendRequestCount(items) {
  let obj;
  let obj2;
  [obj, obj2] = callback(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
};
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  let items = [markAllUserIdListsStale, recountRelationshipTypes];
  return initialize.useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [markAllUserIdListsStale, recountRelationshipTypes];
    [obj, obj2] = callback(items, 2);
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
};
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let obj;
  let obj2;
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