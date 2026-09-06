// === Module 14082: AppCrashedReasons ===

// Module 14082 (AppCrashedReasons)
import size from "module_2" /* 2 */;

const obj = { ALL: new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;