// === Module 18643: useGetOrFetchNotificationCenterItemApplications ===

// Module 18643 (useGetOrFetchNotificationCenterItemApplications)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7450 */;
import noop from "module_19" /* 19 */;

let items = [fn(6979).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, fn(6979).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, fn(6979).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, fn(6979).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  importDefault = stateFromStores1;
  items = [stateFromStores1];
  const memo = noop.useMemo(() => {
    set = new Set();
    items = [];
    const item = stateFromStores1.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (set.has(applicationId.type)) {
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
}