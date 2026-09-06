// === Module 16063: findActivityWithMostParticipants ===

// Module 16063 (findActivityWithMostParticipants)
import RelationshipStore from "RelationshipStore" /* 4209 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

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
    items[1] = items1.map((item) => !embeddedActivitiesForChannel.isBlockedOrIgnored(item)).length;
    [closure_0, length] = items;
    const item = embeddedActivitiesForChannel.forEach((userIds) => {
      const items = [...userIds.userIds];
      length = items.filter((item) => !blockedOrIgnored.isBlockedOrIgnored(item)).length;
      if (length > length) {
        const blockedOrIgnored = userIds;
      }
    });
    return embeddedActivitiesForChannel;
  }
};