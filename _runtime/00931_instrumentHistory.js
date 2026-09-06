// === Module 931: instrumentHistory ===

// Module 931 (instrumentHistory)
import _mod682 from "module_682" /* 682 */;
import _mod904 from "module_904" /* 904 */;

require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = _mod904.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = _mod904.WINDOW.location.href;
    closure_2 = href;
    if (closure_2 !== href) {
      const obj = { from: tmp3, to: href };
      _mod682.triggerHandlers("history", obj);
      const tmpResult = _mod682;
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
              const str = new URL(arg0, closure_1_0(closure_1_1[1]).WINDOW.location.origin);
              return str.toString();
            } catch (err) {
              return tmp;
            }
          })(String(tmp));
          closure_2 = tmp4;
          if (closure_2 === tmp4) {
            return closure_0.apply(self, items);
          } else {
            const obj = { from: tmp2, to: tmp4 };
            _mod682.triggerHandlers("history", obj);
          }
          tmp2 = closure_2;
        }
        return closure_0.apply(self, items);
      };
    }
    let tmpResult = _mod682;
    tmpResult.fill(_mod904.WINDOW.history, "pushState", historyReplacementFunction);
    tmpResult = _mod682;
    tmpResult.fill(_mod904.WINDOW.history, "replaceState", historyReplacementFunction);
  }
  obj = _mod682;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  _mod682.addHandler("history", arg0);
  _mod682.maybeInstrument("history", instrumentHistory);
};
export { instrumentHistory };