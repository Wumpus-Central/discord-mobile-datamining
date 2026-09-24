// === Module 5443: NativePermissionUtils ===

// Module 5443 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5444 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5445).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5446).default;
} else {
  _default = fn(5450).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5447).NativePermissionsRequestOptions;