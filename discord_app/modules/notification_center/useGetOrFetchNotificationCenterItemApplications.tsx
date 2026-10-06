// discord_app/modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx
import useGetOrFetchApplicationsDefault from "../applications/useGetOrFetchApplications.tsx";
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, applicationId;

let items = [
  NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS,
  NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
  NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
  NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
];
let set = new Set(items);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arr) {
      let closure_0;
      let tmp3;
      const obj = require("react");
      const cResult = obj.c(2);
      if (cResult[0] !== arr) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const items = [];
        _require = items;
        const item = arr.forEach((applicationId) => {
          applicationId = applicationId.applicationId;
          if (set.has(applicationId.type)) {
            const hasItem = null == applicationId || set.has(applicationId);
            if (!hasItem) {
              set.add(applicationId);
              closure_0.push(applicationId);
            }
          }
        });
        cResult[0] = arr;
        cResult[1] = items;
        tmp3 = items;
      } else {
        _require = cResult[1];
      }
      return set(6670)(tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      let items = [arg0];
      const memo = react.useMemo(() => {
        set = new Set();
        const items = [];
        const item = closure_0.forEach((applicationId) => {
          applicationId = applicationId.applicationId;
          if (set.has(applicationId.type)) {
            const hasItem = null == applicationId || set.has(applicationId);
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
const result = size.fileFinishedImporting(
  "modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx",
);

export const useGetOrFetchNotificationCenterItemsApplications = tmp3;
