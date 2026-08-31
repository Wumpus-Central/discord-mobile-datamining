// === Module 15616: findActivityWithMostParticipants ===

// Module 15616 (findActivityWithMostParticipants)
import closure_0 from "markAllUserIdListsStale" /* 4100 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

export default function findActivityWithMostParticipants(arr) {
  if (0 === arr.length) {
    return null;
  } else if (1 === length) {
    let first = arr[0];
  } else {
    first = arr.reduce((userIds, userIds2) => {
      let tmp = userIds;
      if (userIds.userIds.size < userIds2.userIds.size) {
        tmp = userIds2;
      }
      return tmp;
    }, arr[0]);
  }
};
export const findActivityWithMostNonBlockedOrIgnoredParticipants = function findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel) {
  if (0 === embeddedActivitiesForChannel.length) {
    return null;
  } else if (1 === length) {
    return embeddedActivitiesForChannel[0];
  } else {
    let items = [embeddedActivitiesForChannel[0], ];
    const items1 = [];
    HermesBuiltin.arraySpread(embeddedActivitiesForChannel[0].userIds, 0);
    items[1] = items1.map((id) => !blockedOrIgnored.isBlockedOrIgnored(id)).length;
    [closure_0, closure_1] = items;
    const item = embeddedActivitiesForChannel.forEach((userIds) => {
      const items = [...userIds.userIds];
      const length = items.filter((id) => !userIds.isBlockedOrIgnored(id)).length;
      if (length > length) {
        closure_0 = userIds;
      }
    });
    return closure_0;
  }
};