// === Module 15772: set ===

// Module 15772 (set)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 5840 */;
import closure_2 from "noop" /* 19 */;
import set from "set" /* 2 */;

let items = [require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  importDefault = stateFromStores1;
  let items = [stateFromStores1];
  const memo = React.useMemo(() => {
    set = new Set();
    const items = [];
    const item = set.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (closure_1_3.has(applicationId.type)) {
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