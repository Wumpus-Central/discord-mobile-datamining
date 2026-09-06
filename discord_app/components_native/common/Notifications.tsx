// === Module 10078: common/Notifications ===

// Module 10078 (common/Notifications)
import initialize from "initialize" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 10105 */;
import noop from "module_19" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 10079 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = initialize;
  const items = [InAppNotificationStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: stateFromStores };
    tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp3;
};