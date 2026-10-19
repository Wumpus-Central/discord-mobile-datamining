// _runtime/12402_errorCallback.js
import _mod12403 from "metro/12403__.js";
import _mod12406 from "metro/12406__.js";
import _mod12410 from "metro/12410__.js";
import spanTimeInputToSeconds from "12411_spanTimeInputToSeconds.js";
import _mod12423 from "metro/12423__.js";
import _mod12434 from "metro/12434__.js";

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
    if (_mod12434.DEBUG_BUILD) {
      const logger = _mod12406.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12423.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12403.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12410.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
