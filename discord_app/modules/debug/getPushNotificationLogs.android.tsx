// === Module 10133: getPushNotificationLogs ===

// Module 10133 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 10134 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

const result = require("obj132").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = enforcingDefault.getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((result) => {
    let pushNotifications = JSON.parse(result).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};