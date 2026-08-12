// _runtime/07491_errorCallback.js
import { instrumentError } from "07492_instrumentError.js";
import { instrumentUnhandledRejection } from "07499_instrumentUnhandledRejection.js";
import { spanTimeInputToSeconds } from "07500_spanTimeInputToSeconds.js";
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7500).getRootSpan(activeSpan);
    const tmpResult = tmp(7500);
  }
  if (rootSpan) {
    if (tmp(7523).DEBUG_BUILD) {
      const logger = tmp(7495).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7512).SPAN_STATUS_ERROR;
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