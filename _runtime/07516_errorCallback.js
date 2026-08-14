// _runtime/07516_errorCallback.js
import { instrumentError } from "07517_instrumentError.js";
import { instrumentUnhandledRejection } from "07524_instrumentUnhandledRejection.js";
import { spanTimeInputToSeconds } from "07525_spanTimeInputToSeconds.js";
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7525).getRootSpan(activeSpan);
    const tmpResult = tmp(7525);
  }
  if (rootSpan) {
    if (tmp(7548).DEBUG_BUILD) {
      const logger = tmp(7520).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7537).SPAN_STATUS_ERROR;
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