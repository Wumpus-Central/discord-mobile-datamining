// === Module 5147: openPrivacySettings ===

// Module 5147 (openPrivacySettings)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5148 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    NativeDeviceSettingsModuleDefault.openPrivacySettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
  obj = PlatformUtils;
};