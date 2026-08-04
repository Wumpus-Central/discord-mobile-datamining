// discord_common/js/shared/shared-constants/AppCrashedReasons.tsx
import set from "set";

const obj = { ALL: null };
let set = new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;