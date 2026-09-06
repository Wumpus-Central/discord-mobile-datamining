// discord_app/modules/people/hooks/useFriendRequestCounts.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

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
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount() {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [globalThis.o];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = _slicedToArray(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
