// discord_app/modules/native_permissions/mobile/openPrivacySettings.native.tsx
import NativeDeviceSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
}
