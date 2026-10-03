// === Module 971: registerBackgroundTabDetection ===

// Module 971 (registerBackgroundTabDetection)
import _mod693 from "module_693" /* 693 */;
import ignoreNextOnError from "ignoreNextOnError" /* 904 */;
import _mod948 from "module_948" /* 948 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = ignoreNextOnError.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      const activeSpan = _mod693.getActiveSpan();
      if (activeSpan) {
        const rootSpan = _mod693.getRootSpan(activeSpan);
        if (ignoreNextOnError.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod693;
            ({ op, status } = _mod693.spanToJSON(rootSpan));
            if (_mod948.DEBUG_BUILD) {
              const debug = _mod693.debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = _mod693.spanToJSON(rootSpan);
          }
        }
        const tmpResult = _mod693;
      }
    });
  } else if (_mod948.DEBUG_BUILD) {
    let debug = _mod693.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};