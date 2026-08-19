// === Module 10012: Notifications ===

// Module 10012 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10045 */;
import handleAlertMessage from "handleAlertMessage" /* 10013 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("components_native/common/Notifications.tsx");

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