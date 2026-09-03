// === Module 5092: NativePermissionsRequestOptions ===

// Module 5092 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5094 */;
import importDefaultResult from "isEnabled" /* 5093 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;