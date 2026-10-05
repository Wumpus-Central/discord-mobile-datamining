// === Module 7275: NativePermissionUtils ===

// Module 7275 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6714 */;
import nativePermissionDesktopNullUtils from "nativePermissionDesktopNullUtils" /* 7277 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7278 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7281 */;
import NativePermissionManager_mod from "NativePermissionManager" /* 7276 */;
import size from "module_2" /* 2 */;

let _default;
let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  _default = nativePermissionDesktopNullUtils.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;