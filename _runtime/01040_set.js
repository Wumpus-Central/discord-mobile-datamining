// === Module 1040: set ===

// Module 1040 (set)
import addPageListener from "addPageListener" /* 1041 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = -1;
const set = new Set();
function onVisibilityUpdate(type) {
  if ((function isPageHidden(type) {
    let tmp = "pagehide" === type.type;
    if (!tmp) {
      const _document = callback(table[0]).WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" === visibilityState;
    }
    return tmp;
  })(type)) {
    if (num2 > -1) {
      if ("visibilitychange" === type.type) {
        for (const item10012 of set) {
          let item10012Result = item10012();
          continue;
        }
      }
      const _isFinite = isFinite;
      if (!isFinite(num2)) {
        num2 = 0;
        if ("visibilitychange" === type.type) {
          num2 = type.timeStamp;
        }
        addPageListener.removePageListener("prerenderingchange", onVisibilityUpdate, true);
        const obj = addPageListener;
      }
    }
  }
}
arg5.getVisibilityWatcher = () => {
  if (_require(1039).WINDOW.document) {
    if (num2 < 0) {
      let tmpResult = tmp(1042);
      _require = tmpResult.getActivationStart();
      let tmp8;
      if (!tmp(1039).WINDOW.document.prerendering) {
        const _globalThis = globalThis;
        const _performance = performance;
        const entriesByType = _performance.getEntriesByType("visibility-state");
        const first = entriesByType.filter((name) => {
          let tmp = "hidden" === name.name;
          if (tmp) {
            tmp = name.startTime > closure_0;
          }
          return tmp;
        })[0];
        let startTime;
        if (first != null) {
          startTime = first.startTime;
        }
        tmp8 = startTime;
      }
      if (tmp8 == null) {
        const _document = tmp(1039).WINDOW.document;
        let visibilityState;
        if (_document != null) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          num2 = Infinity;
        } else {
          const _document2 = tmp(1039).WINDOW.document;
          let prerendering;
          if (_document2 != null) {
            prerendering = _document2.prerendering;
          }
          num2 = 0;
        }
        tmp8 = num2;
      }
      num2 = tmp8;
      tmpResult = tmp(1041);
      tmpResult.addPageListener("visibilitychange", onVisibilityUpdate, true);
      tmp(1041).addPageListener("pagehide", onVisibilityUpdate, true);
      const tmpResult1 = tmp(1041);
      tmp(1041).addPageListener("prerenderingchange", onVisibilityUpdate, true);
      const tmpResult2 = tmp(1041);
    }
  }
  const obj = {};
  Object.defineProperty(obj, "firstHiddenTime", { get: () => num2, set: undefined });
  obj.onHidden = function onHidden(arg0) {
    set.add(arg0);
  };
  return obj;
};