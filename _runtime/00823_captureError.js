// _runtime/00823_captureError.js
import spanToJSON from "00695_spanToJSON.js";
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod724 from "metro/00724__.js";
import captureCheckIn from "00745_captureCheckIn.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const captureError = function captureError(error, prompt_execution, arg2) {
  try {
    if (obj.getClient()) {
      const activeSpan = spanToJSON.getActiveSpan();
      let isRecordingResult;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        obj4.setStatus(obj2);
      }
      let str = prompt_execution;
      obj4 = activeSpan;
      const tmpResult = spanToJSON;
      if (!prompt_execution) {
        str = "handler_execution";
      }
      const obj3 = { mechanism: null };
      const obj5 = { type: "auto.ai.mcp_server", handled: false, data: null };
      const obj6 = { error_type: str };
      const merged = Object.assign(arg2);
      obj5.data = obj6;
      obj3.mechanism = obj5;
      captureCheckIn.captureException(error, obj3);
      const tmpResult2 = captureCheckIn;
    }
    obj = _mod724;
  } catch (err) {}
};
