// _runtime/12561_errorCallback.js
import _mod12562 from "metro/12562__.js";
import _mod12565 from "metro/12565__.js";
import _mod12569 from "metro/12569__.js";
import spanTimeInputToSeconds from "12570_spanTimeInputToSeconds.js";
import _mod12582 from "metro/12582__.js";
import _mod12593 from "metro/12593__.js";

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
    if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12582.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12562.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12569.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
