// === Module 7275: NativePermissionUtils ===

// Module 7275 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 7276 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(6714).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(7277).default;
} else {
  _default = fn(7281).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(7278).NativePermissionsRequestOptions;