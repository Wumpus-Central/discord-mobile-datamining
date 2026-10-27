// === Module 955: browserSessionIntegration ===

// Module 955 (browserSessionIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 902 */;
import triggerHandlers from "triggerHandlers" /* 907 */;
import _mod946 from "module_946" /* 946 */;
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
    } else if (_mod946.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));