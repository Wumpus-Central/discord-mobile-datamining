// discord_app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx").openPrivacySettings();
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};