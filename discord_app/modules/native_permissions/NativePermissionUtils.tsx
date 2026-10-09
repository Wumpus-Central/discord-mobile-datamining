// === Module 7499: NativePermissionUtils ===

// Module 7499 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6904 */;
import requestPermissionCore from "requestPermissionCore" /* 7500 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7501 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7504 */;
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