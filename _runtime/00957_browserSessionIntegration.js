// === Module 957: browserSessionIntegration ===

// Module 957 (browserSessionIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 904 */;
import triggerHandlers from "triggerHandlers" /* 909 */;
import _mod948 from "module_948" /* 948 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

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
          closure_1_0(693).startSession({ ignoreDuration: true });
          const obj = closure_1_0(693);
          closure_1_0(693).captureSession();
          const obj2 = closure_1_0(693);
        }
        tmp = undefined !== from && from !== arg0.to;
      });
      const tmpResult4 = triggerHandlers;
    } else if (_mod948.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));