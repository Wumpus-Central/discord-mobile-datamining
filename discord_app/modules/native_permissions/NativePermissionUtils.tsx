// === Module 8097: NativePermissionUtils ===

// Module 8097 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7519 */;
import requestPermissionCore from "requestPermissionCore" /* 8098 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8099 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8102 */;
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