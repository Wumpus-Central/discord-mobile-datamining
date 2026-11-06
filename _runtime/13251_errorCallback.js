// _runtime/13251_errorCallback.js
import _mod13252 from "metro/13252__.js";
import _mod13255 from "metro/13255__.js";
import _mod13259 from "metro/13259__.js";
import spanTimeInputToSeconds from "13260_spanTimeInputToSeconds.js";
import _mod13272 from "metro/13272__.js";
import _mod13283 from "metro/13283__.js";

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
    if (_mod13283.DEBUG_BUILD) {
      const logger = _mod13255.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13272.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13252.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13259.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
