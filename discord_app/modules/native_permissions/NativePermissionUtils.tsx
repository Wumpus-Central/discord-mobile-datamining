// === Module 4840: NativePermissionsRequestOptions ===

// Module 4840 (NativePermissionsRequestOptions)
import { ProcessArgs } from "get" /* 4842 */;
import importDefaultResult from "isEnabled" /* 4841 */;

importDefaultResult.initialize();
if (ProcessArgs.isDiscordTestSet()) {
  let _default = require("requestPermissionCore").default;
} else {
  _default = require("combineStatuses").default;
}
const result = require("obj132").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = require("requestAuthorization").NativePermissionsRequestOptions;