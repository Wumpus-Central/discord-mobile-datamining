// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import DCDDeviceManager from "../../../../utils/native/DeviceUtils.tsx";

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