// _runtime/00927_whenIdleOrHidden.js
import _mod915 from "metro/00915__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const _document = tmp(913).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(922).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(922);
    tmp(915).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(915);
    tmp(915).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod915.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod915.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(915);
  }
  tmp3 = require("metro/00913__.js").WINDOW.requestIdleCallback || require("metro/00913__.js").WINDOW.setTimeout;
};
