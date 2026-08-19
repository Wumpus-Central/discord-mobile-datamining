// === Module 15675: useNotificationCenterItemAcked ===

// Module 15675 (useNotificationCenterItemAcked)
import handleLoadFinished from "handleLoadFinished" /* 15668 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _require(4967).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(4967);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};