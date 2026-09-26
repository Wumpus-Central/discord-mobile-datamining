// _runtime/12309_errorCallback.js
import _mod12310 from "metro/12310__.js";
import _mod12313 from "metro/12313__.js";
import _mod12317 from "metro/12317__.js";
import spanTimeInputToSeconds from "12318_spanTimeInputToSeconds.js";
import _mod12330 from "metro/12330__.js";
import _mod12341 from "metro/12341__.js";

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
    if (_mod12341.DEBUG_BUILD) {
      const logger = _mod12313.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12330.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12310.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12317.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
