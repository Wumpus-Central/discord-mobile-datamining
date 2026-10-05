// _runtime/metro/00916__.js
import _mod917 from "00917__.js";

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let num2 = -1;
const set = new Set();
function onVisibilityUpdate(type) {
  function isPageHidden(type) {
    let tmp = "pagehide" === type.type;
    if (!tmp) {
      const _document = require("00915__.js").WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" === visibilityState;
    }
    return tmp;
  }
  if (isPageHidden(type)) {
    let tmp = num2;
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
        const obj = _mod917;
        obj.removePageListener("prerenderingchange", onVisibilityUpdate, true);
      }
    }
  }
}

export const getVisibilityWatcher = () => {
  let closure_0;
  const tmp = _require;
  if (require("00915__.js").WINDOW.document) {
    if (num2 < 0) {
      const tmpResult = tmp(918);
      _require = tmpResult.getActivationStart();
      let tmp8;
      if (!tmp(915).WINDOW.document.prerendering) {
        const _globalThis = globalThis;
        const _performance = performance;
        const entriesByType = _performance.getEntriesByType("visibility-state");
        const first = entriesByType.filter((name) => "hidden" === name.name && name.startTime > closure_0)[0];
        let startTime;
        if (first != null) {
          startTime = first.startTime;
        }
        tmp8 = startTime;
      }
      if (tmp8 == null) {
        const _document = tmp(915).WINDOW.document;
        let visibilityState;
        if (_document != null) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          num2 = Infinity;
        } else {
          const _document2 = tmp(915).WINDOW.document;
          let prerendering;
          if (_document2 != null) {
            prerendering = _document2.prerendering;
          }
          num2 = 0;
        }
        tmp8 = num2;
      }
      num2 = tmp8;
      const tmpResult4 = tmp(917);
      tmpResult4.addPageListener("visibilitychange", onVisibilityUpdate, true);
      const tmpResult5 = tmp(917);
      tmpResult5.addPageListener("pagehide", onVisibilityUpdate, true);
      const tmpResult6 = tmp(917);
      tmpResult6.addPageListener("prerenderingchange", onVisibilityUpdate, true);
    }
  }
  const obj = {
    onHidden(arg0) {
      set.add(arg0);
    },
  };
  Object.defineProperty(obj, "firstHiddenTime", { get: () => num2, set: undefined });
  return obj;
};
