// === Module 16027: findActivityWithMostParticipants ===

// Module 16027 (findActivityWithMostParticipants)
import RelationshipStore_mod from "RelationshipStore" /* 4525 */;
import size from "module_2" /* 2 */;

let RelationshipStore = RelationshipStore_mod;
const result = size.fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

export default function findActivityWithMostParticipants(arr) {
  let tmp = null;
  if (0 !== arr.length) {
    let first;
    if (1 === arr.length) {
      first = arr[0];
    } else {
      first = arr.reduce((userIds, userIds2) => {
        let tmp = userIds;
        if (userIds.userIds.size < userIds2.userIds.size) {
          tmp = userIds2;
        }
        return tmp;
      }, arr[0]);
    }
    tmp = first;
  }
  return tmp;
};
export const findActivityWithMostNonBlockedOrIgnoredParticipants = function findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel) {
  let blockedOrIgnored;
  let length;
  length = embeddedActivitiesForChannel.length;
  if (0 === length) {
    return null;
  } else if (1 === length) {
    return embeddedActivitiesForChannel[0];
  } else {
    let items = [embeddedActivitiesForChannel[0], ];
    const items1 = [];
    HermesBuiltin.arraySpread(items1, embeddedActivitiesForChannel[0].userIds, 0);
    items[1] = items1.map((item) => !RelationshipStore.isBlockedOrIgnored(item)).length;
    [RelationshipStore, length] = items;
    const item = embeddedActivitiesForChannel.forEach((userIds) => {
      const items = [...userIds.userIds];
      length = items.filter((item) => !blockedOrIgnored.isBlockedOrIgnored(item)).length;
      if (length > length) {
        RelationshipStore = userIds;
      }
    });
    return RelationshipStore;
  }
};