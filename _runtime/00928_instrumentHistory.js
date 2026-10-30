// === Module 928: instrumentHistory ===

// Module 928 (instrumentHistory)
import _mod681 from "module_681" /* 681 */;
import _mod901 from "module_901" /* 901 */;

require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = _mod901.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = _mod901.WINDOW.location.href;
    closure_2 = href;
    if (closure_2 !== href) {
      const obj = { from: tmp3, to: href };
      _mod681.triggerHandlers("history", obj);
      const tmpResult = _mod681;
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
            _mod681.triggerHandlers("history", obj);
          }
          tmp2 = closure_2;
        }
        return closure_0.apply(self, items);
      };
    }
    _mod681.fill(_mod901.WINDOW.history, "pushState", historyReplacementFunction);
    let tmpResult = _mod681;
    _mod681.fill(_mod901.WINDOW.history, "replaceState", historyReplacementFunction);
    const tmpResult2 = _mod681;
  }
  obj = _mod681;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function addHistoryInstrumentationHandler(arg0) {
  _mod681.addHandler("history", arg0);
  _mod681.maybeInstrument("history", instrumentHistory);
}
export { instrumentHistory };