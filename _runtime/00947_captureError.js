// === Module 947: captureError ===

// Module 947 (captureError)
import spanToJSON from "spanToJSON" /* 819 */;
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 840 */;
import getClient from "getClient" /* 848 */;
import captureCheckIn from "captureCheckIn" /* 869 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureError = function captureError(error, prompt_execution, arg2) {
  try {
    let obj = getClient;
    if (obj.getClient()) {
      let tmpResult = spanToJSON;
      const activeSpan = tmpResult.getActiveSpan();
      let isRecordingResult;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: null, message: "internal_error" };
        obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
        obj4.setStatus(obj);
      }
      let str = prompt_execution;
      tmpResult = captureCheckIn;
      if (!prompt_execution) {
        str = "handler_execution";
      }
      obj = { mechanism: null };
      obj1 = { type: "auto.ai.mcp_server", handled: false, data: null };
      const obj2 = { error_type: null };
      obj2[0] = str;
      const merged = Object.assign(arg2);
      obj1[2] = obj2;
      obj[0] = obj1;
      tmpResult.captureException(error, obj);
      obj4 = activeSpan;
    }
  } catch (err) {
  }
};