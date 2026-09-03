// === Module 16257: useNotificationCenterItemAcked ===

// Module 16257 (useNotificationCenterItemAcked)
import closure_2 from "handleLoadFinished" /* 16250 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _require(7396).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(7396);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};