// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(require(4265) /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = require(4265) /* DCDDeviceManager */;
  }
  return isAndroidResult;
};