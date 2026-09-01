// _runtime/00947_captureError.js
import getClient from "00848_getClient.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureError = function captureError(error, prompt_execution, arg2) {
  try {
    let obj = getClient;
    if (obj.getClient()) {
      let tmpResult = tmp(819);
      const activeSpan = tmpResult.getActiveSpan();
      let isRecordingResult;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: null, message: "internal_error" };
        obj[0] = tmp(840).SPAN_STATUS_ERROR;
        activeSpan.setStatus(obj);
      }
      let str = prompt_execution;
      tmpResult = tmp(869);
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
    }
  } catch (err) {}
};
