import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { NotificationWrapper } from "../../modules/in_app_notifications/native/InAppNotificationContainer.tsx";
// discord_app/components_native/common/Notifications.tsx
import "noop";
import handleAlertMessage from "handleAlertMessage";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = initialize /* initialize */;
  const items = [handleAlertMessage];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: null };
    obj[0] = stateFromStores;
    tmp3 = jsx(NotificationWrapper, { notification: null }, stateFromStores.key);
  }
  return tmp3;
};