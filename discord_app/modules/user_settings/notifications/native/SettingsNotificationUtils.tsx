import { DCDDeviceManager } from "../../../../utils/native/DeviceUtils.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";
// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = set /* set */.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DCDDeviceManager /* DCDDeviceManager */.getSystemVersion(), 10) >= 26;
    const tmpResult = DCDDeviceManager /* DCDDeviceManager */;
  }
  return isAndroidResult;
};