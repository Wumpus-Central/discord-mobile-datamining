import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getRelativeTimestamp } from "NotificationCenterUtils.tsx";
// discord_app/modules/notification_center/useNotificationCenterItemAcked.tsx
import handleLoadFinished from "handleLoadFinished";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [handleLoadFinished];
  let stateFromStores = _initialize.useStateFromStores(items, () => outer1_2.isLocalItemAcked(closure_0));
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