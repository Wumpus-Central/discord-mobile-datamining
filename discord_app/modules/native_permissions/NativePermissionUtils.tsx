// === Module 5444: NativePermissionUtils ===

// Module 5444 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5445 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5446).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5447).default;
} else {
  _default = fn(5451).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5448).NativePermissionsRequestOptions;