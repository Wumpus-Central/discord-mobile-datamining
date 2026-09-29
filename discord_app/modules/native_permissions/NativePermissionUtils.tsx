// discord_app/modules/native_permissions/NativePermissionUtils.tsx
import NativePermissionManager_mod from "NativePermissionManager.tsx";

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5620).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5621).default;
} else {
  _default = fn(5625).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5622).NativePermissionsRequestOptions;
