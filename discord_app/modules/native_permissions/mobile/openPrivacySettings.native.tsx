// discord_app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    enforcingDefault.openPrivacySettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
  obj = obj1322;
};