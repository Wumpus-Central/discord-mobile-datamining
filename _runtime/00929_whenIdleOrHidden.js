// _runtime/00929_whenIdleOrHidden.js
import _mod917 from "metro/00917__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const _document = tmp(915).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(924).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(924);
    tmp(917).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(917);
    tmp(917).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod917.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod917.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(917);
  }
  tmp3 = require("metro/00915__.js").WINDOW.requestIdleCallback || require("metro/00915__.js").WINDOW.setTimeout;
};
