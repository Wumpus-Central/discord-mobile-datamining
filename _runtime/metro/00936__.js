// === Module 936: ? ===

// Module 936
import _mod915 from "module_915" /* 915 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod915.WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      closure_0(type);
    }
  }
  require("module_917").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("module_917");
  require("module_917").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};