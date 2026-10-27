// === Module 914: ? ===

// Module 914
import _mod915 from "module_915" /* 915 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();
function onVisibilityUpdate(type) {
  if ((function isPageHidden(type) {
    let tmp = "pagehide" === type.type;
    if (!tmp) {
      const _document = require("module_913").WINDOW.document;
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
        _mod915.removePageListener("prerenderingchange", onVisibilityUpdate, true);
      }
    }
  }
}

export const getVisibilityWatcher = () => {
  if (require("module_913").WINDOW.document) {
    if (num2 < 0) {
      _require = tmp(916).getActivationStart();
      let tmp8;
      if (!tmp(913).WINDOW.document.prerendering) {
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
        const _document = tmp(913).WINDOW.document;
        let visibilityState;
        if (_document != null) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          num2 = Infinity;
        } else {
          const _document2 = tmp(913).WINDOW.document;
          let prerendering;
          if (_document2 != null) {
            prerendering = _document2.prerendering;
          }
          num2 = 0;
        }
        tmp8 = num2;
      }
      num2 = tmp8;
      const tmpResult = tmp(916);
      tmp(915).addPageListener("visibilitychange", onVisibilityUpdate, true);
      const tmpResult4 = tmp(915);
      tmp(915).addPageListener("pagehide", onVisibilityUpdate, true);
      const tmpResult5 = tmp(915);
      tmp(915).addPageListener("prerenderingchange", onVisibilityUpdate, true);
      const tmpResult6 = tmp(915);
    }
  }
  const obj = {};
  Object.defineProperty(obj, "firstHiddenTime", { get: () => num2, set: undefined });
  obj.onHidden = function onHidden(arg0) {
    set.add(arg0);
  };
  return obj;
};