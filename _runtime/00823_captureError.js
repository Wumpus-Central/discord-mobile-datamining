// === Module 823: captureError ===

// Module 823 (captureError)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 716 */;
import _mod724 from "module_724" /* 724 */;
import _mod745 from "module_745" /* 745 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureError = function captureError(error, prompt_execution, arg2) {
  let obj4;
  let obj5;
  try {
    const obj = _mod724;
    if (obj.getClient()) {
      const tmpResult = TRACE_FLAG_NONE;
      const activeSpan = tmpResult.getActiveSpan();
      let isRecordingResult;
      const tmp3 = activeSpan;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        const setStatus = tmp3.setStatus;
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus(obj2);
      }
      let str = prompt_execution;
      const captureException = _mod745.captureException;
      _mod745;
      if (!prompt_execution) {
        str = "handler_execution";
      }
      const obj3 = { mechanism: obj4 };
      obj4 = { type: "auto.ai.mcp_server", handled: false, data: obj5 };
      obj5 = { error_type: str };
      const merged = Object.assign(arg2);
      captureException(error, obj3);
    }
  } catch (err) {
  }
};