// === Module 682: ? ===

// Module 682
import spanToJSON from "spanToJSON" /* 683 */;
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 704 */;
import instrumentError from "instrumentError" /* 713 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 715 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    function errorCallback() {
      const activeSpan = spanToJSON.getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = spanToJSON.getRootSpan(activeSpan);
        const tmpResult = spanToJSON;
      }
      if (rootSpan) {
        if (_mod687.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        rootSpan.setStatus(obj2);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}