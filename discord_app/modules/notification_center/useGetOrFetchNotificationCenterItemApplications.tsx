// === Module 16851: useGetOrFetchNotificationCenterItemApplications ===

// Module 16851 (useGetOrFetchNotificationCenterItemApplications)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6857 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let items = [fn(6058).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, fn(6058).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, fn(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, fn(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchNotificationCenterItemsApplications(arr) {
  const cResult = require("c").c(2);
  if (cResult[0] !== arr) {
    const _Set = Set;
    set = new Set();
    const items = [];
    _require = items;
    const item = arr.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (set.has(applicationId.type)) {
        let hasItem = null == applicationId;
        if (!hasItem) {
          hasItem = set.has(applicationId);
        }
        if (!hasItem) {
          set.add(applicationId);
          closure_0.push(applicationId);
        }
      }
    });
    cResult[0] = arr;
    cResult[1] = items;
    const tmp3 = items;
  } else {
    _require = cResult[1];
  }
  return set(6857)(tmp3);
}) : (function useGetOrFetchNotificationCenterItemsApplications(arg0) {
  closure_0 = arg0;
  let items = [arg0];
  const memo = noop.useMemo(() => {
    set = new Set();
    const items = [];
    const item = closure_0.forEach((applicationId) => {
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
});