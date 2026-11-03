// === Module 8088: openPrivacySettings ===

// Module 8088 (openPrivacySettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 7236 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
};