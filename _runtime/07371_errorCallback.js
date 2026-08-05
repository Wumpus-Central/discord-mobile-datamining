// _runtime/07371_errorCallback.js
import { instrumentError } from "07372_instrumentError.js";
import { instrumentUnhandledRejection } from "07379_instrumentUnhandledRejection.js";
import { spanTimeInputToSeconds } from "07380_spanTimeInputToSeconds.js";
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7380).getRootSpan(activeSpan);
    const tmpResult = tmp(7380);
  }
  if (rootSpan) {
    if (tmp(7403).DEBUG_BUILD) {
      const logger = tmp(7375).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7392).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = instrumentError /* instrumentError */;
    const result1 = instrumentUnhandledRejection /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = instrumentUnhandledRejection /* instrumentUnhandledRejection */;
  }
};