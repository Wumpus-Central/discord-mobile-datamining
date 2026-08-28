// === Module 5048: NativePermissionsRequestOptions ===

// Module 5048 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5050 */;
import importDefaultResult from "isEnabled" /* 5049 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;