// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import set2 from "../../../../utils/PlatformUtils.tsx";
import DCDDeviceManager from "../../../../utils/native/DeviceUtils.tsx";

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