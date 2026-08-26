// === Module 9973: Notifications ===

// Module 9973 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10007 */;
import closure_3 from "handleAlertMessage" /* 9974 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: null };
    obj[0] = stateFromStores;
    tmp3 = jsx(NotificationWrapperDefault, { notification: null }, stateFromStores.key);
  }
  return tmp3;
};