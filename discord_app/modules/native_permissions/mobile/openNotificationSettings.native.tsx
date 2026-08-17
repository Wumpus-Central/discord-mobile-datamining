// discord_app/modules/native_permissions/mobile/openNotificationSettings.native.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 4849 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = enforcingDefault.openNotificationSettings();
    const obj2 = enforcingDefault;
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};