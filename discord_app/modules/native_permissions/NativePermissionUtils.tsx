// === Module 4845: NativePermissionsRequestOptions ===

// Module 4845 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 4847 */;
import importDefaultResult from "isEnabled" /* 4846 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;