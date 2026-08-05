// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require("../../../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */;
  }
  return isAndroidResult;
};