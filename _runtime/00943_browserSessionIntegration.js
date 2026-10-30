// === Module 943: browserSessionIntegration ===

// Module 943 (browserSessionIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 890 */;
import triggerHandlers from "triggerHandlers" /* 895 */;
import _mod934 from "module_934" /* 934 */;
import registerSpanErrorInstrumentation from "module_681" /* 681 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== ignoreNextOnError.WINDOW.document) {
      registerSpanErrorInstrumentation.startSession({ ignoreDuration: true });
      const tmpResult = registerSpanErrorInstrumentation;
      registerSpanErrorInstrumentation.captureSession();
      const tmpResult3 = registerSpanErrorInstrumentation;
      const result = triggerHandlers.addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          closure_1_0(681).startSession({ ignoreDuration: true });
          const obj = closure_1_0(681);
          closure_1_0(681).captureSession();
          const obj2 = closure_1_0(681);
        }
        tmp = undefined !== from && from !== arg0.to;
      });
      const tmpResult4 = triggerHandlers;
    } else if (_mod934.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));