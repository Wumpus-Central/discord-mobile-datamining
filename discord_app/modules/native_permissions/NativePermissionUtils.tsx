// === Module 8203: NativePermissionUtils ===

// Module 8203 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 8204 */;
import requestPermissionCore from "requestPermissionCore" /* 8205 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8206 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8209 */;
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