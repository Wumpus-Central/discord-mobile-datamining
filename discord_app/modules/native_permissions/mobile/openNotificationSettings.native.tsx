// discord_app/modules/native_permissions/mobile/openNotificationSettings.native.tsx
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx").openNotificationSettings();
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};