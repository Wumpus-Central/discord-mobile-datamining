// === Module 10300: getPushNotificationLogs ===

// Module 10300 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 9676 */;
import closure_2 from "fetchFingerprint" /* 1215 */;

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = enforcingDefault.getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};