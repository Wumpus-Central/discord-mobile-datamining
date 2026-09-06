// === Module 5139: NativePermissionsRequestOptions ===

// Module 5139 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 5141 */;
import importDefaultResult from "isEnabled" /* 5140 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;