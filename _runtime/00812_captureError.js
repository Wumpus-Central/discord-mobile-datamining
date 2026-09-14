// === Module 812: captureError ===

// Module 812 (captureError)
import spanToJSON from "spanToJSON" /* 684 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import _mod713 from "module_713" /* 713 */;
import captureCheckIn from "captureCheckIn" /* 734 */;

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
    obj = _mod713;
  } catch (err) {
  }
};