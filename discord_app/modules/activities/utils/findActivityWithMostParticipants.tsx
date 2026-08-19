// === Module 15326: findActivityWithMostParticipants ===

// Module 15326 (findActivityWithMostParticipants)
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;

const result = require("obj132").fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

export default function findActivityWithMostParticipants(arr) {
  if (0 === arr.length) {
    return null;
  } else if (1 === length) {
    let first = arr[0];
  } else {
    first = arr.reduce((acc, item, index) => {
      let tmp = acc;
      if (acc.userIds.size < item.userIds.size) {
        tmp = item;
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
    items[1] = items1.map((item, index) => !blockedOrIgnored.isBlockedOrIgnored(item)).length;
    [closure_0, closure_1] = items;
    const item = embeddedActivitiesForChannel.forEach((item, index) => {
      const items = [...item.userIds];
      const length = items.filter((item, index) => !item.isBlockedOrIgnored(item)).length;
      if (length > length) {
        closure_0 = item;
      }
    });
    return closure_0;
  }
};