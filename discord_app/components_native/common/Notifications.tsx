// === Module 10078: Notifications ===

// Module 10078 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10105 */;
import closure_3 from "handleAlertMessage" /* 10079 */;
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