// discord_app/components_native/common/Notifications.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import InAppNotificationContainerDefault from "../../modules/in_app_notifications/native/InAppNotificationContainer.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import InAppNotificationStore from "../../stores/native/InAppNotificationStore.tsx";

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
}
