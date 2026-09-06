// === Module 9690: openNotificationSettings ===

// Module 9690 (openNotificationSettings)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5148 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
  obj = PlatformUtils;
};