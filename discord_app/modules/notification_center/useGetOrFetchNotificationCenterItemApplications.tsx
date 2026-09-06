// discord_app/modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx
import useGetOrFetchApplicationsDefault from "../applications/useGetOrFetchApplications.tsx";
import noop from "../../../_runtime/metro/00019__.js";

let items = [
  fn(7640).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS,
  fn(7640).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
  fn(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
  fn(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
];
let set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx",
);

export const useGetOrFetchNotificationCenterItemsApplications =
  function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
    importDefault = stateFromStores1;
    let items = [stateFromStores1];
    const memo = noop.useMemo(() => {
      set = new Set();
      const items = [];
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
  };
