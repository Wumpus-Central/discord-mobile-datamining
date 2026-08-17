// discord_app/modules/notification_center/useNotificationCenterItemAcked.tsx
import closure_2 from "NotificationCenterStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getRelativeTimestamp } from "NotificationCenterUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = _initialize.useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _getRelativeTimestamp.isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _getRelativeTimestamp;
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};