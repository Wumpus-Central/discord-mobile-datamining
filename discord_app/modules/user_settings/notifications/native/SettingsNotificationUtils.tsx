// discord_app/modules/user_settings/notifications/native/SettingsNotificationUtils.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DeviceUtils from "../../../../utils/native/DeviceUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
