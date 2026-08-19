// _runtime/01081_browserSessionIntegration.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== callback(table[1]).WINDOW.document) {
      let tmpResult = callback(table[0]);
      tmpResult.startSession({ ignoreDuration: true });
      tmpResult = callback(table[0]);
      tmpResult.captureSession();
      const result = callback(table[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          callback(817).startSession({ ignoreDuration: true });
          const obj = callback(817);
          callback(817).captureSession();
          const obj2 = callback(817);
        }
        tmp = undefined !== from && from !== arg0.to;
      });
      const tmpResult1 = callback(table[3]);
    } else if (callback(table[2]).DEBUG_BUILD) {
      const debug = callback(table[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));