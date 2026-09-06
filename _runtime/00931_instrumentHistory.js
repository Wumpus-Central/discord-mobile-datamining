// === Module 931: instrumentHistory ===

// Module 931 (instrumentHistory)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;
import WINDOW2 from "WINDOW" /* 904 */;

require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = WINDOW2.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = callback(table[1]).WINDOW.location.href;
    if (href !== href) {
      const obj = { from: null, to: null };
      obj[0] = tmp3;
      obj[1] = href;
      callback(table[0]).triggerHandlers("history", obj);
      const tmpResult = callback(table[0]);
    }
  });
  if (obj.supportsHistory()) {
    function historyReplacementFunction(arg0) {
      closure_0 = arg0;
      return function() {
        const items = [...arguments];
        let tmp;
        if (items.length > 2) {
          tmp = items[2];
        }
        const self = this;
        if (tmp) {
          const _String = String;
          const tmp4 = (function getAbsoluteUrl(arg0) {
            try {
              const _URL = URL;
              const str = new URL(arg0, callback(table[1]).WINDOW.location.origin);
              return str.toString();
            } catch (err) {
              return tmp;
            }
          })(String(tmp));
          closure_2 = tmp4;
          if (closure_2 === tmp4) {
            return callback.apply(self, items);
          } else {
            const obj = { from: null, to: null };
            obj[0] = tmp2;
            obj[1] = tmp4;
            callback(closure_1_1[0]).triggerHandlers("history", obj);
            const obj2 = callback(closure_1_1[0]);
          }
          tmp2 = closure_2;
        }
        return callback.apply(self, items);
      };
    }
    let tmpResult = tmp(682);
    tmpResult.fill(tmp(904).WINDOW.history, "pushState", historyReplacementFunction);
    tmpResult = tmp(682);
    tmpResult.fill(tmp(904).WINDOW.history, "replaceState", historyReplacementFunction);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  registerSpanErrorInstrumentation.addHandler("history", arg0);
  const obj = registerSpanErrorInstrumentation;
  registerSpanErrorInstrumentation.maybeInstrument("history", instrumentHistory);
};
arg5.instrumentHistory = instrumentHistory;