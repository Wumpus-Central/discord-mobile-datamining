// === Module 5637: NativePermissionUtils ===

// Module 5637 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5638 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5639).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5640).default;
} else {
  _default = fn(5644).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5641).NativePermissionsRequestOptions;