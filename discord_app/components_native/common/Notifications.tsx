// === Module 12464: common/Notifications ===

// Module 12464 (common/Notifications)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 12484 */;
import react from "react" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 12465 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentNotification;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InAppNotificationStore];
    const fn = function c() {
      return currentNotification.getCurrentNotification();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[2] !== stateFromStores) {
      const tmp12 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
      cResult[2] = stateFromStores;
      cResult[3] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[3];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : (() => {
  let currentNotification;
  const items = [InAppNotificationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp3;
});
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default tmp3;