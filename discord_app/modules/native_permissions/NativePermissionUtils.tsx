// === Module 5224: NativePermissionUtils ===

// Module 5224 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5225 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5226).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5227).default;
} else {
  _default = fn(5231).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5228).NativePermissionsRequestOptions;