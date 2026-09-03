// === Module 15324: hasAndroidNotificationChannels ===

// Module 15324 (hasAndroidNotificationChannels)
import set from "set" /* 2 */;
import set2 from "set" /* 1234 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = set2.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DCDDeviceManager.getSystemVersion(), 10) >= 26;
    const tmpResult = DCDDeviceManager;
  }
  return isAndroidResult;
};