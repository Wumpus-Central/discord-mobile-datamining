// === Module 15482: SettingsNotificationUtils ===

// Module 15482 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
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