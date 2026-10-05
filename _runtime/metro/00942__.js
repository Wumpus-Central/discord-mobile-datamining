// _runtime/metro/00942__.js
import _mod693 from "00693__.js";
import _mod915 from "00915__.js";

let href;

function instrumentHistory() {
  const WINDOW = _mod915.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    href = _mod915.WINDOW.location.href;
    if (href !== href) {
      const obj = { from: tmp3, to: href };
      const tmpResult = _mod693;
      tmpResult.triggerHandlers("history", obj);
    }
  });
  let obj = _mod693;
  if (obj.supportsHistory()) {
    function historyReplacementFunction(arg0) {
      let closure_0 = arg0;
      return function () {
        function getAbsoluteUrl(arg0) {
          try {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const str = new URL(arg0, closure_1_0(closure_1_1[1]).WINDOW.location.origin);
            return str.toString();
          } catch (err) {
            return arg0;
          }
        }
        const items = [...arguments];
        let tmp;
        if (items.length > 2) {
          tmp = items[2];
        }
        let self = this;
        if (tmp) {
          const _String = String;
          const tmp4 = getAbsoluteUrl(String(tmp));
          const tmp2 = href;
          href = tmp4;
          if (href === tmp4) {
            return closure_0.apply(self, items);
          } else {
            let str = "history";
            const obj = { from: tmp2, to: tmp4 };
            const obj2 = _mod693;
            obj2.triggerHandlers("history", obj);
          }
        }
        return closure_0.apply(self, items);
      };
    }
    let tmpResult = _mod693;
    let str = "pushState";
    tmpResult.fill(_mod915.WINDOW.history, "pushState", historyReplacementFunction);
    const tmpResult2 = _mod693;
    tmpResult2.fill(_mod915.WINDOW.history, "replaceState", historyReplacementFunction);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  const obj = _mod693;
  obj.addHandler("history", arg0);
  const obj2 = _mod693;
  obj2.maybeInstrument("history", instrumentHistory);
};
export { instrumentHistory };
