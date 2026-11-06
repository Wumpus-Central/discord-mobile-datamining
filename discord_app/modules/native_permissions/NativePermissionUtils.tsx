// === Module 8048: NativePermissionUtils ===

// Module 8048 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7466 */;
import requestPermissionCore from "requestPermissionCore" /* 8049 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8050 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8053 */;
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