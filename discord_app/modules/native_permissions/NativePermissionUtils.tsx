// === Module 7870: NativePermissionUtils ===

// Module 7870 (NativePermissionUtils)
import ProcessArgs2 from "ProcessArgs" /* 7295 */;
import requestPermissionCore from "requestPermissionCore" /* 7871 */;
import NativePermissionBaseUtils from "NativePermissionBaseUtils" /* 7872 */;
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils" /* 7875 */;
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