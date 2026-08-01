// === Module 1066: instrumentHistory ===

// Module 1066 (instrumentHistory)
const require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = require(1039) /* WINDOW */.WINDOW;
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
      let closure_0 = arg0;
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
          const outer1_2 = tmp4;
          if (outer1_2 === tmp4) {
            return callback.apply(self, items);
          } else {
            const obj = { from: null, to: null };
            obj[0] = tmp2;
            obj[1] = tmp4;
            callback(outer1_1[0]).triggerHandlers("history", obj);
            const obj2 = callback(outer1_1[0]);
          }
          tmp2 = outer1_2;
        }
        return callback.apply(self, items);
      };
    }
    let tmpResult = tmp(817);
    tmpResult.fill(tmp(1039).WINDOW.history, "pushState", historyReplacementFunction);
    tmpResult = tmp(817);
    tmpResult.fill(tmp(1039).WINDOW.history, "replaceState", historyReplacementFunction);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  require(817) /* registerSpanErrorInstrumentation */.addHandler("history", arg0);
  const obj = require(817) /* registerSpanErrorInstrumentation */;
  require(817) /* registerSpanErrorInstrumentation */.maybeInstrument("history", instrumentHistory);
};
arg5.instrumentHistory = instrumentHistory;