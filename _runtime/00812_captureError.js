// _runtime/00812_captureError.js
import _mod713 from "metro/00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const captureError = function captureError(error, prompt_execution, arg2) {
  try {
    let obj = _mod713;
    if (obj.getClient()) {
      let tmpResult = tmp(684);
      const activeSpan = tmpResult.getActiveSpan();
      let isRecordingResult;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: tmp(705).SPAN_STATUS_ERROR, message: "internal_error" };
        activeSpan.setStatus(obj);
      }
      let str = prompt_execution;
      tmpResult = tmp(734);
      if (!prompt_execution) {
        str = "handler_execution";
      }
      obj = { mechanism: null };
      const obj1 = { type: "auto.ai.mcp_server", handled: false, data: null };
      const obj2 = { error_type: str };
      const merged = Object.assign(arg2);
      obj1.data = obj2;
      obj.mechanism = obj1;
      tmpResult.captureException(error, obj);
    }
  } catch (err) {}
};
