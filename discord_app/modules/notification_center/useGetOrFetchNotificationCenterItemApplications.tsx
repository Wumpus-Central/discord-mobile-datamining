// === Module 15671: set ===

// Module 15671 (set)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7145 */;
import noop from "noop" /* 19 */;

let items = [require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  importDefault = stateFromStores1;
  let items = [stateFromStores1];
  const memo = React.useMemo(() => {
    set = new Set();
    const items = [];
    const item = set.forEach((item, index) => {
      const applicationId = item.applicationId;
      if (closure_1_3.has(item.type)) {
        let hasItem = null == applicationId;
        if (!hasItem) {
          hasItem = set.has(applicationId);
        }
        if (!hasItem) {
          set.add(applicationId);
          items.push(applicationId);
        }
      }
    });
    return items;
  }, items);
  return useGetOrFetchApplicationsDefault(memo);
};