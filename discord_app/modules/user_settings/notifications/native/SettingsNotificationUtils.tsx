// === Module 14790: hasAndroidNotificationChannels ===

// Module 14790 (hasAndroidNotificationChannels)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = obj132.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = obj1322.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DCDDeviceManager.getSystemVersion(), 10) >= 26;
    const tmpResult = DCDDeviceManager;
  }
  return isAndroidResult;
};