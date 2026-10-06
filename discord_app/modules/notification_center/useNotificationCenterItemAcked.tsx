// === Module 16401: useNotificationCenterItemAcked ===

// Module 16401 (useNotificationCenterItemAcked)
import NotificationCenterStore from "NotificationCenterStore" /* 16394 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((forceUnacked, setting) => {
  let first;
  let tmp6;
  _require = forceUnacked;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== forceUnacked) {
    const fn = function s() {
      return NotificationCenterStore.isLocalItemAcked(forceUnacked);
    };
    cResult[1] = forceUnacked;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = !forceUnacked.forceUnacked;
  if (tmp8) {
    if (cResult[3] === setting) {
      if (cResult[4] === stateFromStores) {
        let tmp10;
        if (cResult[5] === forceUnacked) {
          tmp10 = cResult[6];
        }
        tmp8 = tmp10;
      }
    }
    let isRemoteAckedResult = stateFromStores;
    if (!isRemoteAckedResult) {
      const tmpResult2 = require("NotificationCenterUtils");
      isRemoteAckedResult = tmpResult2.isRemoteAcked(forceUnacked, setting);
    }
    cResult[3] = setting;
    cResult[4] = stateFromStores;
    cResult[5] = forceUnacked;
    cResult[6] = isRemoteAckedResult;
    tmp10 = isRemoteAckedResult;
  }
  return tmp8;
}) : ((forceUnacked, setting) => {
  _require = forceUnacked;
  const items = [NotificationCenterStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => NotificationCenterStore.isLocalItemAcked(forceUnacked));
  let tmp4 = !forceUnacked.forceUnacked;
  const tmp = _require;
  if (tmp4) {
    if (!stateFromStores) {
      const tmpResult = tmp(7139);
      stateFromStores = tmpResult.isRemoteAcked(forceUnacked, setting);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = tmp2;