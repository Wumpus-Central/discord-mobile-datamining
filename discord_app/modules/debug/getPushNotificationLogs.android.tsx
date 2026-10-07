// discord_app/modules/debug/getPushNotificationLogs.android.tsx
import NativePushNotificationMonitorModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativePushNotificationMonitorModule.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs() {
  const pushNotificationLogs = NativePushNotificationMonitorModuleDefault.getPushNotificationLogs(
    AuthenticationStore.getId(),
  );
  return pushNotificationLogs.then((result) => {
    let pushNotifications = JSON.parse(result).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
}
