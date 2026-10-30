// _runtime/13000_errorCallback.js
import _mod13001 from "metro/13001__.js";
import _mod13004 from "metro/13004__.js";
import _mod13008 from "metro/13008__.js";
import spanTimeInputToSeconds from "13009_spanTimeInputToSeconds.js";
import _mod13021 from "metro/13021__.js";
import _mod13032 from "metro/13032__.js";

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const tmpResult = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (_mod13032.DEBUG_BUILD) {
      const logger = _mod13004.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13021.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13001.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13008.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
