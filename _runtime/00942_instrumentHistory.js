// === Module 942: instrumentHistory ===

// Module 942 (instrumentHistory)
import _mod693 from "module_693" /* 693 */;
import _mod915 from "module_915" /* 915 */;

require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = _mod915.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = _mod915.WINDOW.location.href;
    closure_2 = href;
    if (closure_2 !== href) {
      const obj = { from: tmp3, to: href };
      _mod693.triggerHandlers("history", obj);
      const tmpResult = _mod693;
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
            _mod693.triggerHandlers("history", obj);
          }
          tmp2 = closure_2;
        }
        return closure_0.apply(self, items);
      };
    }
    _mod693.fill(_mod915.WINDOW.history, "pushState", historyReplacementFunction);
    let tmpResult = _mod693;
    _mod693.fill(_mod915.WINDOW.history, "replaceState", historyReplacementFunction);
    const tmpResult2 = _mod693;
  }
  obj = _mod693;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  _mod693.addHandler("history", arg0);
  _mod693.maybeInstrument("history", instrumentHistory);
};
export { instrumentHistory };