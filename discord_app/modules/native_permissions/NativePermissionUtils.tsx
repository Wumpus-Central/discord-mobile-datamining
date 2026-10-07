// === Module 7288: NativePermissionUtils ===

// Module 7288 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 7289 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(6721).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(7290).default;
} else {
  _default = fn(7294).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(7291).NativePermissionsRequestOptions;