// === Module 7795: NativePermissionUtils ===

// Module 7795 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7796 */;
import requestPermissionCore from "requestPermissionCore" /* 7797 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7798 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7801 */;
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