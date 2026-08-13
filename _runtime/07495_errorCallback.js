// _runtime/07495_errorCallback.js
import { instrumentError } from "07496_instrumentError.js";
import { instrumentUnhandledRejection } from "07503_instrumentUnhandledRejection.js";
import { spanTimeInputToSeconds } from "07504_spanTimeInputToSeconds.js";
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7504).getRootSpan(activeSpan);
    const tmpResult = tmp(7504);
  }
  if (rootSpan) {
    if (tmp(7527).DEBUG_BUILD) {
      const logger = tmp(7499).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7516).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = instrumentError;
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = instrumentUnhandledRejection;
  }
};