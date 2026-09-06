// === Module 683: ? ===

// Module 683
import spanToJSON from "spanToJSON" /* 684 */;
import _mod688 from "module_688" /* 688 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import instrumentError from "instrumentError" /* 714 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 716 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    function errorCallback() {
      let obj = spanToJSON;
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = spanToJSON.getRootSpan(activeSpan);
        const tmpResult = spanToJSON;
      }
      if (rootSpan) {
        if (_mod688.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        rootSpan.setStatus(obj);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};