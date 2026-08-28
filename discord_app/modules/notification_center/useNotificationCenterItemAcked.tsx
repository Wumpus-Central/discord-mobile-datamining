// === Module 15938: useNotificationCenterItemAcked ===

// Module 15938 (useNotificationCenterItemAcked)
import closure_2 from "handleLoadFinished" /* 15931 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _require(7333).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(7333);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};