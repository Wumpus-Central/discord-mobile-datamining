// discord_common/js/shared/shared-constants/AppCrashedReasons.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { ALL: new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = {
  UNHANDLED_NATIVE_ERROR: "unhandled_native_error",
  UNHANDLED_JS_ERROR: "unhandled_js_error",
  SOCKET_CRASHED: "socket_crashed",
};
export const AppCrashedReasonsSets = obj;
