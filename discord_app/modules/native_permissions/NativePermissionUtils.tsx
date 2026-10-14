// === Module 7506: NativePermissionUtils ===

// Module 7506 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 6916 */;
import requestPermissionCore from "requestPermissionCore" /* 7507 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7508 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7511 */;
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