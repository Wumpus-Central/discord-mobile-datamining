// === Module 8030: NativePermissionUtils ===

// Module 8030 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7446 */;
import requestPermissionCore from "requestPermissionCore" /* 8031 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 8032 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 8035 */;
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