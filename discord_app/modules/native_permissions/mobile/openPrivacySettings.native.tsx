// discord_app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeDeviceSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
