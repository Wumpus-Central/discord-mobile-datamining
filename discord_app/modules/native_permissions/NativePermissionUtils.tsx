// === Module 8026: NativePermissionUtils ===

// Module 8026 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7443 */;
import requestPermissionCore from "requestPermissionCore" /* 8027 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8028 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8031 */;
import size from "module_2" /* 2 */;

const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = requestPermissionCore.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;