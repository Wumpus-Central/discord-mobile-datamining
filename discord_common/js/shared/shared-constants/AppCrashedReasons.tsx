// discord_common/js/shared/shared-constants/AppCrashedReasons.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { ALL: new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]) };
const set = new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;