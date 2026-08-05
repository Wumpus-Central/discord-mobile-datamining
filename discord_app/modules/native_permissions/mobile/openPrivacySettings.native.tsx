// discord_app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
import { NativeModules } from "get ActivityIndicator";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    enforcing.openPrivacySettings();
    const obj2 = enforcing;
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};