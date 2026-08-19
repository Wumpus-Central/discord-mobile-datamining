// === Module 11581: openNotificationSettings ===

// Module 11581 (openNotificationSettings)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 4849 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = obj132.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = enforcingDefault.openNotificationSettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
  obj = obj1322;
};