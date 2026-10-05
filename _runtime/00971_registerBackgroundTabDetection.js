// === Module 971: registerBackgroundTabDetection ===

// Module 971 (registerBackgroundTabDetection)
import _mod693 from "module_693" /* 693 */;
import _mod904 from "module_904" /* 904 */;
import _mod948 from "module_948" /* 948 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (_mod904.WINDOW.document) {
    const _document = _mod904.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      const obj = _mod693;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = _mod693;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (_mod904.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod693;
            ({ op, status } = tmpResult2.spanToJSON(rootSpan));
            tmpResult2.spanToJSON(rootSpan);
            if (_mod948.DEBUG_BUILD) {
              const debug = _mod693.debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const setStatus = rootSpan.setStatus;
              const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
              setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
          }
        }
      }
    });
  } else if (_mod948.DEBUG_BUILD) {
    let debug = _mod693.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};