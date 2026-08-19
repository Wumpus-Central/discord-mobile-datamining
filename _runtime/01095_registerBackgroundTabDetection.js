// === Module 1095: registerBackgroundTabDetection ===

// Module 1095 (registerBackgroundTabDetection)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import ignoreNextOnError from "ignoreNextOnError" /* 1028 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1072 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = ignoreNextOnError.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", (event) => {
      let obj = callback(table[1]);
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        let tmpResult = callback(table[1]);
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (callback(table[0]).WINDOW.document.hidden) {
          if (rootSpan) {
            tmpResult = callback(table[1]);
            ({ op, status } = tmpResult.spanToJSON(rootSpan));
            if (callback(table[2]).DEBUG_BUILD) {
              const debug = callback(table[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              obj = { code: null, message: "cancelled" };
              obj[0] = callback(table[1]).SPAN_STATUS_ERROR;
              rootSpan.setStatus(obj);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = tmpResult.spanToJSON(rootSpan);
          }
        }
      }
    });
  } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    let debug = registerSpanErrorInstrumentation.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};