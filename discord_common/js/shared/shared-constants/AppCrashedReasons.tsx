// === Module 13567: set ===

// Module 13567 (set)
import obj132 from "obj132" /* 2 */;

const obj = { ALL: new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]) };
const set = new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;