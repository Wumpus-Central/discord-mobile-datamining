// discord_app/components_native/common/Notifications.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import NotificationWrapperDefault from "../../modules/in_app_notifications/native/InAppNotificationContainer.tsx";
import handleAlertMessage from "../../stores/native/InAppNotificationStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

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