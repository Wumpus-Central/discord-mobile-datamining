// _runtime/00818_registerSpanErrorInstrumentation.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    function errorCallback() {
      let obj = callback(table[0]);
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = tmp(tmp2[0]).getRootSpan(activeSpan);
        const tmpResult = tmp(tmp2[0]);
      }
      if (rootSpan) {
        if (tmp(tmp2[1]).DEBUG_BUILD) {
          const debug = tmp(tmp2[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        obj = { code: null, message: "internal_error" };
        obj[0] = tmp(tmp2[3]).SPAN_STATUS_ERROR;
        rootSpan.setStatus(obj);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = require("00849_instrumentError.js") /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj = require("00849_instrumentError.js") /* instrumentError */;
    const result1 = require("00851_instrumentUnhandledRejection.js") /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require("00851_instrumentUnhandledRejection.js") /* instrumentUnhandledRejection */;
  }
};