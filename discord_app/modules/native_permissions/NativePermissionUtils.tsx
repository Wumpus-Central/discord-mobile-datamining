// === Module 5618: NativePermissionUtils ===

// Module 5618 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5619 */;

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