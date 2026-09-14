// _runtime/00946_browserSessionIntegration.js
import ignoreNextOnError from "00893_ignoreNextOnError.js";
import triggerHandlers from "00898_triggerHandlers.js";
import _mod937 from "metro/00937__.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

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
          closure_1_0(682).startSession({ ignoreDuration: true });
          const obj = closure_1_0(682);
          closure_1_0(682).captureSession();
          const obj2 = closure_1_0(682);
        }
        tmp = undefined !== from && from !== arg0.to;
      });
      const tmpResult4 = triggerHandlers;
    } else if (_mod937.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  },
}));
