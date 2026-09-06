// discord_app/modules/native_permissions/mobile/openNotificationSettings.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeDeviceSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
