// discord_app/modules/notification_center/useNotificationCenterItemAcked.tsx
import handleLoadFinished from "NotificationCenterStore.tsx";
import { getRelativeTimestamp } from "NotificationCenterUtils.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = require("NotificationCenterUtils.tsx").isRemoteAcked(item, ackedBeforeId);
      const tmpResult = getRelativeTimestamp;
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};