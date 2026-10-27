// === Module 16883: SettingsNotificationUtils ===

// Module 16883 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import DeviceUtils from "DeviceUtils" /* 4929 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DeviceUtils.getSystemVersion(), 10) >= 26;
    const tmpResult = DeviceUtils;
  }
  return isAndroidResult;
};